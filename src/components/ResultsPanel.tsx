import { useIpSearch } from "@/hooks/ipSearchContext";

export default function ResultsPanel() {
  const { ipResults } = useIpSearch();

  // breakStyles
  const mainContainerLg = "lg:bottom-[-25%] lg:h-40 lg:w-[70rem]";
  const mainContainerMd = "md:w-[40rem] md:h-[14rem] md:bottom-[-35%]";
  const mainContainerSm = "sm:w-[20rem] sm:bottom-[-60%]";
  const mainContainerDefaults = "w-[90vw] h-[21rem] bottom-[-60%]";

  return (
    <section
      className={`${mainContainerDefaults} ${mainContainerSm} ${mainContainerMd} ${mainContainerLg} rounded-2xl bg-white absolute shadow-xl `}
    >
      <div className="flex flex-wrap justify-center m-8 gap-5">
        <div className="flex flex-col text-center w-60 lg:border-r lg:text-start">
          <h2>IP ADDRESS</h2>
          <p>{ipResults.ip}</p>
        </div>
        <div className="flex flex-col text-center w-60 lg:pr-5 lg:border-r lg:text-start">
          <h2>LOCATION</h2>
          <p>{`${ipResults.location.city}, ${ipResults.location.region}`}</p>
        </div>
        <div className="flex flex-col text-center w-60 lg:border-r lg:text-start">
          <h2>TIMEZONE</h2>
          <p>{ipResults.location.timezone}</p>
        </div>
        <div className="flex flex-col text-center w-60 lg:text-start">
          <h2>ISP</h2>
          <p>{ipResults.isp}</p>
        </div>
      </div>
    </section>
  );
}
