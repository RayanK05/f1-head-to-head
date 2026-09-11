import type { DriverListItem, ScheduleEvent } from "../types/f1Types.ts";
import DriverDropdown from "./DriverDropdown.tsx";

interface TopBarProps {
  year: number;
  onYearChange: (year: number) => void;
  grandPrix: string;
  onGrandPrixChange: (grandPrix: string) => void;
  schedule: ScheduleEvent[];
  drivers: DriverListItem[]; // Add this line to include the drivers prop
  driver1: string; // Add this line to include the selected driver 1
  driver2: string; // Add this line to include the selected driver 2
  onDriver1Change: (driver: string) => void; // Add this line for driver 1 change handler
  onDriver2Change: (driver: string) => void; // Add this line for driver 2 change handler
}

const TopBar = ({
  year,
  onYearChange,
  grandPrix,
  onGrandPrixChange,
  schedule,
  drivers,
  driver1,
  driver2,
  onDriver1Change,
  onDriver2Change,
}: TopBarProps) => {
  return (
    <div className="border-b border-[#2A2A2A] flex items-center justify-between px-6 py-3">
      <div>
        <h1
          className="text-white"
          style={{
            fontFamily: "Barlow Condensed",
            fontSize: "24px",
            fontWeight: 700,
          }}
        >
          Head 2 Head
        </h1>
        <p className="text-[10px] uppercase tracking-widest text-[#666666]">
          Powered by FastF1 API
        </p>
      </div>

      <div className="flex gap-3">
        <select
          className="bg-[#1A1A1A] border border-[#2E2E2E] rounded-lg px-3 py-2 text-sm text-white outline-none focus:border-[#444]"
          value={year}
          onChange={(e) => onYearChange(parseInt(e.target.value))}
        >
          <option value="2026">2026</option>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>

        <select
          className="bg-[#1A1A1A] border border-[#2E2E2E] rounded-lg px-3 py-2 text-sm text-white outline-none focus:border-[#444]"
          value={grandPrix}
          onChange={(e) => onGrandPrixChange(e.target.value)}
        >
          {schedule.map((event) => (
            <option key={event.round_number} value={event.event_name}>
              {event.event_name}
            </option>
          ))}
        </select>

        {/* currently not using this select, but leaving it here for future use. It will allow users to select the session type (Race, Qualifying */}

        {/* <select className="bg-[#1A1A1A] border border-[#2E2E2E] rounded-lg px-3 py-2 text-sm text-white outline-none focus:border-[#444]">
          <option value="R">Race</option>
          <option value="Q">Qualifying</option>
          <option value="FP3">FP3</option>
          <option value="FP2">FP2</option>
          <option value="FP1">FP1</option>
        </select> */}
      </div>

      <div className="flex gap-3">
        <DriverDropdown
          drivers={drivers}
          selectedDriver={driver1}
          onDriverChange={onDriver1Change}
        />
        <DriverDropdown
          drivers={drivers}
          selectedDriver={driver2}
          onDriverChange={onDriver2Change}
        />
      </div>
    </div>
  );
};
export default TopBar;
