import { useState } from "react";
import type { NextPage } from "next";
import Img from "next/image";
import Head from "next/head";

import daos from "../data/daos";
import DaoCard from "../components/DaoCard";
import useAutoFocus from "../hooks/useAutoFocus";
import Contribute from "../components/Contribute";

const Home: NextPage = () => {
  const searchInputRef = useAutoFocus();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDaos = searchQuery
    ? daos.filter((dao) =>
        dao.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : daos;

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

        <input
          autoFocus
          ref={searchInputRef}
          placeholder="search for a dao"
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-sm block mx-auto bg-slate-200 p-2 pl-12 mt-8 rounded-full border-2 border-transparent focus:border-slate-500 transition-all outline-none text-slate-700 hover:scale-105 focus:scale-100"
          style={{
            backgroundImage: "url(/search.svg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "12px center",
          }}
        />
      </div>

      <Contribute />

      <div
        className="p-8 grid gap-5"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        }}
      >
        {filteredDaos.map((dao) => (
          <DaoCard key={dao.name} dao={dao} />
        ))}
      </div>
    </>
  );
};

export default Home;
