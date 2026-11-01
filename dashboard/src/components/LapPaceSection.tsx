import LapChart from "./LapChart.tsx";
import type { LapData } from "../types/f1Types.ts";

interface LapPaceSectionProps {
  lapData: LapData[];
  driver1Code: string;
  driver2Code: string;
  colour1: string;
  colour2: string;
}

const LapPaceSection = ({
  lapData,
  driver1Code,
  driver2Code,
  colour1,
  colour2,
}: LapPaceSectionProps) => {
  return (
    <div className="bg-[#161616] rounded-xl p-5 h-110">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[11px] uppercase tracking-widest text-[#666666]">
            Lap-Time Comparison
          </p>
          <h2 className="text-white text-base font-medium mt-1">Average lap time, per driver</h2>
        </div>
      </div>
      <div className="mt-4">
        <LapChart
          lapData={lapData}
          driver1Code={driver1Code}
          driver2Code={driver2Code}
          colour1={colour1}
          colour2={colour2}
        />
      </div>
    </div>
  );
};

export default LapPaceSection;
