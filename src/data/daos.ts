export interface Dao {
  name: string;
  discussUrl?: string;
  voteUrl?: string;
}

const daos: Dao[] = [
  {
    name: "Uniswap",
    discussUrl: "https://gov.uniswap.org/",
    voteUrl: "https://app.uniswap.org/#/vote",
  },
  {
    name: "MakerDAO",
    discussUrl: "https://forum.makerdao.com/",
    voteUrl: "https://vote.makerdao.com/",
  },
];

export default daos;
