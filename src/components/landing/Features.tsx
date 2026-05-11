"use client";
import { motion } from "framer-motion";

const features = [
  {
    title: "FAIR LAUNCH",
    description: "No presale, no VC round. Every $WIKI entering circulation is minted through the public Founder Pass — fully on-chain and verifiable from day one.",
    color: "from-wiki-yellow to-wiki-orange",
    border: "hover:border-wiki-yellow/40",
    glow: "group-hover:text-wiki-yellow",
    icon: "◈",
  },
  {
    title: "LOCKED LIQUIDITY",
    description: "Liquidity is locked from day one. You can trade $WIKI freely knowing the pool is secured and the team cannot pull the rug.",
    color: "from-wiki-purple to-blue-500",
    border: "hover:border-wiki-purple/40",
    glow: "group-hover:text-wiki-purple",
    icon: "◉",
  },
  {
    title: "BASE NETWORK",
    description: "Built on Coinbase's Base chain — fast, cheap, and Ethereum-compatible. Connect with MetaMask or Coinbase Wallet and mint in seconds.",
    color: "from-wiki-green to-teal-500",
    border: "hover:border-wiki-green/40",
    glow: "group-hover:text-wiki-green",
    icon: "◎",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-wiki-card border-t border-wiki-border">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            WHY <span className="gradient-text">WIKICAT?</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">Built for the community, by the community.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`group relative bg-wiki-dark border border-wiki-border ${f.border} rounded-2xl p-8 transition-all duration-300`}
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${f.color} rounded-xl flex items-center justify-center text-2xl text-black font-black mb-6 shadow-lg`}>
                {f.icon}
              </div>
              <h3 className={`text-lg font-black text-white mb-3 ${f.glow} transition-colors`}>{f.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
