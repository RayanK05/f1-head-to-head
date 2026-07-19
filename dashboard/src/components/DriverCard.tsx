import { TEAM_COLOURS } from "../constants/teamColours.ts";
import StatItem from "./StatItem.tsx";
import {
  formatLapTime,
  formatPosition,
  formatSpeed,
} from "../utils/formatters.ts";

interface DriverCardProps {
  full_name: string;
  team: string;
  driver_number: string;
  position: number;
  grid_position: number;
  points: number;
  status: string;
  top_speed: number;
  avg_lap_time: number;
  fastest_lap_time: number;
  first_name: string;
  last_name: string;
  total_laps: number;
  pits: number; // Optional property for total pit stops
}

const DriverCard = ({
  full_name,
  first_name,
  last_name,
  team,
  driver_number,
  position,
  grid_position,
  points,
  status,
  top_speed,
  avg_lap_time,
  fastest_lap_time,
  total_laps,
  pits,
}: DriverCardProps) => {
  return (
    <div>
      <div
        className="bg-[#161616] rounded-xl p-5 relative overflow-hidden "
        style={{ borderTop: `4px solid ${TEAM_COLOURS[team]}` }}
      >
        <span
          className="absolute bottom-0 right-2 font-bold leading-none select-none text-white pointer-events-none"
          style={{
            fontFamily: "Barlow Condensed",
            fontSize: "160px",
            opacity: 0.06,
          }}
        >
          {driver_number}
        </span>

        <h2
          className="text-white uppercase opacity-40"
          style={{
            fontFamily: "Barlow Condensed",
            fontSize: "30px",
          }}
        >
          {first_name}
        </h2>

        <h1
          style={{
            fontFamily: "Barlow Condensed",
            fontSize: "64px",
            fontWeight: 700,
          }}
          className="text-white uppercase"
        >
          {last_name}
        </h1>

        <div className="grid grid-cols-3 gap-4 mt-8">
          <StatItem
            label="FASTEST LAP"
            value={formatLapTime(fastest_lap_time)}
            fasterHighlight={false}
            purpleSectorHighlight={true}
          />
          <StatItem
            label="AVG LAP"
            value={formatLapTime(avg_lap_time)}
            fasterHighlight={true}
            purpleSectorHighlight={false}
          />
          <StatItem
            label="POSITION"
            value={formatPosition(position)}
            fasterHighlight={false}
            purpleSectorHighlight={false}
          />
        </div>
        <hr className="border-gray-600 my-2 opacity-30" />
        <div className="grid grid-cols-3 gap-4 mt-4">
          <StatItem
            label="GRID POSITION"
            value={formatPosition(grid_position)}
            fasterHighlight={false}
            purpleSectorHighlight={false}
          />
          <StatItem
            label="POINTS"
            value={points}
            fasterHighlight={false}
            purpleSectorHighlight={false}
          />
          <StatItem
            label="STATUS"
            value={status}
            fasterHighlight={false}
            purpleSectorHighlight={false}
          />
        </div>
        <hr className="border-gray-600 my-2 opacity-30" />
        <div className="grid grid-cols-3 gap-4 mt-4">
          <StatItem
            label="PITS"
            value={pits}
            fasterHighlight={false}
            purpleSectorHighlight={false}
          />
          <StatItem
            label="TOTAL LAPS"
            value={total_laps}
            fasterHighlight={false}
            purpleSectorHighlight={false}
          />
          <StatItem
            label="TOP SPEED"
            value={formatSpeed(top_speed)}
            fasterHighlight={false}
            purpleSectorHighlight={false}
          />
        </div>
        <hr className="border-gray-600 my-2 opacity-30" />
      </div>
    </div>
  );
};

export default DriverCard;
