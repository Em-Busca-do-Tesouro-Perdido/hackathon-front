import { createContext } from 'react'

export const AccountContext = createContext()


export const useWallets = () => {
  const context = useContext(AccountContext);
  if (!context) {
    throw new Error("useWallets must be used within a WalletsProvider");
  }
  return context;
};