import { ReactNode } from "react";
import { Dao } from "../data/daos";

const DaoCard = ({ dao }: { dao: Dao }) => {
  const { name, discussUrl, voteUrl } = dao;

  return (
    <div className="bg-white shadow rounded-md p-5 flex flex-col items-center">
      <p className="mt-4 mb-6">{name}</p>

      <div className="flex justify-between gap-3">
        {discussUrl && <Link href={discussUrl}>Discuss</Link>}
        {voteUrl && <Link href={voteUrl}>Vote</Link>}
      </div>
    </div>
  );
};

const Link = ({ href, children }: { children: ReactNode; href: string }) => {
  return (
    <a
      className="text-blue-600 hover:text-blue-800"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
};

export default DaoCard;
