from app.services.f1_service import get_comparision
from fastapi import APIRouter

router = APIRouter(prefix="/comparision")
@router.get("/{year}/{grand_prix}/{session_type}/{driver1}/{driver2}")
def read_comparision(year: int, grand_prix: str, session_type: str, driver1: str, driver2: str):
    """
    Get comparision data for two drivers in a specific session.
    """
    return get_comparision(year, grand_prix, session_type, driver1, driver2)