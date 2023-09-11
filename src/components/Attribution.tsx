import { useEffect, useState } from "react";
import { InformationSvg } from "../Components/svgs";

export default function Attribution() {
  const [visable, setVisable] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    const AttributionTimer = setTimeout(() => {
      setVisable(false);
    }, 7000);
    const animationTimerIn = setTimeout(() => {
      setAnimateOut(true);
    }, 6000);
    const animationTimerOut = setTimeout(() => {
      setAnimateOut(false);
    }, 7000);

    return () => {
      clearTimeout(AttributionTimer), clearTimeout(animationTimerIn), clearTimeout(animationTimerOut);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visable]);

  return (
    <div className="absolute w-full flex justify-center z-[500] bottom-5">
      {!visable ? (
        <div>
          <a
            onClick={() => {
              setVisable(true);
            }}
          >
            <InformationSvg additionalClassNames="animate-fade-in-fwd" />
          </a>
        </div>
      ) : (
        <div className={`absolute w-full flex justify-center z-[500] bottom-0 animate-slide-${animateOut ? "out" : "in"}-bottom`}>
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
      )}
    </div>
  );
}
