import {
  RiPulseLine,
  RiFileTextLine,
  RiArrowRightSLine,
  RiSuitcaseLine,
  RiSparklingLine,
} from "@remixicon/react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-300 bg-white">
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3 px-4 py-3 sm:px-6 sm:py-4 lg:px-10">
        <div className="flex items-center gap-2">
          <RiPulseLine className="size-8 rounded-md bg-indigo-500 text-white" />
          <h3 className="text-xl font-bold sm:text-2xl">Ai JobFit</h3>
        </div>
        <nav
          aria-label="Analysis steps"
          className="flex items-center gap-1 text-xs text-gray-500 sm:gap-3 sm:text-sm"
        >
          <div className="flex items-center gap-1">
            <i>
              <RiFileTextLine />
            </i>
            <p>Resume</p>
          </div>
          <i>
            <RiArrowRightSLine className="size-4 sm:size-5" />
          </i>

          <div className="flex items-center gap-1">
            <i>
              <RiSuitcaseLine />
            </i>
            <p>Job Desc</p>
          </div>
          <i>
            <RiArrowRightSLine />
          </i>

          <div className="flex items-center gap-1 text-indigo-500">
            <i>
              <RiSparklingLine />
            </i>
            <p>Match</p>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
