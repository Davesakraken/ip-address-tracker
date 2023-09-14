import Head from "next/head";
import dynamic from "next/dynamic";
import SearchBar from "@/components/SearchBar";
import ResultsPanel from "@/components/ResultsPanel";
import { IpSearchProvider } from "@/hooks/ipSearchContext";
import Attribution from "@/components/attribution/Attribution";
const Map = dynamic(() => import("@/components/Map"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>IP Address Tracker</title>
      </Head>
      <IpSearchProvider>
        <div className="flex flex-col h-[100svh]">
          <header className="relative flex flex-col items-center pt-6 w-full h-[24rem] bg-banner bg-cover">
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
