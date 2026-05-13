import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Litepaper — Wikicat ($WIKI)",
  description: "Official Wikicat litepaper. Learn about the $WIKI token, Founder NFT collection, tokenomics, smart contracts, and project roadmap on Base Chain.",
  keywords: ["Wikicat", "WIKI", "litepaper", "whitepaper", "Base Chain", "tokenomics", "NFT", "ERC20"],
  openGraph: {
    title: "Wikicat ($WIKI) — Litepaper",
    description: "Transparent documentation for the Wikicat project. Tokenomics, contracts, roadmap, and more.",
    type: "website",
  },
};

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "token", label: "$WIKI Token" },
  { id: "nft", label: "Founder NFT" },
  { id: "tokenomics", label: "Tokenomics" },
  { id: "contracts", label: "Smart Contracts" },
  { id: "mint", label: "Mint Mechanics" },
  { id: "roadmap", label: "Roadmap" },
  { id: "security", label: "Security" },
  { id: "disclaimer", label: "Disclaimer" },
];

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-wiki-dark grid-bg">
      <Header />
      <div className="max-w-5xl mx-auto px-4 pt-32 pb-24">
        {/* Header */}
        <div className="mb-12 border-b border-wiki-border pb-10">
          <div className="inline-flex items-center gap-2 bg-wiki-yellow/10 border border-wiki-yellow/20 rounded-full px-4 py-1.5 mb-6 text-xs text-wiki-yellow font-semibold uppercase tracking-widest">
            Documentation · v1.0
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
            Wikicat <span className="gradient-text">Litepaper</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            A transparent overview of the Wikicat project — including the $WIKI token, Founder NFT collection,
            tokenomics, smart contract architecture, and roadmap on Base Chain.
          </p>
          <div className="flex flex-wrap gap-3 mt-6 text-xs text-gray-500">
            <span>Published: May 2026</span>
            <span>·</span>
            <span>Network: Base Mainnet (Chain ID: 8453)</span>
            <span>·</span>
            <span>Version: 1.0</span>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar nav — sticky */}
          <aside className="hidden md:block w-48 shrink-0">
            <div className="sticky top-28">
              <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-3">Contents</p>
              <nav className="space-y-1">
                {SECTIONS.map((s) => (
                  <a key={s.id} href={"#" + s.id}
                    className="block text-sm text-gray-500 hover:text-wiki-yellow transition-colors py-1 border-l-2 border-transparent hover:border-wiki-yellow pl-3">
                    {s.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 space-y-16 min-w-0">

            {/* 1. Overview */}
            <section id="overview">
              <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                <span className="text-wiki-yellow text-lg">01</span> Overview
              </h2>
              <div className="prose-custom space-y-4 text-gray-400 leading-relaxed">
                <p>
                  Wikicat ($WIKI) is a community-driven meme token and NFT project built natively on
                  <strong className="text-white"> Base Chain</strong> — Coinbase&apos;s Ethereum Layer 2 network.
                  Inspired by the cultural phenomenon of internet cats, Wikicat represents the convergence of
                  meme culture, digital ownership, and decentralized finance.
                </p>
                <p>
                  The project launched with a Founder Mint event offering <strong className="text-white">5,000 unique slots</strong>,
                  each granting one Founder Pass NFT and <strong className="text-white">1,000,000 $WIKI tokens</strong>
                  at a price of <strong className="text-wiki-yellow">0.0011 ETH per slot</strong>.
                </p>
                <p>
                  All core components — the ERC20 token, ERC721 NFT collection, and minting contract —
                  are deployed on Base Mainnet and fully verifiable on Basescan. No off-chain dependencies,
                  no admin keys with unrestricted minting authority beyond the defined allocation schedule.
                </p>
                <div className="bg-wiki-card border border-wiki-border rounded-xl p-4 mt-4">
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-2 font-semibold">Mission</p>
                  <p className="text-white font-medium">
                    To build the most recognized meme token on Base — with real on-chain utility, a passionate community,
                    and transparent, verifiable tokenomics from day one.
                  </p>
                </div>
              </div>
            </section>

            {/* 2. WIKI Token */}
            <section id="token">
              <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                <span className="text-wiki-yellow text-lg">02</span> $WIKI Token
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  $WIKI is a standard ERC20 token deployed on Base Mainnet. It serves as the primary utility
                  and governance token of the Wikicat ecosystem.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-6">
                  {[
                    { label: "Token Name", value: "Wikicat" },
                    { label: "Symbol", value: "$WIKI" },
                    { label: "Standard", value: "ERC20" },
                    { label: "Network", value: "Base Mainnet" },
                    { label: "Total Supply", value: "10,000,000,000" },
                    { label: "Decimals", value: "18" },
                    { label: "Mintable", value: "Yes (owner-controlled, supply-capped)" },
                    { label: "Burnable", value: "Yes" },
                  ].map((item) => (
                    <div key={item.label} className="bg-wiki-card border border-wiki-border rounded-xl p-4">
                      <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">{item.label}</p>
                      <p className="text-white font-semibold">{item.value}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-4">
                  The token contract address is publicly verified on Basescan. Minting is controlled by
                  a designated admin wallet and bounded by the total supply cap of 10 billion tokens.
                  No wallet can mint beyond the defined cap.
                </p>
              </div>
            </section>

            {/* 3. Founder NFT */}
            <section id="nft">
              <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                <span className="text-wiki-yellow text-lg">03</span> Founder NFT Collection
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  The Wikicat Founder Pass is an ERC721 NFT collection with a maximum supply of
                  <strong className="text-white"> 5,000 unique tokens</strong>. Each NFT serves as proof of
                  founding membership and grants the holder a share of the initial $WIKI token allocation.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-6">
                  {[
                    { label: "Collection Name", value: "Wikicat Founder Pass" },
                    { label: "Standard", value: "ERC721" },
                    { label: "Max Supply", value: "5,000" },
                    { label: "Network", value: "Base Mainnet" },
                    { label: "Mint Price", value: "0.0011 ETH / slot" },
                    { label: "Per Mint", value: "1 NFT + 1,000,000 $WIKI" },
                    { label: "Max Per Wallet", value: "20 slots" },
                    { label: "Metadata", value: "On-chain / IPFS" },
                  ].map((item) => (
                    <div key={item.label} className="bg-wiki-card border border-wiki-border rounded-xl p-4">
                      <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">{item.label}</p>
                      <p className="text-white font-semibold">{item.value}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-4">
                  The NFT artwork features unique Wikicat character variations. Each Founder Pass
                  holder is recognized as an early supporter and will be prioritized in future community
                  initiatives, allowlists, and governance proposals.
                </p>
              </div>
            </section>

            {/* 4. Tokenomics */}
            <section id="tokenomics">
              <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                <span className="text-wiki-yellow text-lg">04</span> Tokenomics
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  The total supply of $WIKI is fixed at <strong className="text-white">10,000,000,000 tokens (10 Billion)</strong>.
                  Distribution is designed to reward early community members while maintaining long-term
                  project sustainability.
                </p>
                <div className="space-y-3 mt-6">
                  {[
                    { label: "Founder Mint (Community)", pct: "50%", amount: "5,000,000,000", color: "bg-wiki-yellow", desc: "1,000,000 $WIKI per mint slot × 5,000 slots. Distributed immediately upon mint." },
                    { label: "Liquidity & Ecosystem", pct: "40%", amount: "4,000,000,000", color: "bg-wiki-purple", desc: "Reserved for DEX liquidity pools, ecosystem grants, marketing, and partnerships." },
                    { label: "Treasury", pct: "8%", amount: "800,000,000", color: "bg-blue-500", desc: "Long-term project treasury. Locked 24 months, released monthly in linear vesting." },
                    { label: "Team", pct: "2%", amount: "200,000,000", color: "bg-wiki-green", desc: "Core team allocation. Locked 12 months, released monthly in linear vesting." },
                  ].map((item) => (
                    <div key={item.label} className="bg-wiki-card border border-wiki-border rounded-xl p-5">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full ${item.color}`} />
                          <span className="text-white font-semibold">{item.label}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-wiki-yellow font-black text-lg">{item.pct}</span>
                          <span className="text-gray-500 text-xs ml-2">{item.amount} $WIKI</span>
                        </div>
                      </div>
                      <div className="w-full bg-wiki-dark rounded-full h-1.5 mb-3">
                        <div className={`h-1.5 rounded-full ${item.color}`} style={{ width: item.pct }} />
                      </div>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-wiki-card border border-wiki-yellow/20 rounded-xl p-4 mt-4">
                  <p className="text-sm text-gray-400">
                    <strong className="text-wiki-yellow">Note on vesting:</strong> Team and Treasury allocations
                    are subject to on-chain vesting schedules. Tokens cannot be accessed before the lock period
                    ends, and monthly releases are enforced at the smart contract level.
                  </p>
                </div>
              </div>
            </section>

            {/* 5. Smart Contracts */}
            <section id="contracts">
              <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                <span className="text-wiki-yellow text-lg">05</span> Smart Contracts
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  All Wikicat contracts are deployed on Base Mainnet and publicly verifiable.
                  Contract source code is verified on Basescan.
                </p>
                <div className="space-y-4 mt-4">
                  {[
                    {
                      name: "$WIKI Token Contract",
                      standard: "ERC20",
                      address: "0xB97f69Cb79978725E3e20e72b024639e7173A44F",
                      link: "https://basescan.org/token/0xB97f69Cb79978725E3e20e72b024639e7173A44F",
                      desc: "The primary fungible token contract. Handles minting, transfers, and burning of $WIKI."
                    },
                    {
                      name: "Founder Pass NFT Contract",
                      standard: "ERC721",
                      address: "0x404de9409b77341434e95b4e502407742edb3d59",
                      link: "https://basescan.org/address/0x404de9409b77341434e95b4e502407742edb3d59",
                      desc: "The NFT contract for the Founder Pass collection. Issues one NFT per minted slot."
                    },
                    {
                      name: "Mint Contract",
                      standard: "Custom",
                      address: "0xa65Bd77d0d78CB253EAd26b61Ae183c5AD09b924",
                      link: "https://basescan.org/address/0xa65Bd77d0d78CB253EAd26b61Ae183c5AD09b924",
                      desc: "Orchestrates the minting process — accepts ETH, triggers NFT mint, and distributes $WIKI to buyers."
                    },
                  ].map((c) => (
                    <div key={c.name} className="bg-wiki-card border border-wiki-border rounded-xl p-5">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                          <p className="text-white font-bold">{c.name}</p>
                          <span className="text-xs bg-wiki-yellow/10 text-wiki-yellow border border-wiki-yellow/20 rounded-full px-2 py-0.5 mt-1 inline-block">{c.standard}</span>
                        </div>
                        <a href={c.link} target="_blank" rel="noopener noreferrer"
                          className="text-xs text-wiki-yellow hover:underline shrink-0">
                          View on Basescan ↗
                        </a>
                      </div>
                      <p className="text-xs font-mono text-gray-400 bg-wiki-dark rounded-lg px-3 py-2 mb-3 break-all">{c.address}</p>
                      <p className="text-sm text-gray-500">{c.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-wiki-card border border-wiki-border rounded-xl p-4 mt-4">
                  <p className="text-sm text-gray-400">
                    <strong className="text-white">Contract Migration Notice:</strong> An earlier version of the minting
                    contract was deprecated prior to public launch. All users who interacted with the previous
                    contract were fully compensated with equivalent $WIKI tokens and Founder Pass NFTs
                    before the current contracts went live.
                  </p>
                </div>
              </div>
            </section>

            {/* 6. Mint Mechanics */}
            <section id="mint">
              <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                <span className="text-wiki-yellow text-lg">06</span> Mint Mechanics
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  The Wikicat Founder Mint operates on a first-come, first-served basis through
                  the Mint Contract on Base Mainnet.
                </p>
                <div className="space-y-3 mt-4">
                  {[
                    { step: "1", title: "Connect Wallet", desc: "Connect a Base-compatible wallet (e.g. MetaMask, Coinbase Wallet) to the Wikicat mint page." },
                    { step: "2", title: "Select Quantity", desc: "Choose the number of slots to mint (minimum 1, maximum 20 per wallet). Each slot costs 0.0011 ETH." },
                    { step: "3", title: "Confirm Transaction", desc: "Approve the transaction on-chain. The smart contract automatically mints your NFT and transfers 1,000,000 $WIKI per slot." },
                    { step: "4", title: "Receive Assets", desc: "Your Founder Pass NFT and $WIKI tokens arrive in your wallet within the same transaction block." },
                  ].map((s) => (
                    <div key={s.step} className="flex gap-4 bg-wiki-card border border-wiki-border rounded-xl p-4">
                      <div className="w-8 h-8 rounded-full bg-wiki-yellow/10 border border-wiki-yellow/30 text-wiki-yellow font-black text-sm flex items-center justify-center shrink-0">{s.step}</div>
                      <div>
                        <p className="text-white font-semibold mb-1">{s.title}</p>
                        <p className="text-sm text-gray-500">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid sm:grid-cols-3 gap-4 mt-6">
                  {[
                    { label: "Price", value: "0.0011 ETH / slot" },
                    { label: "Total Slots", value: "5,000" },
                    { label: "Max per Wallet", value: "20 slots" },
                  ].map((item) => (
                    <div key={item.label} className="bg-wiki-card border border-wiki-border rounded-xl p-4 text-center">
                      <p className="text-wiki-yellow font-black text-xl">{item.value}</p>
                      <p className="text-xs text-gray-500 mt-1">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 7. Roadmap */}
            <section id="roadmap">
              <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                <span className="text-wiki-yellow text-lg">07</span> Roadmap
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <div className="space-y-4">
                  {[
                    {
                      phase: "Phase 1 — Foundation",
                      status: "complete",
                      items: ["Token contract deployed on Base Mainnet", "Founder NFT contract deployed", "Mint contract deployed and activated", "Website launched at wikicat.xyz", "Community airdrop for early supporters completed"],
                    },
                    {
                      phase: "Phase 2 — Growth",
                      status: "active",
                      items: ["Founder Mint open to public (5,000 slots)", "Team & Treasury token vesting initiated", "Community vote on key project decisions", "Social media presence and community building", "Basescan contract verification"],
                    },
                    {
                      phase: "Phase 3 — Ecosystem",
                      status: "upcoming",
                      items: ["DEX liquidity pool launch (e.g. Uniswap on Base)", "$WIKI token listing on aggregators (CoinGecko, CMC)", "NFT marketplace integration (OpenSea)", "Governance framework rollout", "Ecosystem grants program"],
                    },
                    {
                      phase: "Phase 4 — Expansion",
                      status: "upcoming",
                      items: ["Cross-chain bridge exploration", "Strategic partnerships with Base ecosystem projects", "NFT utility features", "Community-driven development proposals", "Long-term DAO transition"],
                    },
                  ].map((phase) => (
                    <div key={phase.phase} className="bg-wiki-card border border-wiki-border rounded-xl p-5">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-2 h-2 rounded-full ${phase.status === 'complete' ? 'bg-wiki-green' : phase.status === 'active' ? 'bg-wiki-yellow animate-pulse' : 'bg-gray-600'}`} />
                        <p className="text-white font-bold">{phase.phase}</p>
                        <span className={`ml-auto text-xs px-2 py-0.5 rounded-full border ${phase.status === 'complete' ? 'text-wiki-green border-wiki-green/30 bg-wiki-green/10' : phase.status === 'active' ? 'text-wiki-yellow border-wiki-yellow/30 bg-wiki-yellow/10' : 'text-gray-500 border-gray-700 bg-gray-800'}`}>
                          {phase.status === 'complete' ? 'Completed' : phase.status === 'active' ? 'In Progress' : 'Upcoming'}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {phase.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-gray-400">
                            <span className="text-wiki-yellow mt-0.5 shrink-0">›</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 8. Security */}
            <section id="security">
              <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                <span className="text-wiki-yellow text-lg">08</span> Security
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  The Wikicat project prioritizes on-chain transparency as the primary security mechanism.
                  All contract interactions are fully auditable by anyone on Basescan.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  {[
                    { title: "On-chain Transparency", desc: "All token issuances, transfers, and contract calls are permanently recorded on Base Mainnet and publicly verifiable." },
                    { title: "Supply Cap", desc: "The $WIKI token has a hard cap of 10 billion tokens enforced at the contract level. No additional tokens can be minted beyond this cap." },
                    { title: "Vesting Enforced On-chain", desc: "Team and Treasury allocations are subject to smart contract vesting schedules. Premature withdrawal is not possible." },
                    { title: "No Hidden Minting", desc: "All minted token quantities are publicly announced and cross-referenced with on-chain transactions on Basescan." },
                    { title: "Contract Verification", desc: "All smart contracts are verified on Basescan, allowing anyone to inspect the source code before interacting." },
                    { title: "Migration Transparency", desc: "The previous contract migration was publicly disclosed. Affected users were compensated with verifiable on-chain transfers." },
                  ].map((item) => (
                    <div key={item.title} className="bg-wiki-card border border-wiki-border rounded-xl p-4">
                      <p className="text-white font-semibold mb-2">{item.title}</p>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-wiki-card border border-wiki-yellow/20 rounded-xl p-4 mt-4">
                  <p className="text-sm text-gray-400">
                    <strong className="text-wiki-yellow">Transparency commitment:</strong> The Wikicat team is committed to
                    publicly disclosing all significant on-chain actions including large token transfers, contract upgrades,
                    and treasury movements via official social channels before or immediately after execution.
                  </p>
                </div>
              </div>
            </section>

            {/* 9. Disclaimer */}
            <section id="disclaimer">
              <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                <span className="text-wiki-yellow text-lg">09</span> Disclaimer
              </h2>
              <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
                <p>
                  This document is provided for informational purposes only and does not constitute financial advice,
                  investment advice, trading advice, or any other form of advice. Nothing contained in this litepaper
                  should be construed as a solicitation or offer to buy or sell any securities or financial instruments.
                </p>
                <p>
                  $WIKI is a community meme token with no guaranteed value or utility beyond what the community
                  collectively creates. The value of $WIKI and Founder Pass NFTs may fluctuate significantly.
                  Participation in the Founder Mint involves risk, including the possible loss of the ETH used to mint.
                </p>
                <p>
                  The roadmap outlined in this document represents the current intentions of the project team and
                  is subject to change. No guarantees are made regarding the completion of any roadmap milestone.
                </p>
                <p>
                  Users are responsible for understanding and complying with the laws and regulations applicable
                  to cryptocurrency and NFT transactions in their respective jurisdictions.
                </p>
                <div className="bg-wiki-card border border-wiki-border rounded-xl p-4 mt-4">
                  <p className="text-gray-500">
                    © 2026 Wikicat. All rights reserved. This litepaper may be updated periodically.
                    Always refer to the latest version at the official Wikicat website.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}