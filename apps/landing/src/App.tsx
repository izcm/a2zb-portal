import { useState } from "react";

import { ArrowList, ArrowRow } from "@a2zb/react";

import { DemoCard } from "./components/cards/DemoCard";
import { Tabs } from "./components/Tab";
import { cn } from "./lib/cn";

const demos = [
  {
    id: "dmrkt",
    img: "architecture",
    title: "d | mrkt – A deterministic market  simulation",
    desc: "Generate a set of EIP-712 orders and replay ~1 month of trades.",
  },
  {
    id: "miniNFT",
    img: "nft",
    title: "YUL MiniNFT",
    desc: "Minimal NFT in pure yul.",
  },
  {
    id: "onchain-voting",
    img: "dao",
    title: "On-Chain Voting",
    desc: "Lightweight DAO governance example.",
  },
];

export default function App() {
  const tabs = ["demos", "contact"] as const;

  const [activeTab, setActiveTab] = useState<"demos" | "contact">("demos");
  const [selectedDemo, setSelectedDemo] = useState<string | undefined>(
    undefined,
  );

  return (
    <div
      className="
      w-4xl min-h-screen flex flex-col gap-4 justify-between 
      mx-auto fade-in p-8 bg-primary/60"
    >
      {/* HERO */}
      <section
        className="
          flex flex-col justify-center gap-2 
          h-[180px]
          "
      >
        <h1 className="hero-title">a2zblocks</h1>
        <p className="hero-kicker">web3 + full-stack services</p>
      </section>

      <section className="flex flex-1 flex-col gap-2">
        <Tabs
          value={activeTab}
          items={tabs}
          classNames={{
            container: "w-1/4 gap-4 px-2",
            active: "border-t-2 border-b-0",
            inactive:
              "hover:border-t-1 hover:border-pop/60 hover:border-t-1 border-pop text-pop",
          }}
          onChange={(v) => setActiveTab(v)}
        />

        {/* DEMOS */}
        <div className="flex flex-col">
          <ArrowList
            items={demos}
            getId={(demo) => demo.id}
            selectedId={selectedDemo}
            onSelect={(demo) => setSelectedDemo(demo.id)}
            className={"flex flex-col gap-4"}
          >
            {({ item: demo, isSelected, onSelect }) => (
              <ArrowRow
                key={demo.id}
                isSelected={isSelected}
                onSelect={onSelect}
                className={cn(
                  // default
                  !isSelected && "hover:bg-white/2",
                  // selected
                  isSelected && "border-2 border-accent-weak/40 rounded-lg",
                )}
              >
                <DemoCard key={demo.id} {...demo} />
              </ArrowRow>
            )}
          </ArrowList>
        </div>
      </section>
    </div>
  );
}
