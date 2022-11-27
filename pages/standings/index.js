import React from "react";
import { useRouter } from "next/router";
import Standing from "../../components/standings/Standing";

function StandingPage() {
  const router = useRouter();

  if (router.isFallback) return <h1>Loading...</h1>;
  return (
    <>
      <Standing />
    </>
  );
}

export default StandingPage;
