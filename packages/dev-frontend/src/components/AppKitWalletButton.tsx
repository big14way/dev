import React from "react";
import { useAppKit } from "@reown/appkit/react";
import { Button } from "theme-ui";

/**
 * Custom AppKit Connect Button with Liquity styling
 * This provides an alternative to ConnectKit with enhanced WalletConnect features
 */
export const AppKitWalletButton: React.FC = () => {
  const { open } = useAppKit();

  return (
    <Button
      onClick={() => open()}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      Connect with AppKit
    </Button>
  );
};

/**
 * Network Switcher Button using AppKit
 */
export const AppKitNetworkSwitcher: React.FC = () => {
  const { open } = useAppKit();

  return (
    <Button
      onClick={() => open({ view: "Networks" })}
      variant="outline"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      Switch Network
    </Button>
  );
};
