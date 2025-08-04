from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.routes import properties

app = FastAPI(title="Construtora Roper API", version="1.0.0")

# Configuração de CORS para permitir que o frontend acesse a API
# Em produção, restrinja a origem para 'https://www.construtoraroper.com.br'
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Mudar em produção!
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(properties.router, prefix="/api/v1/properties", tags=["Properties"])

@app.get("/health")
def health_check():
    return {"status": "ok"}