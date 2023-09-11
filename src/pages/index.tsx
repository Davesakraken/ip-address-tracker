import Head from "next/head";
import dynamic from "next/dynamic";
import SearchBar from "@/Components/SearchBar";
import ResultsPanel from "@/Components/ResultsPanel";
import { IpSearchProvider } from "@/hooks/ipSearchContext";
import { AttributionControl } from "react-leaflet";
import Attribution from "@/Components/Attribution";
const Map = dynamic(() => import("@/Components/Map"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>IP Address Tracker</title>
      </Head>
      <IpSearchProvider>
        <div className="flex flex-col h-[100vh]">
          <header className="relative flex flex-col items-center pt-6 w-full h-[30rem] bg-banner bg-cover">
            <h1 className="text-center pb-5">IP Address Tracker</h1>
            <SearchBar />
            <ResultsPanel />
          </header>
          <main className="h-full">
            <Attribution />
            <Map />
          </main>
        </div>
      </IpSearchProvider>
    </>
  );
}
