import { useEffect, useState } from "react";
import axios from "axios";
import Flag from "react-world-flags";

function Standing() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    axios
      .request("https://worldcupjson.net/teams")
      .then(function (response) {
        console.log(response.data.groups);
        setGroups(response.data.groups);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return (
    <div className="flex flex-wrap py-12  flex-col items-center gap-8 bg-[#56042C]">
      {groups.map((team) => (
        <table
          id={team.id}
          className="shadow-md sm:w-[600px] w-[300px] bg-[#fff] rounded-[10px] p-8"
        >
          <thead className="text-center">
            <th>{team.letter}</th>
            <th>Team</th>
            <th>GP</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>GD</th>
            <th>PTS</th>
          </thead>
          {team.teams.map((info, index) => (
            <tbody className="text-center" id={index}>
              <td className="team">{index + 1}</td>
              <td className="flex items-center sm:ml-[140px] ml-0 gap-2 team">
                <Flag
                  code={info.country}
                  fallback={<span className="text-[10px]">{info.country}</span>}
                  height="25"
                  width="25"
                />
                {info.name}
              </td>
              <td className="team">{info.games_played}</td>
              <td className="team">{info.wins}</td>
              <td className="team">{info.draws}</td>
              <td className="team">{info.losses}</td>
              <td className="team">{info.goal_differential}</td>
              <td className="team">{info.group_points}</td>
            </tbody>
          ))}
        </table>
      ))}
    </div>
  );
}

export default Standing;
