"use client";

import { motion } from "framer-motion";
import { useAccount, useReadContract } from "wagmi";
import { ConnectButton } from "@/components/ConnectButton";
import { formatEther } from "viem";
import { LayoutDashboard, Coins, ImageIcon } from "lucide-react";
import {
  WIKI_TOKEN_ABI,
  FOUNDER_NFT_ABI,
  CONTRACT_ADDRESSES,
} from "@/lib/contracts";

export function Dashboard() {
  const { address, isConnected } = useAccount();

  const { data: wikiBalance } = useReadContract({
    address: CONTRACT_ADDRESSES.wikiToken,
    abi: WIKI_TOKEN_ABI,
    functionName: "balanceOf",
    args: address ? [address] : undefined,
    query: { enabled: !!address },
  });

  const { data: nftBalance } = useReadContract({
    address: CONTRACT_ADDRESSES.founderNFT,
    abi: FOUNDER_NFT_ABI,
    functionName: "balanceOf",
    args: address ? [address] : undefined,
    query: { enabled: !!address },
  });

  const wiki = wikiBalance
    ? Number(formatEther(wikiBalance)).toLocaleString(undefined, {
        maximumFractionDigits: 0,
      })
    : "0";
  const nfts = nftBalance ? Number(nftBalance) : 0;

  return (
    <section id="dashboard" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-wiki-yellow text-xs uppercase tracking-widest font-semibold">
            My Account
          </span>
          <h2 className="text-4xl font-black text-white mt-2 mb-4 flex items-center justify-center gap-3">
            <LayoutDashboard className="text-wiki-yellow" size={32} />
            Dashboard
          </h2>
        </motion.div>

        {!isConnected ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="wiki-card p-12 text-center"
          >
            <div className="text-6xl mb-4">🔒</div>
            <h3 className="text-xl font-bold text-white mb-2">
              Wallet Not Connected
            </h3>
            <p className="text-gray-500 mb-6">
              Connect your wallet to view your $WIKI and NFT holdings.
            </p>
            <div className="flex justify-center">
              <ConnectButton label="Connect Wallet" />
            </div>
          </motion.div>
        ) : (
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="wiki-card p-4 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-wiki-yellow to-wiki-orange flex items-center justify-center text-black font-black text-sm">
                {address?.slice(2, 4).toUpperCase()}
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest">
                  Connected Wallet
                </p>
                <p className="text-white font-mono text-sm">
                  {address?.slice(0, 8)}...{address?.slice(-6)}
                </p>
              </div>
              <div className="ml-auto">
                <span className="text-xs text-wiki-green bg-wiki-green/10 border border-wiki-green/20 rounded-full px-3 py-1">
                  Base Network
                </span>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: Coins,
                  label: "$WIKI Balance",
                  value: wiki,
                  color: "text-wiki-yellow",
                  bg: "bg-wiki-yellow/10",
                },
                {
                  icon: ImageIcon,
                  label: "Wikicat NFTs",
                  value: nfts.toString(),
                  color: "text-wiki-green",
                  bg: "bg-wiki-green/10",
                },
              ].map((card, i) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="wiki-card p-5"
                  >
                    <div
                      className={`w-10 h-10 rounded-xl ${card.bg} flex items-center justify-center mb-3`}
                    >
                      <Icon size={20} className={card.color} />
                    </div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">
                      {card.label}
                    </p>
                    <p className={`text-2xl font-black ${card.color}`}>
                      {card.value}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="wiki-card p-5 text-center"
            >
              <p className="text-sm text-gray-400 mb-2">
                Hold <span className="text-wiki-yellow font-bold">$WIKI</span> to qualify for NFT airdrops and future rewards.
              </p>
              <a href="https://x.com/wikibasedcat" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-wiki-yellow hover:underline">
                Follow @wikibasedcat for updates ↗
              </a>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
