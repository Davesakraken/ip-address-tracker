import { useEffect, useState } from "react";
import { InformationSvg } from "../svgs";

export default function Attribution() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setVisible(false);
    }, 7000);

    return () => clearTimeout(animationTimeout);
  }, [visible]);

  return (
    <div className="absolute w-full flex justify-center z-[500] bottom-5">
      {!visible ? (
        <div>
          <a
            onClick={() => {
              setVisible(true);
            }}
          >
            <InformationSvg additionalClassNames="animate-fade-in" />
          </a>
        </div>
      ) : (
        <div className={`absolute w-full flex justify-center z-[500] bottom-0 animate-slide-in-out`}>
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
