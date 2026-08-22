export interface DriverSummary {
  abbreviation: string
  full_name: string
  first_name: string
  last_name: string
  team: string
  team_colour: string
  driver_number: string
  position: number
  grid_position: number
  points: number
  status: string
  avg_lap_time: number
  fastest_lap: number
  top_speed: number
  total_laps: number
  total_pits: number
  // optional — only needed for sector comparison
  avg_sector1?: number
  avg_sector2?: number
  avg_sector3?: number
}

//TODO: Add more types for the F1 API responses as needed, such as for lap data, pit stops, etc.

export interface SessionInfo {
  year: number
  session_type: string
  event_name: string
  country: string
  location: string
  round_number: number
  date: string
  circuit: string
}

export interface ComparisonResponse {
  driver1: DriverSummary
  driver2: DriverSummary
}

export interface LapData {
  Driver: string
  LapNumber: number
  LapTime: number
  Sector1Time: number | null
  Sector2Time: number | null
  Sector3Time: number | null
  Stint: number
  Compound: string
  TyreLife: number
  IsPersonalBest: boolean
}