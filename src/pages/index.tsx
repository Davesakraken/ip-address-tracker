import Head from "next/head";
import dynamic from "next/dynamic";
import SearchBar from "@/pages/components/SearchBar";
import ResultsPanel from "@/pages/components/ResultsPanel";
const Map = dynamic(() => import("@/pages/components/Map"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>IP Address Tracker</title>
      </Head>
      <div className="flex flex-col h-[100vh]">
        <header className="relative flex flex-col items-center pt-6 w-full h-[30rem] bg-banner bg-cover">
          <h1 className="text-center pb-5">IP Address Tracker</h1>
          <SearchBar />
          <ResultsPanel />
        </header>
        <main className="h-full">
          <Map />
        </main>
      </div>
    </>
  );
}
