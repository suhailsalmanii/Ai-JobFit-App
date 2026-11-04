import { RiSparkling2Line } from "@remixicon/react";

const Buttton = ({ onClick, isLoading }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <button
        type="button"
        onClick={onClick}
        disabled={isLoading}
        className="my-3 flex w-full max-w-sm items-center justify-center gap-2 rounded-3xl bg-indigo-600 px-5 py-3 hover:-translate-y-0.5 text-white active:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        <RiSparkling2Line />
        {isLoading ? "Analyzing..." : "Analyze Match"}
      </button>
    </div>
  );
};

export default Buttton;
