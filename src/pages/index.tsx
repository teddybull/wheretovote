import type { NextPage } from "next";
import Img from "next/image";
import Head from "next/head";

import daos from "../data/daos";
import DaoCard from "../components/DaoCard";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>daogov</title>
        <meta
          name="description"
          content="Quicklinks for dao governance pages"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col mt-10 align-center">
        <h1 className="hidden">Where to vote?</h1>
        <Img src="/logo.svg" width="434px" height="55px" />

        <p className="text-center text-gray-500 text-xl mt-4">
          quicklinks for DAO governance
        </p>
      </div>

      <div
        className="p-8 grid gap-5"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        }}
      >
        {daos.map((dao) => (
          <DaoCard key={dao.name} dao={dao} />
        ))}
      </div>
    </>
  );
};

export default Home;
