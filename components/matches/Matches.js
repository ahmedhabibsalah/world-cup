import { useState } from "react";
import AllMatches from "./AllMatches";

import TodaysMatches from "./TodaysMatches";

const optionData = [
  { id: 1, value: "Today's Matches" },
  { id: 2, value: "All Matches" },
];
const matchesData = [
  { id: 1, value: <TodaysMatches /> },
  { id: 2, value: <AllMatches /> },
];
function Matches() {
  const [isActive, setIsActive] = useState(1);

  const filtered = matchesData.filter((obj) => {
    return obj.id === isActive;
  });
  if (filtered === null) {
    return <span>Loading...</span>;
  }
  return (
    <div className="flex flex-wrap py-12  flex-col items-center gap-8 bg-[#56042C] min-h-[1000px]">
      <div className="flex items-center justify-center gap-4 flex-wrap">
        {optionData.map((option) => (
          <button
            key={option.id}
            onClick={() => setIsActive(option.id)}
            className={`w-[180px] h-[50px] rounded-[20px] bg-[#fff] text-[#56042C] text-xl font-bold shadow-md p-2 whitespace-nowrap
            ${isActive === option.id ? "scale-[1.1] border" : "scale-[1]"}
            `}
          >
            {option.value}
          </button>
        ))}
      </div>
      <>
        {filtered.map((match) => (
          <div className="flex items-center flex-col gap-8" key={match.id}>
            {match.value}
          </div>
        ))}
      </>
    </div>
  );
}

export default Matches;
