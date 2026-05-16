from fastapi import APIRouter
from app.services.f1_service import get_driver_summary

router = APIRouter(prefix="/driver_summary")

@router.get("/{driver_key}/{year}/{grand_prix}/{session_type}")
def read_driver_summary(driver_key: str, year: int, grand_prix: str, session_type: str):
    """
    Get driver summary data for a specific session.
    """
    return get_driver_summary(driver_key, year, grand_prix, session_type)


