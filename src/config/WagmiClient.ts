import { configureChains, createClient, chain } from "wagmi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { alchemyProvider } from "wagmi/providers/alchemy";

export const { chains, provider, webSocketProvider } = configureChains(
  [ chain.goerli],
  [alchemyProvider({ apiKey: '4zY-Xgt1z6an_IrnpKRbA7IlkBmAMuQq' })]
);

export const wagmiClient = createClient({
  autoConnect: false,
  connectors: [
    new MetaMaskConnector({ chains })
  ],
  provider,
  webSocketProvider,
});
