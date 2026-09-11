import type { DriverListItem } from "../types/f1Types.ts";

interface DriverDropdownProps {
  drivers: DriverListItem[];
  selectedDriver: string;
  onDriverChange: (driver: string) => void;
  excludeDrivers?: string[];
}

const DriverDropdown = ({
  drivers,
  selectedDriver,
  onDriverChange,
  excludeDrivers,
}: DriverDropdownProps) => {
  return (
    <select
      className="bg-[#1A1A1A] border border-[#2E2E2E] rounded-lg px-3 py-2 text-sm text-white "
      value={selectedDriver}
      onChange={(e) => onDriverChange(e.target.value)}
    >
      {drivers
        .filter((d) => !excludeDrivers?.includes(d.abbreviation))
        .map((driver) => (
          <option key={driver.abbreviation} value={driver.abbreviation}>
            {driver.full_name}
          </option>
        ))}
    </select>
  );
};

export default DriverDropdown;
