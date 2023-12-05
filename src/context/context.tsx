"use client";
import { providers } from 'ethers';
import { createContext, useContext } from 'react'

interface IWalletsContext {
  account: string | undefined;
  provider: null | providers.Provider;
}

export const AccountContext = createContext<IWalletsContext>({} as IWalletsContext);


export const useWallets = () => {
  const context = useContext(AccountContext);
  if (!context) {
    throw new Error("useWallets must be used within a WalletsProvider");
  }
  return context;
};