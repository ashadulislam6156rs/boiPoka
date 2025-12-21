import React, { Suspense } from "react";
import Banner from "../components/banner/Banner";
import { useLoaderData } from "react-router";
import Books from "./HomePages/Books";

const Home = () => {
  const data = useLoaderData();

  return (
    <>
      <Banner></Banner>
      <Suspense
        fallback={
          <div className="text-red-400 flex jus items-center py-10">
            <span class="loading loading-ring loading-xs"></span>
            <span class="loading loading-ring loading-sm"></span>
            <span class="loading loading-ring loading-md"></span>
            <span class="loading loading-ring loading-lg"></span>
            <span class="loading loading-ring loading-xl"></span>
          </div>
        }
      >
        <Books data={data}></Books>
      </Suspense>
    </>
  );
};

export default Home;
