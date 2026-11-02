import React from "react";
import {
  RiPulseLine,
  RiFileTextLine,
  RiArrowRightSLine,
  RiSuitcaseLine,
  RiSparklingLine,
  RiFileTextFill,
} from "@remixicon/react";

const Header = () => {
  return (
    <div className="fixed w-full top-0 z-50">
      <div className="  flex justify-between items-center py-5 px-10 text-sm bg-white">
        <div className="flex text-center gap-2">
          <RiPulseLine className="text-white bg-indigo-500 rounded-md size-8" />
          <h3 className="text-2xl font-bold">Ai JobFit</h3>
        </div>
        <div className=" flex gap-3 justify-baseline text-gray-500 ">
          <div className="flex gap-1">
            <i>
              <RiFileTextLine />
            </i>
            <p className="">Resume</p>
          </div>
          <i>
            <RiArrowRightSLine />
          </i>

          <div className="flex gap-1">
            <i>
              <RiSuitcaseLine />
            </i>
            <p>Job Desc</p>
          </div>
          <i>
            <RiArrowRightSLine />
          </i>

          <div className="flex gap-1 text-indigo-500">
            <i>
              <RiSparklingLine />
            </i>
            <p>Match</p>
          </div>
        </div>
      </div>
      <div className=" border-b-[0.5px] border-slate-300"></div>
    </div>
  );
};

export default Header;
