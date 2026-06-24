import blockSvg from "@/assets/icons/blocks.svg";
import { DemoCard } from "./components/DemoCard";

const demos = [
  {
    id: "miniNFT",
    img: "nft",
    title: "YUL MiniNFT",
    desc: "Minimal NFT in pure yul.",
  },
  {
    id: "swap-ui",
    img: "architecture",
    title: "On-Chain Ecosystem",
    desc: "Get your testnet adapter today.",
  },
  {
    id: "onchain-voting",
    img: "dao",
    title: "On-Chain Voting",
    desc: "Lightweight DAO governance example.",
  },
] as const;

export default function App() {
  return (
    <div className="w-4xl flex flex-col justify-between mx-auto fade-in">
      {/* HERO */}
      <section
        className="
          flex flex-col justify-end gap-2 
          h-[300px] pb-4 
          border-b border-accent-weak 
          "
      >
        <h1 className="hero-title glow py-2">a2zblocks</h1>
        <p className="hero-kicker">web3 services</p>
      </section>

      {/* DEMOS */}
      <section className="flex flex-col bg-primary">
        <h2 className="">Demos</h2>
        <div>
          {demos.map((demo) => (
            <DemoCard key={demo.id} {...demo} />
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="
          flex flex-col items-center justify-center h-16 gap-1
          border-t border-default text-xs text-neutral-500
        "
      >
        <p>© 2025 A2Z Blocks. All rights reserved.</p>
        <p>Humbly built. Rigorously optimized.</p>
      </footer>
    </div>
  );
}
