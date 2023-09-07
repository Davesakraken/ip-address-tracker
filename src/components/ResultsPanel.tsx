import { useIpSearch } from "@/hooks/ipSearchContext";

export default function ResultsPanel() {
  const { ipResults } = useIpSearch();

  return (
    <section className="w-[20rem] h-[21rem] bottom-[-58%] rounded-2xl bg-white absolute lg:bottom-[-25%] shadow-xl lg:h-40 lg:w-[70rem]">
      <div className="flex flex-wrap justify-center h-24 m-8 gap-5">
        <div className="flex flex-col text-center w-60 lg:border-r lg:text-start">
          <h2>IP ADDRESS</h2>
          <p>{ipResults.ip}</p>
        </div>
        <div className="flex flex-col text-center w-60 lg:border-r pr-5 lg:text-start">
          <h2>LOCATION</h2>
          <p>{`${ipResults.city}, ${ipResults.region}`}</p>
        </div>
        <div className="flex flex-col text-center w-60 lg:border-r lg:text-start">
          <h2>TIMEZONE</h2>
          <p>{ipResults.timezone}</p>
        </div>
        <div className="flex flex-col text-center w-60 lg:text-start">
          <h2>ISP</h2>
          <p>{ipResults.org}</p>
        </div>
      </div>
    </section>
  );
}
