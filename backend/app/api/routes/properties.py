from fastapi import APIRouter, Depends, HTTPException, Query
from typing import List
from app.services.supabase_client import get_supabase_client
from app.models.property import Property
import os

router = APIRouter()

# Lê a variável de ambiente (opcional). Ex.: http://localhost:3000
FRONTEND_BASE_URL = os.getenv("FRONTEND_BASE_URL", "").rstrip("/")


def build_full_image_urls(properties_data: List[dict]) -> List[dict]:
    """
    Normaliza as URLs de imagens vindas do banco.
    - Se a entrada já for absoluta (http/https //), mantém como está.
    - Se vier apenas o nome/caminho do arquivo, prefixa com FRONTEND_BASE_URL (se definida)
      ou deixa como caminho relativo ("/arquivo.jpg").
    Isso evita duplicações como http://localhost:3000/http://localhost:3000/arquivo.jpg
    e garante que tanto nomes simples quanto URLs completas funcionem.
    """
    for prop in properties_data:
        raw_list = prop.get("image_urls") or []
        normalized: List[str] = []

        for item in raw_list:
            if not item:
                continue

            s = str(item).strip()
            # Já é absoluta? Mantém.
            if s.startswith(("http://", "https://", "//")):
                normalized.append(s)
                continue

            # Caso seja apenas o nome/caminho do arquivo
            path = s.lstrip("/")  # evita barra dupla
            if FRONTEND_BASE_URL:
                normalized.append(f"{FRONTEND_BASE_URL}/{path}")
            else:
                normalized.append(f"/{path}")

        prop["image_urls"] = normalized

    return properties_data


@router.get("/", response_model=List[Property])
def get_properties(
    location: str = Query(None, description="Filtrar por localização"),
    min_price: float = Query(None, description="Preço mínimo"),
    max_price: float = Query(None, description="Preço máximo"),
    is_featured: bool = Query(None, description="Filtrar apenas destaques"),
    supabase=Depends(get_supabase_client),
):
    """
    Retorna uma lista de imóveis com filtros opcionais.
    """
    try:
        query = supabase.table("properties").select("*")

        if location:
            query = query.ilike("location", f"%{location}%")
        if min_price is not None:
            query = query.gte("price", min_price)
        if max_price is not None:
            query = query.lte("price", max_price)
        if is_featured is not None:
            query = query.eq("is_featured", is_featured)

        response = query.execute()

        # Normaliza as URLs de imagem antes de retornar
        properties_with_full_urls = build_full_image_urls(response.data or [])

        return properties_with_full_urls
    except Exception as e:
        # Log do erro no servidor é uma boa prática
        print(f"Error fetching properties: {e}")
        raise HTTPException(
            status_code=500,
            detail="An error occurred while fetching properties.",
        )
