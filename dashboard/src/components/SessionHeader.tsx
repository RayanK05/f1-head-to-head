import StatItem from "./StatItem";
import { COUNTRY_CODES } from "../constants/countryCodes";

interface SessionHeaderProps {
  year: number;
  session_type: string;
  event_name: string;
  country: string;
  location: string;
  round_number: number;
  date: string;
  official_event_name: string;
}

const SessionHeader = ({
  session_type,
  event_name,
  location,
  round_number,
  date,
  country,
}: SessionHeaderProps) => {
  const code = COUNTRY_CODES[country] || "Unknown";
  return (
    <div className="flex items-end justify-between">
      <div className="flex items-center gap-4">
        <div>
          <h1
            style={{
              fontFamily: "Barlow Condensed",
              fontSize: "56px",
              fontWeight: 700,
            }}
            className="text-white uppercase leading-none"
          >
            {event_name}
          </h1>
          <p className="text-[11px] uppercase tracking-widest text-[#666666] mt-1">
            Grand Prix · Round {round_number}
          </p>
        </div>
        <img
          src={`https://flagcdn.com/w80/${code.toLowerCase()}.png`}
          alt={country}
          className="h-9 w-auto rounded-sm border border-white/20"
        />
      </div>

      {/* right — stats */}
      <div className="flex gap-8">
        <StatItem
          label="Circuit"
          value={location}
          fasterHighlight={false}
          purpleSectorHighlight={false}
        />
        <StatItem
          label="Date"
          value={date}
          fasterHighlight={false}
          purpleSectorHighlight={false}
        />
        <StatItem
          label="Session"
          value={session_type}
          fasterHighlight={false}
          purpleSectorHighlight={false}
        />
      </div>
    </div>
  );
};

export default SessionHeader;
