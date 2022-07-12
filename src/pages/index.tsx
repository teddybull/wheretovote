import type { NextPage } from "next";
import Head from "next/head";
import daos from "../data/daos";
import DaoCard from "../components/DaoCard";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>daogov</title>
        <meta name="description" content="Find DAO governance pages" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="p-8 grid grid-cols-8 space-x-5">
        {daos.map((dao) => (
          <DaoCard key={dao.name} dao={dao} />
        ))}
      </div>
    </>
  );
};

export default Home;
