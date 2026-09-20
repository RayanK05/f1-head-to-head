import type { DriverSummary } from "../types/f1Types.ts";
import SectorBar from "./SectorBar.tsx";

interface SectorComparisonProps {
  driver1: DriverSummary;
  driver2: DriverSummary;
}

const SectorComparison = ({ driver1, driver2 }: SectorComparisonProps) => {
  return (
    <div className="bg-[#161616] rounded-xl p-5">
      {/* header row — label left, legend right */}
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[11px] uppercase tracking-widest text-[#666666]">Sector Comparison</p>
          <h2 className="text-white text-base font-medium mt-1">
            Fastest average sector time, per driver
          </h2>
        </div>

        {/* legend */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: driver1.team_colour }}
            />
            <span className="text-xs text-[#AAAAAA]">{driver1.abbreviation}</span>
          </div>
          <div className="flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: driver2.team_colour }}
            />
            <span className="text-xs text-[#AAAAAA]">{driver2.abbreviation}</span>
          </div>
        </div>
      </div>

      {/* three sector bars */}
      <div className="grid grid-cols-3 gap-8 mt-6">
        <SectorBar
          time1={driver1.avg_sector1}
          time2={driver2.avg_sector1}
          colour1={driver1.team_colour}
          colour2={driver2.team_colour}
          sector="Sector 1"
        />
        <SectorBar
          time1={driver1.avg_sector2}
          time2={driver2.avg_sector2}
          colour1={driver1.team_colour}
          colour2={driver2.team_colour}
          sector="Sector 2"
        />
        <SectorBar
          time1={driver1.avg_sector3}
          time2={driver2.avg_sector3}
          colour1={driver1.team_colour}
          colour2={driver2.team_colour}
          sector="Sector 3"
        />
      </div>

      {/* cumulative row */}
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-[#2A2A2A]">
        <span className="text-sm" style={{ color: driver1.team_colour }}>
          {/* driver 1 total */}
        </span>

        <span className="text-xs px-3 py-1.5 rounded-full border">{/* Δ 0.201s · VER */}</span>

        <span className="text-sm" style={{ color: driver2.team_colour }}>
          {/* driver 2 total */}
        </span>
      </div>
    </div>
  );
};

export default SectorComparison;
