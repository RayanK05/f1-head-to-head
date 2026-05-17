from fastapi import FastAPI
app = FastAPI() 

from app.routers import drivers, laps, summary, comparisions, sessions

app.include_router(laps.router)
app.include_router(drivers.router)
app.include_router(summary.router)
app.include_router(comparisions.router)
app.include_router(sessions.router)
