# Use uma imagem Python oficial
FROM python:3.9-slim

# Define o diretório de trabalho
WORKDIR /code

# Copia o arquivo de dependências e instala
COPY ./requirements.txt /code/requirements.txt
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

# Copia o código da aplicação
COPY ./app /code/app

# Expõe a porta que a API irá rodar e define o comando para iniciar
EXPOSE 8000
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]