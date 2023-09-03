import { useIpSearch } from "@/hooks/ipSearchContext";

export default function ResultsPanel() {
  const { ipResults } = useIpSearch();

  return (
    <section className="w-[70rem] h-40 rounded-2xl bg-white absolute bottom-[-25%] shadow-xl">
      <div className="flex flex-wrap justify-center h-24 m-8 gap-7">
        <div className="w-60 border-r">
          <h2>IP ADDRESS</h2>
          <p>{ipResults.query}</p>
        </div>
        <div className="w-60 border-r">
          <h2>LOCATION</h2>
          <p>{`${ipResults.city}, ${ipResults.country}`}</p>
        </div>
        <div className="w-60 border-r">
          <h2>TIMEZONE</h2>
          <p>{ipResults.timezone}</p>
        </div>
        <div className="w-60">
          <h2>ISP</h2>
          <p>{ipResults.isp}</p>
        </div>
      </div>
    </section>
  );
}
