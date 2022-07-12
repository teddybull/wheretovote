export interface Dao {
  name: string;
  discussUrl?: string;
  voteUrl?: string;
  logoUrl?: string;
}

const daos: Dao[] = [
  {
    name: "Uniswap",
    discussUrl: "https://gov.uniswap.org/",
    voteUrl: "https://app.uniswap.org/#/vote",
    logoUrl: "uniswap.svg",
  },
  {
    name: "MakerDAO",
    discussUrl: "https://forum.makerdao.com/",
    voteUrl: "https://vote.makerdao.com/",
    logoUrl: "maker.svg",
  },
  {
    name: "Curve",
    discussUrl: "https://gov.curve.fi/",
    voteUrl: "https://dao.curve.fi/locker",
    logoUrl: "curve.svg",
  },
];

export default daos;
