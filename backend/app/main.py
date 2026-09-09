from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routers import auth, schemes
from . import models
from .database import engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="VyapaarAI API", version="1.0.0")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"], # Frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router)
app.include_router(schemes.router)

@app.get("/")
def read_root():
    return {"message": "Welcome to VyapaarAI API"}

@app.get("/health")
def health_check():
    return {"status": "healthy"}
