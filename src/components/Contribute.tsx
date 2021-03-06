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
        className="block hover:scale-110 transition-all"
      >
        <img src="/github.svg" alt="GitHub logo" width={35} height={35} />
      </a>

      <div className="absolute right-10 top-7 w-[52px]">
        <img src="/arrow.png" alt="Arrow" width={52} height={48} />
      </div>
    </div>
  );
}
