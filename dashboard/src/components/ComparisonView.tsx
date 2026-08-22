import DriverCard from "./DriverCard";
import type { DriverSummary } from "../types/f1Types";
import VsBadge from "./VSBadge";

interface ComparisonViewProps {
  // Define any props for the ComparisonView component if needed
  driver1: DriverSummary;
  driver2: DriverSummary;
}

const ComparisonView = (props: ComparisonViewProps) => {
  return (
    <div className="grid grid-cols-[1fr_auto_1fr] gap-4 items-center">
      <DriverCard
        full_name={props.driver1.full_name}
        first_name={props.driver1.first_name}
        last_name={props.driver1.last_name}
        team={props.driver1.team}
        driver_number={props.driver1.driver_number}
        position={props.driver1.position}
        grid_position={props.driver1.grid_position}
        points={props.driver1.points}
        status={props.driver1.status}
        top_speed={props.driver1.top_speed}
        avg_lap_time={props.driver1.avg_lap_time}
        fastest_lap_time={props.driver1.fastest_lap}
        total_laps={props.driver1.total_laps}
        total_pits={props.driver1.total_pits}
      />
      <VsBadge />
      <DriverCard
        full_name={props.driver2.full_name}
        first_name={props.driver2.first_name}
        last_name={props.driver2.last_name}
        team={props.driver2.team}
        driver_number={props.driver2.driver_number}
        position={props.driver2.position}
        grid_position={props.driver2.grid_position}
        points={props.driver2.points}
        status={props.driver2.status}
        top_speed={props.driver2.top_speed}
        avg_lap_time={props.driver2.avg_lap_time}
        fastest_lap_time={props.driver2.fastest_lap}
        total_laps={props.driver2.total_laps}
        total_pits={props.driver2.total_pits}
      />
    </div>
  );
};

export default ComparisonView;
