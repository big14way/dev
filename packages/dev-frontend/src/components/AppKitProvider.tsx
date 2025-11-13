import React from "react";
import { createAppKit } from "@reown/appkit/react";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { mainnet, goerli, sepolia, localhost } from "wagmi/chains";

const isDemoMode = import.meta.env.VITE_APP_DEMO_MODE === "true";

// Metadata for AppKit
const metadata = {
  name: "Liquity Protocol",
  description: "Decentralized borrowing protocol",
  url: typeof window !== "undefined" ? window.location.origin : "https://liquity.org",
  icons: ["https://www.liquity.org/favicon.ico"]
};

/**
 * Initialize AppKit with Liquity configuration
 * This provides an enhanced WalletConnect modal with additional features
 */
export const initializeAppKit = (projectId: string, testnetOnly: boolean = false) => {
  // Don't initialize in demo mode or test mode
  if (isDemoMode || import.meta.env.MODE === "test") {
    return null;
  }

  // Determine which chains to support
  const chains = testnetOnly ? [goerli, sepolia] : [mainnet, goerli, sepolia];

  // Create WagmiAdapter for AppKit
  const wagmiAdapter = new WagmiAdapter({
    networks: chains as any,
    projectId
  });

  // Initialize AppKit with proper configuration
  if (typeof window !== "undefined") {
    createAppKit({
      adapters: [wagmiAdapter],
      networks: chains as any,
      projectId,
      metadata,
      features: {
        analytics: true, // Enable analytics
        email: false, // Disable email login for DeFi protocol
        socials: [], // Disable social logins for DeFi protocol
        emailShowWallets: true
      },
      themeMode: "light",
      themeVariables: {
        "--w3m-accent": "#1542cd" // Liquity brand color
      }
    });
  }

  return wagmiAdapter;
};

/**
 * AppKit Button Component
 * Can be used as an alternative to ConnectKit button
 */
export const AppKitButton: React.FC = () => {
  return <appkit-button />;
};

/**
 * AppKit Network Button Component
 */
export const AppKitNetworkButton: React.FC = () => {
  return <appkit-network-button />;
};
