import { configureChains, createConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { arbitrum, mainnet, polygon } from 'wagmi/chains';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';

const { chains, publicClient } = configureChains([mainnet, polygon, arbitrum], [publicProvider()]);

// Set up wagmi config
export const WagmiConfig = createConfig({
  autoConnect: true,
  connectors: [new MetaMaskConnector({ chains })],
  publicClient
});
