from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

#Temporary CORS settings for development. In production,  should restrict the allowed origins to frontend domain.
origin = "http://localhost:5173"

app.add_middleware(
    CORSMiddleware,
    allow_origins=[origin],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

from app.routers import drivers, laps, summary, comparisions, sessions

app.include_router(laps.router)
app.include_router(drivers.router)
app.include_router(summary.router)
app.include_router(comparisions.router)
app.include_router(sessions.router)
