import DriverCard from "./DriverCard";
import type { DriverSummary } from "../types/f1Types";
import VsBadge from "./VSBadge";

interface ComparisonViewProps {
  // Define any props for the ComparisonView component if needed
  driver1: DriverSummary;
  driver2: DriverSummary;
}

const ComparisonView = ({ driver1, driver2 }: ComparisonViewProps) => {
  return (
    <div className="grid grid-cols-[1fr_auto_1fr] gap-4 items-center">
      <DriverCard
        full_name={driver1.full_name}
        first_name={driver1.first_name}
        last_name={driver1.last_name}
        team={driver1.team}
        driver_number={driver1.driver_number}
        position={driver1.position}
        grid_position={driver1.grid_position}
        points={driver1.points}
        status={driver1.status}
        top_speed={driver1.top_speed}
        avg_lap_time={driver1.avg_lap_time}
        fastest_lap_time={driver1.fastest_lap}
        total_laps={driver1.total_laps}
        total_pits={driver1.total_pits}
      />
      <VsBadge />
      <DriverCard
        full_name={driver2.full_name}
        first_name={driver2.first_name}
        last_name={driver2.last_name}
        team={driver2.team}
        driver_number={driver2.driver_number}
        position={driver2.position}
        grid_position={driver2.grid_position}
        points={driver2.points}
        status={driver2.status}
        top_speed={driver2.top_speed}
        avg_lap_time={driver2.avg_lap_time}
        fastest_lap_time={driver2.fastest_lap}
        total_laps={driver2.total_laps}
        total_pits={driver2.total_pits}
      />
    </div>
  );
};

export default ComparisonView;
