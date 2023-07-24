import { configureChains, createConfig, mainnet } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient, webSocketPublicClient } = configureChains([mainnet], [publicProvider()]);

export const WagmiConfig = createConfig({
  autoConnect: false,
  publicClient
});
