import { React } from "react";

import { RiSparkling2Line } from "@remixicon/react";

const Buttton = ({ onClick }) => {
  return (
    <div className=" flex flex-col justify-center items-center">
      <button
        onClick={onClick}
        className=" flex bg-indigo-600 active:bg-indigo-700 text-white px-5 py-2 my-3 rounded-3xl"
      >
        <i>
          <RiSparkling2Line />
        </i>
        Analyze Match
      </button>
    </div>
  );
};

export default Buttton;
