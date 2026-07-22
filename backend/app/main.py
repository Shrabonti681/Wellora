from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Wellora API",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root() -> dict[str, str]:
    return {
        "message": "Welcome to the Wellora API",
    }


@app.get("/api/v1/health")
def health_check() -> dict[str, str]:
    return {
        "status": "healthy",
        "service": "Wellora API",
    }