interface SectorBarProps {
  time1: number | null;
  time2: number | null;
  colour1: string;
  colour2: string;
  sector: string;
}

const SectorBar = ({ time1, time2, colour1, colour2, sector }: SectorBarProps) => {
  if (time1 == null || time2 == null) {
    return (
      <div className="flex flex-col gap-1">
        <div className="h-2 rounded-full bg-[#1E1E1E]" />
        <span className="text-[10px] text-[#666666] text-center">{sector} · no data</span>
      </div>
    );
  }

  const total = (time1 || 0) + (time2 || 0);
  const width1 = total > 0 ? ((time1 || 0) / total) * 100 : 0;
  const width2 = total > 0 ? ((time2 || 0) / total) * 100 : 0;
  const delta = Math.abs((time1 || 0) - (time2 || 0));

  return (
    <div className="flex flex-col gap-1">
      <div className="flex h-2 rounded-full overflow-hidden">
        <div className="h-full" style={{ width: `${width1}%`, backgroundColor: colour1 }} />
        <div className="h-full" style={{ width: `${width2}%`, backgroundColor: colour2 }} />
      </div>
      <span className="text-[10px] text-[#666666] text-center">
        {sector} · {delta.toFixed(3)}s
      </span>
    </div>
  );
};
export default SectorBar;
