from transformers import pipeline
clasificador_sentimientos=pipeline("sentiment-analysis",model="nlptown/bert-base-multilingual-uncased-sentiment")

def predecirSentimiento(entrada):
    resultado=clasificador_sentimientos(entrada)
    return resultado