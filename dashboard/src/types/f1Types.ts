export interface DriverSummary {
  abbreviation: string;
  full_name: string;
  first_name: string;
  last_name: string;
  team: string;
  team_colour: string;
  driver_number: string;
  position: number;
  grid_position: number;
  points: number;
  status: string;
  avg_lap_time: number;
  fastest_lap: number;
  top_speed: number;
  total_laps: number;
  total_pits: number;
  avg_sector1: number | null;
  avg_sector2: number | null;
  avg_sector3: number | null;
}

export interface SessionInfo {
  year: number;
  session_type: string;
  event_name: string;
  country: string;
  location: string;
  round_number: number;
  date: string;
  official_event_name: string;
}

export interface ComparisonResponse {
  driver1: DriverSummary;
  driver2: DriverSummary;
}

export interface LapData {
  Driver: string;
  LapNumber: number;
  LapTime: number;
  Sector1Time: number | null;
  Sector2Time: number | null;
  Sector3Time: number | null;
  Stint: number;
  Compound: string;
  TyreLife: number;
  IsPersonalBest: boolean;
}

export interface ScheduleEvent {
  round_number: number;
  event_name: string;
}

export interface DriverListItem {
  abbreviation: string;
  full_name: string;
  last_name: string;
  driver_number: number;
}
