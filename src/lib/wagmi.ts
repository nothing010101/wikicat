import { createConfig, http } from "wagmi";
import { base } from "wagmi/chains";
import { injected, coinbaseWallet } from "wagmi/connectors";

export const config = createConfig({
  chains: [base],
  connectors: [
    injected(),
    coinbaseWallet({ appName: "Wikicat ($WIKI)" }),
  ],
  transports: {
    [base.id]: http(
      process.env.NEXT_PUBLIC_RPC_URL || "https://mainnet.base.org"
    ),
  },
  ssr: true,
});

export { base };
