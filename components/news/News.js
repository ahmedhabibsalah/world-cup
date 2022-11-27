import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const options = {
  method: "GET",
  url: "https://worldcup_live_news.p.rapidapi.com/news/telegraph",
  headers: {
    "X-RapidAPI-Key": "f4fe8c09bemsh61a2c1e94c54f8dp1a5d5ajsn6b406947d0cb",
    "X-RapidAPI-Host": "worldcup_live_news.p.rapidapi.com",
  },
};

function News() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setNews(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  const Loading = () => {
    return <h1 className="text-center text-[#fff]">Loading....</h1>;
  };
  return (
    <div className="flex flex-wrap py-12  flex-col items-center gap-8 bg-[#56042C] min-h-[1000px]">
      {loading ? (
        <Loading />
      ) : (
        <>
          {news.map((info) => (
            <div
              key={info.id}
              className="shadow-md w-[300px] p-8  sm:w-[600px] rounded-[20px] flex flex-col items-start justify-center bg-[#fff] overflow-hidden"
            >
              <h3 className="font-bold text-2xl text-[#56042C]">
                {info.title}
              </h3>
              <p className=" text-sm text-[#70757a]"> {info.source}</p>
              <Link
                href={info.url}
                className=" text-base text-[#56042C] whitespace-normal"
              >
                {/* {info.url} */}
                {info.url.length > 250
                  ? `${info.url.substring(0, 250)}...`
                  : info.url}
              </Link>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default News;
