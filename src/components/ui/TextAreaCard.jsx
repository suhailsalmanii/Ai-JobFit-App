import React from "react";

export const TextAreaCard = ({
  tittle,
  icon,
  value,
  onChange,
  placeHolder,
  colorClass,
}) => (
  <div className="flex gap-20">
    <div className="border-[0.5px] w-120  hover:shadow-sm rounded-lg border-slate-300">
      <div
        className={`${colorClass} flex rounded-t-lg border-b-[0.5px] bg-neutral-50 border-slate-300 py-2 px-7 gap-2`}
      >
        <i>{icon}</i>
        <h4 className="text-md font-semibold tracking-wide">{tittle}</h4>
      </div>
      <div>
        <textarea
          className=" bg-white w-full h-80 resize-none p-3 flex text-start border border-gray-300 focus:outline-none focus:border focus:border-t-indigo-400 "
          type="text"
          placeholder={placeHolder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
      <div className=" border-t-[0.5px] rounded-b-lg bg-neutral-50 border-slate-300">
        <p className="text-right text-xs text-gray-500 px-3 py-1">
          {value.length} characters
        </p>
      </div>
    </div>
  </div>
);
