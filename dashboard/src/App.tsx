import "./index.css";
import ComparisonView from "./components/ComparisonView.tsx";
import SesionHeader from "./components/SessionHeader.tsx";
import TopBar from "./components/TopBar.tsx";
import { useState, useEffect } from "react";

import { getDriverSummary } from "./api/f1Api";
import type { DriverSummary } from "./types/f1Types.ts";

import { getSessionInfo } from "./api/f1Api";
import type { SessionInfo } from "./types/f1Types.ts";

function App() {
  const [year, setYear] = useState(2026);
  const [grandPrix, setGrandPrix] = useState("Canada"); // Default to Monaco GP
  const [sessionType, setSessionType] = useState("R");

  // selections (strings — these drive the fetch)
  const [driver1Code, setDriver1Code] = useState("LEC");
  const [driver2Code, setDriver2Code] = useState("VER");

  // fetched data (objects — these come back from the API)
  const [driver1Data, setDriver1Data] = useState<DriverSummary | null>(null);
  const [driver2Data, setDriver2Data] = useState<DriverSummary | null>(null);

  const [sessionInfo, setSessionInfo] = useState<SessionInfo | null>(null);

  useEffect(() => {
    // Fetch driver summaries for the selected drivers
    const fetchDriverSummaries = async () => {
      try {
        const driver1Response = await getDriverSummary(
          driver1Code,
          year,
          grandPrix,
          sessionType,
        );
        const driver2Response = await getDriverSummary(
          driver2Code,
          year,
          grandPrix,
          sessionType,
        );

        // Update state with the fetched driver summaries
        setDriver1Data(driver1Response.data);
        setDriver2Data(driver2Response.data);
      } catch (error) {
        console.error("Error fetching driver summaries:", error);
      }
    };

    fetchDriverSummaries();
  }, [year, grandPrix, sessionType, driver1Code, driver2Code]);

  useEffect(() => {
    // Fetch session info for the selected year, grand prix, and session type
    const fetchSessionInfo = async () => {
      try {
        const sessionResponse = await getSessionInfo(
          year,
          grandPrix,
          sessionType,
        );
        setSessionInfo(sessionResponse.data);
      } catch (error) {
        console.error("Error fetching session info:", error);
      }
    };

    fetchSessionInfo();
  }, [year, grandPrix, sessionType]);

  if (!driver1Data || !driver2Data) {
    return <p className="text-white p-8">Loading…</p>;
  }

  return (
    <div className="min-h-screen bg-[#0D0D0D] p-20 flex flex-col gap-8">
      <TopBar />
      <SesionHeader sessionInfo={sessionInfo} />
      <ComparisonView driver1={driver1Data} driver2={driver2Data} />
    </div>
  );
}

export default App;
