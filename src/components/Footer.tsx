"use client";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-wiki-border py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <a href="/" className="flex items-center gap-2 mb-3">
              <Image src="/images/logo.png" alt="Wikicat" width={28} height={28} className="w-7 h-7 rounded-full object-cover" />
              <span className="font-black text-white">Wikicat</span>
              <span className="text-wiki-yellow text-sm">$WIKI</span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed">
              The community meme token of Base Chain. 10 Billion supply. 5,000 Founder slots. Built on-chain, forever.
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-4 font-semibold">Links</p>
            <div className="space-y-2">
              {[
                { label: "Basescan — $WIKI Token", href: "https://basescan.org/token/0xB97f69Cb79978725E3e20e72b024639e7173A44F" },
                { label: "Basescan — Founder NFT", href: "https://basescan.org/address/0x404de9409b77341434e95b4e502407742edb3d59" },
                { label: "Basescan — Mint Contract", href: "https://basescan.org/address/0xa65Bd77d0d78CB253EAd26b61Ae183c5AD09b924" },
                { label: "OpenSea Collection", href: "#" },
              ].map((link) => (
                <a key={link.label} href={link.href}
                  target={link.href !== "#" ? "_blank" : undefined}
                  rel={link.href !== "#" ? "noopener noreferrer" : undefined}
                  className="block text-sm text-gray-500 hover:text-wiki-yellow transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-4 font-semibold">Token Info</p>
            <div className="space-y-2 text-sm text-gray-500">
              <div className="flex justify-between"><span>Network</span><span className="text-white">Base Mainnet</span></div>
              <div className="flex justify-between"><span>Total Supply</span><span className="text-white">10,000,000,000</span></div>
              <div className="flex justify-between"><span>Standard</span><span className="text-white">ERC20 + ERC721</span></div>
              <div className="flex justify-between"><span>Mint Price</span><span className="text-wiki-yellow">0.0011 ETH / slot</span></div>
            </div>
          </div>
        </div>
        <div className="border-t border-wiki-border pt-6 flex justify-center">
          <p className="text-xs text-gray-600">© 2026 Wikicat. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}