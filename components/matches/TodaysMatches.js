import { useEffect, useState } from "react";
import axios from "axios";
import Flag from "react-world-flags";

function TodaysMatches() {
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    axios
      .request("https://worldcupjson.net/matches/today")
      .then(function (response) {
        console.log(response.data);
        setUpdates(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return (
    <>
      {updates.map((update) => (
        <div
          className="shadow-md w-[300px] p-8  sm:w-[600px] rounded-[20px] flex flex-col items-center justify-center bg-[#fff]"
          key={update.id}
        >
          <div className="flex items-center justify-between w-full px-12 pb-8">
            <p className="text-base text-[#70757a]">{update.stage_name}</p>
            <p className="text-base text-[#70757a] tracking-widest">
              {update.datetime}
            </p>
          </div>

          <div className="flex items-center  gap-8 flex-col w-full px-12">
            <div className="flex items-center  gap-2 w-full">
              <Flag
                code={update.home_team.country}
                fallback={
                  <span className="text-sm">{update.home_team.country}</span>
                }
                height="30"
                width="30"
              />

              <h3 className="text-xl flex-[0.9] font-semibold">
                {update.home_team.name}
              </h3>
              <p className="text-lg">{update.home_team.goals}</p>
            </div>
            <div className="flex items-center gap-2  w-full">
              <Flag
                code={update.away_team.country}
                fallback={
                  <span className="text-sm">{update.away_team.country}</span>
                }
                height="30"
                width="30"
              />
              <h3 className="text-xl flex-[0.9] font-semibold">
                {update.away_team.name}
              </h3>
              <p className="text-lg">{update.away_team.goals}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default TodaysMatches;
