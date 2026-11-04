import React from "react";

export const TextAreaCard = ({
  tittle,
  icon,
  value,
  onChange,
  placeHolder,
  colorClass,
}) => (
  <div className="min-w-0 w-full">
    <div className="w-full overflow-hidden rounded-lg border-[0.5px] border-slate-300 hover:shadow-sm">
      <div
        className={`${colorClass} flex items-center gap-2 border-b-[0.5px] border-slate-300 bg-neutral-50 px-4 py-3 sm:px-7`}
      >
        <i>{icon}</i>
        <h4 className="text-md font-semibold tracking-wide">{tittle}</h4>
      </div>
      <div>
        <textarea
          className=" h-64 w-full resize-none border border-gray-300 bg-white p-3 text-start focus:border-indigo-400 focus:outline-none sm:h-80"
          type="text"
          rows={10}
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
