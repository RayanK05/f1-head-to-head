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
  const data = [
    { lap: 1, [driver1Code]: 94.2, [driver2Code]: 93.8 },
    { lap: 2, [driver1Code]: 93.1, [driver2Code]: 92.9 },
    { lap: 3, [driver1Code]: 93.4, [driver2Code]: 92.7 },
    { lap: 4, [driver1Code]: 93.0, [driver2Code]: 92.8 },
  ];

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
