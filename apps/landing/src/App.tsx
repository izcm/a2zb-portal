import { DemoCard } from "./components/DemoCard";
import { useState } from "react";
import { Tabs } from "./components/Tab";

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
  const tabs = ["demos", "contact"] as const;

  const [activeTab, setActiveTab] = useState<"demos" | "contact">("demos");

  return (
    <div
      className="
      w-5xl flex flex-col gap-4 justify-between 
      mx-auto fade-in p-8"
    >
      {/* HERO */}
      <section
        className="
          flex flex-col justify-center gap-2 
          h-[200px] bg-black
          "
      >
        <h1 className="hero-title">a2zblocks</h1>
        <p className="hero-kicker">web3 services</p>
      </section>

      <Tabs
        value={activeTab}
        items={tabs}
        classNames={{
          container: "w-1/4 gap-4 px-2",
          active: "border-b-0 border-t-2",
          inactive:
            "text-failure border-b-0 hover:border-t-1 hover:border-pop/60 border-pop text-pop",
        }}
        onChange={(v) => setActiveTab(v)}
      />

      {/* DEMOS */}
      <section className="flex flex-col bg-primary/60 ">
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
