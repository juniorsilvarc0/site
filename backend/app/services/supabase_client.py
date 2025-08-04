from supabase import create_client, Client
from app.core.config import settings

def get_supabase_client() -> Client:
    """
    Cria e retorna um cliente Supabase.
    A segurança é garantida porque a chave (SUPABASE_KEY) é uma 'service_role key',
    usada apenas no backend, e nunca exposta ao cliente.
    """
    if not settings.SUPABASE_URL or not settings.SUPABASE_KEY:
        raise ValueError("Supabase URL and Key must be set in environment variables.")
    
    supabase: Client = create_client(settings.SUPABASE_URL, settings.SUPABASE_KEY)
    return supabase