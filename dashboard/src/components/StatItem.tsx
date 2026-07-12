interface StatItemProps {
  label: string;
  value: string | number;
  fasterHighlight: boolean;
  purpleSectorHighlight: boolean;
}

const StatItem = ({
  label,
  value,
  fasterHighlight,
  purpleSectorHighlight,
}: StatItemProps) => {
  return (
    <>
      <div className="flex flex-col gap-1 p-2">
        <span className="text-[13px] flex text-[#666666] uppercase tracking-widest">
          {label}
        </span>

        <div
          className={`text-[15px] flex text-lg font-medium ${
            purpleSectorHighlight
              ? "text-[#a78bfa]"
              : fasterHighlight
                ? "text-[#4ade80]"
                : "text-white"
          }`}
        >
          {value}
        </div>
      </div>
    </>
  );
};

export default StatItem;
