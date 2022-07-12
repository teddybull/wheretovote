import Img from "next/image";

export default function Contribute() {
  return (
    <div className="absolute top-4 right-6 hidden lg:block">
      <p
        className="text-slate-500 w-[140px] absolute right-16"
        style={{
          transform: "rotate(-7deg)",
        }}
      >
        missing a dao? help contribute!
      </p>

      <a
        href="https://github.com/teddybull/wheretovote"
        target="_blank"
        rel="noreferrer"
        className="block transform hover:scale-110 transition-all"
      >
        <Img src="/github.svg" width={35} height={35} />
      </a>

      <div className="absolute right-10 top-7 w-[52px]">
        <Img src="/arrow.png" width={52} height={48} />
      </div>
    </div>
  );
}
