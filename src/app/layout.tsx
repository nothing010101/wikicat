import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Web3Provider } from "@/providers/Web3Provider";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const SITE_URL = "https://wikicat.xyz";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Wikicat ($WIKI) — The Meme Token of Base Chain",
    template: "%s | Wikicat ($WIKI)",
  },
  description:
    "Wikicat ($WIKI) — 10 Billion supply. 5,000 Founder slots. 0.0011 ETH each. Get 1 NFT + 1,000,000 $WIKI. Built on Base Chain.",
  keywords: [
    "Wikicat", "WIKI", "WIKI token", "Base Chain", "Base mainnet",
    "meme token", "NFT", "ERC20", "ERC721", "Founder Pass",
    "crypto", "DeFi", "web3", "Coinbase", "Base L2",
  ],
  authors: [{ name: "Wikicat", url: SITE_URL }],
  creator: "Wikicat",
  publisher: "Wikicat",
  category: "Cryptocurrency",
  classification: "Blockchain / NFT",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Wikicat",
    title: "Wikicat ($WIKI) — Founder Mint is Live on Base",
    description:
      "Mint your Founder Pass on Base Chain. Get 1 NFT + 1,000,000 $WIKI per slot. Only 5,000 slots at 0.0011 ETH each. Fully on-chain, transparent tokenomics.",
    images: [
      {
        url: "/images/cat-banner.png",
        width: 1200,
        height: 630,
        alt: "Wikicat ($WIKI) — Meme Token on Base Chain",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@wikibasedcat",
    creator: "@wikibasedcat",
    title: "Wikicat ($WIKI) — Founder Mint is Live",
    description:
      "Mint your Founder Pass. 1 NFT + 1,000,000 $WIKI per slot. 5,000 slots only. 0.0011 ETH. Built on Base.",
    images: ["/images/cat-banner.png"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  other: {
    "blockchain-network": "Base Mainnet",
    "chain-id": "8453",
    "token-contract": "0xB97f69Cb79978725E3e20e72b024639e7173A44F",
    "nft-contract": "0x404de9409b77341434e95b4e502407742edb3d59",
    "mint-contract": "0xa65Bd77d0d78CB253EAd26b61Ae183c5AD09b924",
    "token-symbol": "WIKI",
    "token-standard": "ERC20",
    "nft-standard": "ERC721",
    "total-supply": "10000000000",
    "mint-price-eth": "0.0011",
    "max-supply-nft": "5000",
  },
};

const jsonLd = "{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"WebSite\",\"@id\":\"https://wikicat.xyz/#website\",\"url\":\"https://wikicat.xyz/\",\"name\":\"Wikicat\",\"description\":\"Wikicat ($WIKI) — The meme token of Base Chain. 10 Billion supply. 5,000 Founder slots. NFT + tokens per mint.\",\"inLanguage\":\"en\",\"publisher\":{\"@id\":\"https://wikicat.xyz/#organization\"}},{\"@type\":\"Organization\",\"@id\":\"https://wikicat.xyz/#organization\",\"name\":\"Wikicat\",\"url\":\"https://wikicat.xyz/\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"https://wikicat.xyz/images/logo.png\",\"width\":200,\"height\":200},\"sameAs\":[\"https://x.com/wikibasedcat\"],\"description\":\"Wikicat is a community meme token and NFT project on Base Chain.\",\"foundingDate\":\"2026\"},{\"@type\":\"WebPage\",\"@id\":\"https://wikicat.xyz/#webpage\",\"url\":\"https://wikicat.xyz/\",\"name\":\"Wikicat ($WIKI) — The Meme Token of Base Chain\",\"isPartOf\":{\"@id\":\"https://wikicat.xyz/#website\"},\"about\":{\"@id\":\"https://wikicat.xyz/#organization\"},\"description\":\"Mint your Founder Pass. Get 1 NFT + 1,000,000 $WIKI. Only 5,000 slots available at 0.0011 ETH each.\",\"inLanguage\":\"en\"},{\"@type\":\"Product\",\"@id\":\"https://wikicat.xyz/#founder-pass\",\"name\":\"Wikicat Founder Pass NFT\",\"description\":\"The Wikicat Founder Pass is an ERC721 NFT on Base Chain. Each pass includes 1,000,000 $WIKI tokens. Only 5,000 available.\",\"brand\":{\"@id\":\"https://wikicat.xyz/#organization\"},\"offers\":{\"@type\":\"Offer\",\"price\":\"0.0011\",\"priceCurrency\":\"ETH\",\"availability\":\"https://schema.org/InStock\",\"url\":\"https://wikicat.xyz/mint\"}},{\"@type\":\"FAQPage\",\"@id\":\"https://wikicat.xyz/#faq\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"What is Wikicat ($WIKI)?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Wikicat is a community meme token and NFT project built on Base Chain (Coinbase's Ethereum Layer 2). It features a 10 billion $WIKI token supply and 5,000 Founder Pass NFTs.\"}},{\"@type\":\"Question\",\"name\":\"How much does it cost to mint a Wikicat Founder Pass?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Each Founder Pass costs 0.0011 ETH and includes 1 NFT plus 1,000,000 $WIKI tokens. A maximum of 20 slots per wallet.\"}},{\"@type\":\"Question\",\"name\":\"What blockchain is Wikicat on?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Wikicat is deployed on Base Mainnet (Chain ID: 8453), Coinbase's Ethereum Layer 2 network.\"}},{\"@type\":\"Question\",\"name\":\"Where can I verify the Wikicat smart contracts?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"All Wikicat contracts are publicly verified on Basescan. Token: 0xB97f69Cb79978725E3e20e72b024639e7173A44F, NFT: 0x404de9409b77341434e95b4e502407742edb3d59, Mint Contract: 0xa65Bd77d0d78CB253EAd26b61Ae183c5AD09b924.\"}}]}]}";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd }}
          strategy="beforeInteractive"
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Web3Provider>{children}</Web3Provider>
      </body>
    </html>
  );
}