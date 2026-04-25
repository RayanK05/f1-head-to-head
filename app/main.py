from fastapi import FastAPI
app = FastAPI() 

from app.routers import drivers
#from app.routers import laps  

#app.include_router(laps.router)
app.include_router(drivers.router)
