import { useState } from "react";

import { ArrowList } from "@a2zb/react";

import { DemoCard } from "./components/cards/DemoCard";
import { Contact } from "./components/Contact";
import { Tabs } from "./components/Tabs";

import { demos } from "./data/demos";
import { cn } from "./lib/cn";
import { ArrowRow } from "./components/ArrowRow";

export default function App() {
  const tabs = ["demos", "contact"] as const;

  const [activeTab, setActiveTab] = useState<"demos" | "contact">("demos");
  const [selectedDemo, setSelectedDemo] = useState<string | undefined>(
    undefined,
  );

  return (
    <div
      className="
      w-full sm:max-w-4xl min-h-screen flex flex-col gap-8 justify-between 
      mx-auto fade-in p-4 mx-auto bg-primary/60"
    >
      {/* HERO */}
      <section
        className="
          flex flex-col justify-end gap-2 
          h-[160px]
          "
      >
        <h1 className="text-4xl font-semibold">IzBlocks</h1>
        <p className="hero-kicker">Web3 + full-stack services</p>
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

        {activeTab === "contact" && <Contact />}

        {activeTab === "demos" && (
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
                  onEnter={() => (
                    window.open(demo.liveUrl ?? demo.repoLink),
                    "_blank",
                    "norefferer"
                  )}
                  className={cn(!isSelected && "bg-surface/80")}
                >
                  <DemoCard {...demo} onSelectDemo={setSelectedDemo} />
                </ArrowRow>
              )}
            </ArrowList>
          </div>
        )}
      </section>
    </div>
  );
}
