from fastapi import FastAPI
from pydantic import BaseModel
from modelo import predecirSentimiento
app=FastAPI()
class EntradaTexto(BaseModel):
    texto:str

@app.post("/predecir")
def predecir(data:EntradaTexto):
    resultado=predecirSentimiento(data.texto)
    return resultado
    