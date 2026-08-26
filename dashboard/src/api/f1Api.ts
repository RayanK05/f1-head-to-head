import axios from 'axios';
import type { SessionInfo } from '../types/f1Types';
import type { DriverSummary } from '../types/f1Types';

// Temporary note: The BASE_URL is currently set to a local development server. In a production environment, this should be updated to the actual API endpoint.
const BASE_URL = "http://127.0.0.1:8000";

export function getDriverSummary(driverId: string, year: number, event: string, sessionType: string) {
    return axios.get<DriverSummary>(`${BASE_URL}/driver_summary/${driverId}/${year}/${event}/${sessionType}`);
}

export function getSessionInfo(year: number, grand_prix: string, sessionType: string) {
    return axios.get<SessionInfo>(`${BASE_URL}/sessions/${year}/${grand_prix}/${sessionType}`);
}
