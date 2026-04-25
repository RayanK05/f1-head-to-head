from app.services.f1_service import get_session_results
from fastapi import APIRouter

router = APIRouter(prefix="/drivers")
@router.get("/{year}/{grand_prix}/{session_type}")
def read_session_results(year: int, grand_prix: str, session_type: str):
    """
    Get session results for a specific session.
    """
    return get_session_results(year, grand_prix, session_type)

