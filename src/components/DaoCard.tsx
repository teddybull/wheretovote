import { ReactNode } from "react";
import Img from "next/image";
import { Dao } from "../data/daos";

const LOGO_SIZE = 60;

const DaoCard = ({ dao }: { dao: Dao }) => {
  const { name, logoUrl, discussUrl, voteUrl } = dao;

  return (
    <div className="bg-white shadow rounded-md p-5 flex flex-col items-center">
      <div className="flex-grow flex items-center">
        {logoUrl ? (
          <Img
            src={`/logos/${logoUrl}`}
            alt={name}
            width={LOGO_SIZE}
            height={LOGO_SIZE}
          />
        ) : (
          <div className="bg-gray-300 w-12 h-12 rounded-full" />
        )}
      </div>

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
