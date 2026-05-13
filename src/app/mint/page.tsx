"use client";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { NftScroller } from "@/components/NftScroller";
import { HowItWorks } from "@/components/HowItWorks";
import { Dashboard } from "@/components/Dashboard";
import { Footer } from "@/components/Footer";
import { Gift, Shield, Globe } from "lucide-react";

export default function MintPage() {
  return (
    <main className="min-h-screen bg-wiki-dark grid-bg">
      <Header />
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-wiki-yellow/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-40 right-1/4 w-80 h-80 bg-wiki-purple/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-wiki-yellow/10 border border-wiki-yellow/20 rounded-full px-5 py-2 mb-8">
            <div className="w-2 h-2 bg-wiki-green rounded-full animate-pulse" />
            <span className="text-wiki-yellow text-sm font-semibold">Launching on Base Chain</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black text-white mb-4 leading-none tracking-tight">
            Wiki<span className="gradient-text">cat</span>
          </motion.h1>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-wiki-yellow font-black text-3xl md:text-4xl mb-6 text-glow">
            NFT Reward
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            After <span className="text-wiki-yellow font-bold">$WIKI</span> token launches, holders can earn exclusive
            <span className="text-white font-bold"> Wikicat NFTs</span> as rewards — and sell them on any marketplace.
            NFT artwork is ready. Stay tuned.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              { icon: Gift, text: "NFT as Reward" },
              { icon: Shield, text: "On-chain Verifiable" },
              { icon: Globe, text: "Base Mainnet" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 bg-wiki-card border border-wiki-border rounded-full px-4 py-2 text-sm text-gray-300">
                <Icon size={14} className="text-wiki-yellow" />
                {text}
              </div>
            ))}
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://x.com/wikibasedcat" target="_blank" rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl font-black text-lg bg-gradient-to-r from-wiki-yellow to-wiki-orange text-black hover:opacity-90 transition-all glow-yellow">
              🐱 Follow for Updates
            </a>
            <a href="/" className="px-8 py-4 rounded-xl font-bold text-lg border border-wiki-border text-gray-300 hover:border-wiki-yellow/40 hover:text-wiki-yellow transition-all">
              Home
            </a>
          </motion.div>
        </div>
      </section>
      <NftScroller />
      <HowItWorks />
      <Dashboard />
      <Footer />
    </main>
  );
}
