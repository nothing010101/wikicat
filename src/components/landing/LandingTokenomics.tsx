"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function LandingTokenomics() {
  return (
    <section id="tokenomics" className="py-24 bg-wiki-dark border-t border-wiki-border">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            <span className="gradient-text">TOKENOMICS</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Total Supply: <span className="font-black text-wiki-yellow">100,000,000,000 $WIKI</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-wiki-card border border-wiki-yellow/20 rounded-2xl p-6 mb-10 text-center max-w-2xl mx-auto"
        >
          <p className="text-white font-black text-2xl mb-2">100%</p>
          <p className="text-wiki-yellow font-bold text-lg mb-1">On LP via bankr.bot</p>
          <p className="text-gray-500 text-sm mt-3">
            No team allocation. No treasury cut. No presale. 100 billion $WIKI launched directly to liquidity via{" "}
            <span className="text-wiki-yellow font-semibold">bankr.bot</span> — fair, transparent, community-owned from day one.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { label: "Total Supply", value: "100,000,000,000", sub: "$WIKI" },
            { label: "LP Allocation", value: "100%", sub: "via bankr.bot" },
            { label: "Network", value: "Base", sub: "Mainnet" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-wiki-card border border-wiki-border rounded-2xl p-6 text-center"
            >
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">{item.label}</p>
              <p className="text-wiki-yellow font-black text-2xl">{item.value}</p>
              <p className="text-gray-400 text-sm mt-1">{item.sub}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-8"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-wiki-yellow/10 rounded-full blur-2xl" />
            <Image
              src="/images/cat-space.png"
              alt="Wikicat in space"
              width={280}
              height={280}
              className="relative z-10 w-44 md:w-56 drop-shadow-2xl rounded-3xl"
            />
          </div>
          <a href="https://x.com/wikibasedcat" target="_blank" rel="noopener noreferrer"
            className="px-10 py-4 rounded-xl font-black text-lg bg-gradient-to-r from-wiki-yellow to-wiki-orange text-black hover:opacity-90 transition-all glow-yellow">
            🐱 Follow for Updates
          </a>
        </motion.div>
      </div>
    </section>
  );
}
