import os
from dotenv import load_dotenv

# Carrega as variáveis do arquivo .env (que não deve ir para o Git)
load_dotenv()

class Settings:
    SUPABASE_URL: str = os.getenv("SUPABASE_URL", "https://jcavwlwklgkfcittablk.supabase.co")
    # A SUPABASE_KEY NUNCA deve ser exposta no código.
    # Ela será lida do ambiente Docker.
    SUPABASE_KEY: str = os.getenv("SUPABASE_KEY")

settings = Settings()