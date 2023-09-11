import { useEffect, useState } from "react";
import { InformationSvg } from "./svgs";

export default function Attribution() {
  const [visable, setVisable] = useState(false);

  useEffect(() => {
    const AttributionTimer = setTimeout(() => {
      setVisable(false);
    }, 7000);
    return () => clearTimeout(AttributionTimer);
  }, [visable]);

  if (!visable) {
    return (
      <div className="absolute w-full flex justify-center z-[500] bottom-5 animate-fade-in-fwd">
        <a
          onClick={() => {
            setVisable(true);
          }}
        >
          <InformationSvg />
        </a>
      </div>
    );
  } else {
    return (
      <div className="absolute w-full flex justify-center z-[500] bottom-5 animate-slide-in-bottom">
        <div className="absolute bottom-0 z-[500] w-[17rem] lg:w-[22rem] p-1 text-sm text-center bg-white rounded-lg shadow-lg">
          Challenge by{" "}
          <a target="_blank" href="https://www.frontendmentor.io/profile/Davesakraken">
            Frontend Mentor.{" "}
          </a>
          Coded by{" "}
          <a target="_blank" href="https://www.davidbell.xyz/">
            David Bell.
          </a>
        </div>
      </div>
    );
  }
}
