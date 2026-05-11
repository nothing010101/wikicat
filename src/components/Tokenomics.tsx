"use client";

import { motion } from "framer-motion";
import { TOKENOMICS, MINT_CONFIG } from "@/types";
import { NftScroller } from "@/components/NftScroller";

export function Tokenomics() {
  return (
    <>
      <NftScroller />
      <section id="tokenomics" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-wiki-yellow text-xs uppercase tracking-widest font-semibold">
              Distribution
            </span>
            <h2 className="text-4xl font-black text-white mt-2 mb-4">
              Token{" "}
              <span className="gradient-text">Economics</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Total supply of{" "}
              <span className="text-white font-bold">10,000,000,000 $WIKI</span>{" "}
              — distributed fairly across the ecosystem.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Visual pie representation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative flex items-center justify-center"
            >
              <div className="relative w-64 h-64">
                <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                  <circle cx="18" cy="18" r="15.9" fill="none" stroke="#00FF87" strokeWidth="3" strokeDasharray="49 51" strokeDashoffset="0" />
                  <circle cx="18" cy="18" r="15.9" fill="none" stroke="#FFD700" strokeWidth="3" strokeDasharray="50 50" strokeDashoffset="-49" />
                  <circle cx="18" cy="18" r="15.9" fill="none" stroke="#7C3AED" strokeWidth="3" strokeDasharray="0.8 99.2" strokeDashoffset="-99" />
                  <circle cx="18" cy="18" r="15.9" fill="none" stroke="#FF6B00" strokeWidth="3" strokeDasharray="0.2 99.8" strokeDashoffset="-99.8" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-wiki-yellow font-black text-2xl">$WIKI</span>
                  <span className="text-gray-400 text-xs">10B Total</span>
                </div>
              </div>
            </motion.div>

            {/* Legend */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {TOKENOMICS.map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-wiki-card border border-wiki-border rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: item.color }} />
                    <div>
                      <p className="text-white font-bold text-sm">{item.label}</p>
                      <p className="text-gray-500 text-xs">{item.description}</p>
                    </div>
                  </div>
                  <span className="text-white font-black text-lg">{item.percentage}%</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
