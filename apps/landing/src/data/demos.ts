// https://devicon.dev/
export const iconPaths = {
  links: "icons/links/",
};

export type DemoLink = {
  label: string;
  icon: string;
  colorTheme: string;
};

export type DemoIds =
  | "dmrkt"
  | "marketplace-simulation"
  | "nft-indexer"
  | "trading-terminal"
  | "miniNFT";

export type Tool = {
  name: string;
  devicon?: string;
};

const tools = {
  react: { name: "React", devicon: "react" },
  node: { name: "Node.js", devicon: "nodejs" },
  fastify: { name: "Fastify", devicon: "fastify" },
  mongo: { name: "MongoDB", devicon: "mongodb" },
  foundry: { name: "Foundry" },
  viem: { name: "Viem" },
  wagmi: { name: "Wagmi" },
  docker: { name: "Docker", devicon: "docker" },
  solidity: { name: "Solidity", devicon: "solidity" },
  typescript: { name: "TScript", devicon: "typescript" },
} satisfies Record<string, Tool>;

const toolOrder: Record<string, number> = {
  React: 1,
  "Node.js": 2,
  MongoDB: 3,
  Docker: 4,
  Fastify: 5,
  Solidity: 6,
};

export const sortTools = (t: Tool[]): Tool[] => {
  const known = t
    .filter((x) => toolOrder[x.name] !== undefined)
    .sort((a, b) => toolOrder[a.name] - toolOrder[b.name]);
  const unknown = t
    .filter((x) => toolOrder[x.name] === undefined)
    .sort((a, b) => a.name.localeCompare(b.name));
  return [...known, ...unknown];
};

export type Demo = {
  id: string;
  title: string;
  desc: string;
  repoLink: string;
  composedOf?: DemoIds[];
  extraLinks?: DemoLink[];
  tools: Tool[];
};

export const demos: Demo[] = [
  {
    id: "dmrkt",
    title: "d | mrkt – A deterministic marketplace simulation",
    desc: "Generate a set of EIP-712 orders and replay ~1 month of trades.\n Fully dockerized + single command setup.\n",
    repoLink: "https://github.com/izcm/dmrkt-demo",
    composedOf: ["marketplace-simulation", "nft-indexer", "trading-terminal"],
    extraLinks: [
      {
        label: "See live",
        icon: `${iconPaths.links}/youtube.svg`,
        colorTheme: "#F5C518",
      },
    ],
    tools: [
      tools.react,
      tools.node,
      tools.fastify,
      tools.mongo,
      tools.foundry,
      tools.viem,
      tools.wagmi,
      tools.docker,
      tools.solidity,
    ],
  },
  {
    id: "marketplace-simulation",
    title: "Marketplace Simulation",
    desc: "Generates and replays EIP-712 signed orders against an on-chain marketplace contract.",
    repoLink: "https://github.com/izcm/dmrkt-demo",
    tools: [tools.solidity, tools.foundry],
  },
  {
    id: "nft-indexer",
    title: "NFT Indexer",
    desc: "Indexes NFT transfer events and ownership state from chain into MongoDB.",
    repoLink: "https://github.com/izcm/dmrkt-demo",
    tools: [tools.node, tools.mongo, tools.viem],
  },
  {
    id: "trading-terminal",
    title: "Trading Terminal",
    desc: "React UI for browsing listings, placing bids, and viewing trade history.",
    repoLink: "https://github.com/izcm/dmrkt-demo",
    tools: [tools.react, tools.wagmi, tools.viem],
  },
];
