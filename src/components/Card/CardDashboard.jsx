import { FormatRupiah } from "@arismun/format-rupiah";
import React from "react";

export default function CardDashboard({ total, name, icon }) {
  return (
    <div className="w-60 h-32 gap-x-4 flex bg-white border border-primary shadow-md items-center px-5 justify-between rounded-lg">
      <div className="grid gap-y-2">
        <p className="lg:text-xl font-bold ">
          {name == "pendapatan" ? (
            <FormatRupiah value={total} />
          ) : (
            <span>{total}</span>
          )}
        </p>
        <p className="text-md text-black/70 capitalize">{name}</p>
      </div>
      <div className="h-12 w-12  rounded-full border-2 border-primary  flex justify-center items-center text-md font-semibold">
        {icon}
      </div>
    </div>
  );
}
