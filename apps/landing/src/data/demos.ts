// https://devicon.dev/
export const iconPaths = {
  links: "icons/links/",
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
  nextjs: { name: "Next.js", devicon: "nextjs" },
  node: { name: "Node.js", devicon: "nodejs" },
  fastify: { name: "Fastify", devicon: "fastify" },
  mongo: { name: "MongoDB", devicon: "mongodb" },
  foundry: { name: "Foundry" },
  viem: { name: "Viem" },
  wagmi: { name: "Wagmi" },
  docker: { name: "Docker", devicon: "docker" },
  solidity: { name: "Solidity", devicon: "solidity" },
  tailwind: { name: "Tailwind", devicon: "tailwindcss" },
} as const;

const toolOrder: Record<string, number> = {
  "Next.js": 1,
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

export type DemoBase = {
  id: string;
  title: string;
  desc: string;
  repoLink: string;
  composedOf?: DemoIds[];
  tools: Tool[];
};

export type Demo =
  | (DemoBase & { isLive: true; liveUrl: string })
  | (DemoBase & { isLive?: false; liveUrl?: never });

const marketplaceSimulation: DemoBase = {
  id: "marketplace-simulation",
  title: "Marketplace Simulation",
  desc: "Generate and replays EIP-712 signed orders against an on-chain marketplace contract.",
  repoLink: "https://github.com/izcm/market-sim",
  tools: [tools.solidity, tools.foundry, tools.viem],
};

const nftIndexer: DemoBase = {
  id: "nft-indexer",
  title: "NFT Indexer",
  desc: "Index NFT transfer events and ownership state from chain into MongoDB.",
  repoLink: "https://github.com/izcm/nft-indexer",
  tools: [tools.node, tools.mongo, tools.viem],
};

const tradingTerminal: DemoBase = {
  id: "trading-terminal",
  title: "Trading Terminal",
  desc: "React UI for browsing listings, placing bids, and viewing trade history.",
  repoLink: "https://github.com/izcm/trading-terminal",
  tools: [tools.nextjs, tools.wagmi, tools.viem, tools.tailwind],
};

const dedupeTools = (t: Tool[]): Tool[] => [
  ...new Map(t.map((tool) => [tool.name, tool])).values(),
];

export const demos: Demo[] = [
  {
    id: "dmrkt",
    title: "d | mrkt – A deterministic marketplace simulation",
    desc: "Generate a set of EIP-712 orders and replay ~1 month of trades.\n Fully dockerized + single command setup.\n",
    repoLink: "https://github.com/izcm/dmrkt-demo",
    composedOf: ["marketplace-simulation", "nft-indexer", "trading-terminal"],
    tools: dedupeTools([
      ...marketplaceSimulation.tools,
      ...nftIndexer.tools,
      ...tradingTerminal.tools,
    ]),
    isLive: true,
    liveUrl: "https://dmrkt.izblocks.com",
  },
  marketplaceSimulation,
  nftIndexer,
  tradingTerminal,
];
