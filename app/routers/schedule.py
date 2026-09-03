from app.services.f1_service import get_event_schedule
from fastapi import APIRouter 

router = APIRouter(prefix="/schedule")

@router.get("/{year}")
def read_session_info(year: int):
    """
    Get event schedule for a specific year.
    """
    return get_event_schedule(year)