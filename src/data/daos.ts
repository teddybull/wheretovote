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
  {
    name: "Compound",
    discussUrl: "https://www.comp.xyz/",
    voteUrl: "https://compound.finance/governance",
    logoUrl: "compound.svg",
  },
  {
    name: "Aave",
    discussUrl: "https://governance.aave.com/",
    voteUrl: "https://app.aave.com/governance/",
    logoUrl: "aave.svg",
  },
  {
    name: "Lido",
    discussUrl: "https://research.lido.fi/",
    voteUrl:
      "https://mainnet.lido.fi/#/lido-dao/0x2e59a20f205bb85a89c53f1936454680651e618e/",
    logoUrl: "lido.png",
  },
  {
    name: "ENS",
    voteUrl: "https://sybil.org/#/delegates/ens",
    discussUrl: "https://discuss.ens.domains/",
    logoUrl: "ens.svg",
  },
  {
    name: "Optimism",
    voteUrl: "https://app.optimism.io/delegates",
    discussUrl: "https://gov.optimism.io/",
    logoUrl: "optimism.png",
  },
  {
    name: "Synthetix",
    voteUrl: "https://gov.synthetix.io/#/",
    discussUrl: "https://discord.com/invite/HQSTqXH84t",
    logoUrl: "synthetix.svg",
  },
  {
    name: "Apecoin",
    voteUrl: "https://snapshot.org/#/apecoin.eth",
    discussUrl: "https://forum.apecoin.com/",
    logoUrl: "apecoin.png",
  },
  {
    name: "Olympus",
    voteUrl: "https://snapshot.org/#/olympusdao.eth",
    discussUrl: "https://forum.olympusdao.finance/",
    logoUrl: "olympus.png",
  },
  {
    name: "Decentraland",
    voteUrl: "https://governance.decentraland.org/",
    logoUrl: "decentraland.svg",
  },
  {
    name: "Bancor",
    discussUrl: "https://gov.bancor.network/",
    voteUrl: "https://app.bancor.network/vote",
    logoUrl: "bancor.svg",
  },
  {
    name: "Nouns DAO",
    discussUrl: "https://discourse.nouns.wtf/",
    voteUrl: "https://nouns.wtf/vote",
    logoUrl: "nouns.jpeg",
  },
  {
    name: "Fei",
    voteUrl:
      "https://www.tally.xyz/governance/eip155:1:0x0BEF27FEB58e857046d630B2c03dFb7bae567494",
    discussUrl: "https://tribe.fei.money/",
    logoUrl: "fei.svg",
  },
  {
    name: "Shapeshift",
    voteUrl: "https://boardroom.io/shapeshift/proposals",
    discussUrl: "https://forum.shapeshift.com/",
    logoUrl: "shapeshift.svg",
  },
  {
    name: "IndexCoop",
    voteUrl: "https://snapshot.org/#/index-coop.eth",
    discussUrl: "https://gov.indexcoop.com/",
    logoUrl: "indexcoop.png",
  },
  {
    name: "dHedge",
    voteUrl: "https://app.dhedge.org/dht/governance",
    discussUrl: "https://forum.dhedge.org/",
    logoUrl: "dhedge.png",
  },
  {
    name: "Tornado Cash",
    discussUrl: "https://torn.community/",
    voteUrl: "https://tornadocash.eth.link/ipns/tornadocash.eth/governance/",
    logoUrl: "tornado.svg",
  },
];

export default daos;
