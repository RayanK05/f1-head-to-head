import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import type { LapData } from "../types/f1Types.ts";

interface LapChartProps {
  lapData: LapData[];
  driver1Code: string;
  driver2Code: string;
  colour1: string;
  colour2: string;
}

const LapChart = ({ lapData, driver1Code, driver2Code, colour1, colour2 }: LapChartProps) => {
  const byLap = new Map<number, Record<string, number | null>>();

  for (const lap of lapData) {
    const row = byLap.get(lap.LapNumber) ?? { lap: lap.LapNumber };
    row[lap.Driver] = lap.LapTime;
    byLap.set(lap.LapNumber, row);
  }

  const data = Array.from(byLap.values()).sort((a, b) => (a.lap as number) - (b.lap as number));
  console.log("LapChart data:", data);

  return (
    <div className="bg-[#161616] rounded-xl p-5 h-80">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[11px] uppercase tracking-widest text-[#666666]">
            Lap-Time Comparison
          </p>
          <h2 className="text-white text-base font-medium mt-1">Average lap time, per driver</h2>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid stroke="#1E1E1E" />
          <XAxis dataKey="lap" stroke="#666666" />
          <YAxis stroke="#666666" />
          <Tooltip />
          <Line dataKey={driver1Code} stroke={colour1} dot={false} />
          <Line dataKey={driver2Code} stroke={colour2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LapChart;
