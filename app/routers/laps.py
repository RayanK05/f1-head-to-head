from fastapi import APIRouter
from app.services.f1_service import get_lap_data

router = APIRouter(prefix="/laps")

@router.get("/{year}/{grand_prix}/{session_type}")
def read_lap_data(year: int, grand_prix: str, session_type: str, drivers: str = None):
    """
    Get lap data for a specific session.
    Filter to specific drivers.
    """
    drivers = drivers.split(',') if drivers else None
    return get_lap_data(year, grand_prix, session_type, drivers)




