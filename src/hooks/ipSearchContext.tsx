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
    version: "IPv4",
    city: "Mountain View",
    region: "California",
    region_code: "CA",
    country_code: "US",
    country_code_iso3: "USA",
    country_name: "United States",
    country_capital: "Washington",
    country_tld: ".us",
    continent_code: "NA",
    in_eu: false,
    postal: "94035",
    latitude: 37.386,
    longitude: -122.0838,
    timezone: "America/Los_Angeles",
    utc_offset: "-0700",
    country_calling_code: "+1",
    currency: "USD",
    currency_name: "Dollar",
    languages: "en-US,es-US,haw,fr",
    country_area: 9629091.0,
    country_population: 310232863,
    asn: "AS15169",
    org: "Google LLC",
    hostname: "dns.google",
  });

  useEffect(() => {
    handleApiCall();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Api call within context rather then as a hook as we can declare state
  const handleApiCall = async () => {
    const data = await FetchLocationData(search);
    console.log("Data:", data);
    if (!data.latitude) {
      alert("invalid ip address");
    } else {
      setIpResults(data);
    }
  };

  return <IpSearchContext.Provider value={{ search, setSearch, handleApiCall, ipResults }}>{children}</IpSearchContext.Provider>;
}
