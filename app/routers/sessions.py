from app.services.f1_service import get_session_info
from fastapi import APIRouter 

router = APIRouter(prefix="/sessions")

@router.get("/{year}/{grand_prix}/{session_type}")
def read_session_info(year: int, grand_prix: str, session_type: str):
    """
    Get session information for a specific session.
    """
    return get_session_info(year, grand_prix, session_type)