import React from "react";
import { useRouter } from "next/router";
import News from "../../components/news/News";

function NewsPage() {
  const router = useRouter();
  if (router.isFallback) return <h1>Loading...</h1>;
  return (
    <>
      <News />
    </>
  );
}

export default NewsPage;
