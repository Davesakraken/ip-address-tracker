import { useIpSearch } from "@/hooks/ipSearchContext";

export default function ResultsPanel() {
  const { ipResults } = useIpSearch();

  // breakStyles
  const mainContainerLg = "lg:bottom-[-30%] lg:h-40 lg:w-[70rem]";
  const mainContainerMd = "md:w-[37rem] md:h-[14rem] md:bottom-[-55%]";
  const mainContainerSm = "sm:w-[20rem]";
  const mainContainerDefaults = "w-[90vw] h-[17rem] bottom-[-70%]";

  return (
    //  outter container
    <section
      className={`${mainContainerDefaults} ${mainContainerSm} ${mainContainerMd} ${mainContainerLg} rounded-2xl bg-white absolute shadow-xl `}
    >
      {/* inner container */}
      <div className="flex flex-wrap justify-center h-full p-4 md:p-9">
        {/* container one */}
        <div className="flex flex-col text-center w-60 lg:text-start">
          <h2 className="pb-2">IP ADDRESS</h2>
          <p>{ipResults.ip}</p>
        </div>
        {/* divider */}
        <div className="hidden lg:block lg:border-r lg:mr-7 lg:my-2"></div>
        {/* container two */}
        <div className="flex flex-col text-center w-60 lg:text-start">
          <h2 className="pb-2">LOCATION</h2>
          <p>{`${ipResults.location.city}, ${ipResults.location.region}`}</p>
        </div>
        {/* divider */}
        <div className="hidden lg:block lg:border-r lg:mr-7 lg:my-2"></div>
        {/* container three */}
        <div className="flex flex-col text-center w-60 lg:text-start">
          <h2 className="pb-2">TIMEZONE</h2>
          <p>{ipResults.location.timezone}</p>
        </div>
        {/* divider */}
        <div className="hidden lg:block lg:border-r lg:mr-7 lg:my-2"></div>
        {/* container four */}
        <div className="flex flex-col text-center w-60 lg:text-start">
          <h2 className="pb-2">ISP</h2>
          <p>{ipResults.isp}</p>
        </div>
      </div>
    </section>
  );
}
