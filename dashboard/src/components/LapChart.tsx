import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { formatLapTime, formatAxisTime } from "../utils/formatters.ts";

import type { LapData } from "../types/f1Types.ts";

interface LapChartProps {
  lapData: LapData[];
  driver1Code: string;
  driver2Code: string;
  colour1: string;
  colour2: string;
}

const LapChart = ({ lapData, driver1Code, driver2Code, colour1, colour2 }: LapChartProps) => {
  // Map lap data into a format suitable for recharts: { lap: 1, HAM: 92.871, RUS: 93.123 }
  const byLap = new Map<number, Record<string, number | null>>();

  // Populate the map with lap data
  for (const lap of lapData) {
    const row = byLap.get(lap.LapNumber) ?? { lap: lap.LapNumber };
    row[lap.Driver] = lap.LapTime;
    byLap.set(lap.LapNumber, row);
  }

  const data = Array.from(byLap.values()).sort((a, b) => (a.lap as number) - (b.lap as number));
  const lapTimes = lapData.map((l) => l.LapTime).filter((t): t is number => t != null);

  const fastest = Math.min(...lapTimes);
  const yMin = formatLapTime(Math.floor(fastest - 0.5));
  const yMax = formatLapTime(Math.ceil(fastest * 1.07));

  return (
    <div className="bg-black rounded-xl p-5 h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} style={{ fontFamily: "Inter, sans-serif", outline: "none" }}>
          <CartesianGrid stroke="#1E1E1E" />
          <XAxis dataKey="lap" />
          <YAxis
            stroke="#666666"
            domain={[yMin, yMax]}
            tickFormatter={(value) => formatAxisTime(value)}
            width={70}
          />
          <Line dataKey={driver1Code} stroke={colour1} dot={false} strokeWidth={3} />
          <Line dataKey={driver2Code} stroke={colour2} dot={false} strokeWidth={3} />
          <Tooltip
            formatter={(value) => formatLapTime(Number(value))}
            labelFormatter={(label) => `Lap ${label}`}
            contentStyle={{
              backgroundColor: "#1E1E1E",
              border: "1px solid #2A2A2A",
              borderRadius: 8,
            }}
            labelStyle={{ color: "#666666", fontSize: 11 }}
            itemStyle={{ fontSize: 13 }}
            cursor={{ stroke: "#444444", strokeDasharray: "3 3" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LapChart;
