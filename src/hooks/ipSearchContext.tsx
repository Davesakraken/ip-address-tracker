import { useState, createContext, Dispatch, SetStateAction, PropsWithChildren, useContext } from "react";

interface ipSearchProps {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}

// holds shape of context
const IpSearchContext = createContext<ipSearchProps>({
  search: "",
  setSearch: () => false,
});

// hook that allows us to use the context
export function useIpSearch() {
  const ctx = useContext(IpSearchContext);
  return ctx;
}

// wraps the components that we would like to provide the context to
export function IpSearchProvider({ children }: PropsWithChildren) {
  const [search, setSearch] = useState("");
  return <IpSearchContext.Provider value={{ search, setSearch }}>{children}</IpSearchContext.Provider>;
}
