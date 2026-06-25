// https://devicon.dev/
export type DemoLink = {
  label: string;
  classNames: string;
};

export type DemoIds =
  | "dmrkt"
  | "marketplace-sim"
  | "nft-indexer"
  | "trading-terminal"
  | "miniNFT";

export type Demo = {
  id: string;
  title: string;
  desc: string;
  repoLink: string;
  composedOf?: DemoIds[];
  extraLinks?: DemoLink[];
  tools: string[];
};

export const demos: Demo[] = [
  {
    id: "dmrkt",
    title: "d | mrkt – A deterministic marketplace simulation",
    desc: "Generate a set of EIP-712 orders and replay ~1 month of trades.\n Fully dockerized + single command setup.",
    repoLink: "https://github.com/izcm/dmrkt-demo",
    composedOf: ["marketplace-sim", "nft-indexer", "trading-terminal"],
    extraLinks: [{ label: "watch walkthrough", classNames: "text" }],
    tools: [
      "React",
      "Node.js",
      "Fastify",
      "MongoDB",
      "Foundry",
      "viem",
      "wagmi",
      "Docker",
    ],
  },
  {
    id: "marketplace-sim",
    title: "Marketplace Simulation",
    desc: "Generates and replays EIP-712 signed orders against an on-chain marketplace contract.",
    repoLink: "https://github.com/izcm/dmrkt-demo",
    tools: ["Solidity", "Foundry", "viem", "Node.js"],
  },
  {
    id: "nft-indexer",
    title: "NFT Indexer",
    desc: "Indexes NFT transfer events and ownership state from chain into MongoDB.",
    repoLink: "https://github.com/izcm/dmrkt-demo",
    tools: ["Node.js", "MongoDB", "viem"],
  },
  {
    id: "trading-terminal",
    title: "Trading Terminal",
    desc: "React UI for browsing listings, placing bids, and viewing trade history.",
    repoLink: "https://github.com/izcm/dmrkt-demo",
    tools: ["React", "wagmi", "viem"],
  },
];
