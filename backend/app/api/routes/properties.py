from fastapi import APIRouter, Depends, HTTPException, Query
from typing import List
from app.services.supabase_client import get_supabase_client
from app.models.property import Property

router = APIRouter()

@router.get("/", response_model=List[Property])
def get_properties(
    location: str = Query(None, description="Filtrar por localização"),
    min_price: float = Query(None, description="Preço mínimo"),
    max_price: float = Query(None, description="Preço máximo"),
    is_featured: bool = Query(None, description="Filtrar apenas destaques"),
    supabase = Depends(get_supabase_client)
):
    """
    Retorna uma lista de imóveis com filtros opcionais.
    Nenhuma implementação sensível é exposta aqui.
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

        data = query.execute()
        return data.data
    except Exception as e:
        # Log do erro no servidor é uma boa prática
        print(f"Error fetching properties: {e}")
        raise HTTPException(status_code=500, detail="An error occurred while fetching properties.")