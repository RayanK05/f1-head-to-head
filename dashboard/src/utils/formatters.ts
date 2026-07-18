// converts seconds to F1 lap time format: 1:32.871
export function formatLapTime(seconds: number): string {
  if (!seconds) return '--'
  const mins = Math.floor(seconds / 60)
  const secs = (seconds % 60).toFixed(3).padStart(6, '0')
  return `${mins}:${secs}`
}

// adds P prefix to position number
export function formatPosition(position: number): string {
  if (!position) return '--'
  return `P${position}`
}

// rounds speed to one decimal
export function formatSpeed(speed: number): string { 
  if (!speed) return '--'
  return `${Math.round(speed)} km/h`
}

// formats points — remove decimal if whole number
export function formatPoints(points: number): string {
  return points % 1 === 0 ? points.toString() : points.toFixed(1)
}