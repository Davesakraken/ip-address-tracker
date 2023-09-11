import { useState, useEffect, createContext, useContext, Dispatch, SetStateAction, PropsWithChildren } from "react";
import invariant from "tiny-invariant";
import { FetchLocationData, type FetchLocationDataInterface } from "@/pages/api/ipApi";

// Shape of the context that will be provided
// note: ipResults originally set to any type "any" in order to consume data before we know object structure.
/** @todo interface for ipResults */
interface ipSearchProps {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  handleApiCall: () => void;
  ipResults: FetchLocationDataInterface;
}

// WE NEVER WANT IT TO ACTUALLY BE NULL!
const IpSearchContext = createContext<ipSearchProps | null>(null);

// Hook that allows us to use the context
export function useIpSearch() {
  const ctx = useContext(IpSearchContext);
  invariant(ctx, "upseIpSearch can't be called outside IpSearchProvider!");
  return ctx;
}

// Wraps the components that we would like to provide the context to
export function IpSearchProvider({ children }: PropsWithChildren) {
  const [search, setSearch] = useState("");

  /** useState has a generic of FetchLocationDataInterface which creates explicit type safety rather then implicit
  this is imported from the ipApi.ts file */
  const [ipResults, setIpResults] = useState<FetchLocationDataInterface>({
    ip: "93.180.236.143",
    location: {
      region: "California",
      city: "Mountain View",
      lat: 37.386,
      lng: -122.0838,
      timezone: "-07:00",
    },
    isp: "Google LLC",
  });

  useEffect(() => {
    handleApiCall();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Api call within context rather then as a hook as we can declare state
  const handleApiCall = async () => {
    const data = await FetchLocationData(search);
    if (data.code) {
      alert("input correct domain or ip address");
    } else {
      setIpResults(data);
    }
  };

  return <IpSearchContext.Provider value={{ search, setSearch, handleApiCall, ipResults }}>{children}</IpSearchContext.Provider>;
}
