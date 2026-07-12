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
      <div className="flex flex-col  p-2">
        <div className="flex text-[#666666]">{label}</div>

        <div
          className={`flex text-lg ${
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
