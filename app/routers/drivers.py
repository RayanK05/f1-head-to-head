from app.services.f1_service import get_drivers
from fastapi import APIRouter

router = APIRouter(prefix="/drivers")
@router.get("/{year}/{grand_prix}/{session_type}")
def read_drivers(year: int, grand_prix: str, session_type: str):
    """
    Get drivers for a specific session.
    """
    return get_drivers(year, grand_prix, session_type)

