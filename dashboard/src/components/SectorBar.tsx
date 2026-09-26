interface SectorBarProps {
  time1: number | null;
  time2: number | null;
  colour1: string;
  colour2: string;
  sector: string;
}

const SectorBar = ({ time1, time2, colour1, colour2, sector }: SectorBarProps) => {
  //checking if either time is null, if so return a placeholder bar with "no data"
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
  const driver1faster = time1 < time2;

  return (
    <div className="flex flex-col gap-1">
      <span className="text-[10px] text-[#666666] text-center">{`+Δ ${delta.toFixed(3)}s`}</span>

      <div className="flex items-center gap-2">
        {driver1faster && (
          <span className="text-[10px] ml-1" style={{ color: colour1 }}>
            FAST
          </span>
        )}
        <span
          className="text-xs font-medium whitespace-nowrap"
          style={{ color: colour1, opacity: driver1faster ? 1 : 0.5 }}
        >
          {time1.toFixed(3)}
        </span>

        <div className="flex h-2 rounded-full overflow-hidden flex-1">
          <div
            className="h-full"
            style={{
              width: `${width1}%`,
              backgroundColor: colour1,
              opacity: driver1faster ? 1 : 0.5,
            }}
          />
          <div
            className="h-full"
            style={{
              width: `${width2}%`,
              backgroundColor: colour2,
              opacity: !driver1faster ? 1 : 0.5,
            }}
          />
        </div>
        <span
          className="text-xs font-medium whitespace-nowrap"
          style={{ color: colour2, opacity: !driver1faster ? 1 : 0.5 }}
        >
          {time2.toFixed(3)}
        </span>
        {!driver1faster && (
          <span className="text-[10px] mr-1" style={{ color: colour2 }}>
            FAST
          </span>
        )}
      </div>

      <span className="text-[10px] text-[#666666] text-center">{sector.toUpperCase()}</span>
    </div>
  );
};
export default SectorBar;
