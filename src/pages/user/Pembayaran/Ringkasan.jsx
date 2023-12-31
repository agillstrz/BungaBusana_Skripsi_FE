import { FormatRupiah } from "@arismun/format-rupiah";
import React from "react";
import { useLocation } from "react-router-dom";

export default function Ringkasan({ state, metode, handleOnclick }) {
  return (
    <div
      className={`stick top-20  lg:p-2 p-3 border lg:sticky  bg-white lg:left-auto  bottom-0 left-0 lg:w-[325px] w-full    rounded-lg  transition-all duration-75 ease-in`}
    >
      <p className="font-semibold mb-2 text-start  text-[18px] tracking-wider capitalize">
        Ringkasan
      </p>
      <div className=" text-[14px] font-medium">
        <p className="flex  justify-between">
          Total Harga ({state.beli ? 1 : state.cart.keranjang.length})
          <span className="font-bold">
            <FormatRupiah
              value={state.beli ? state.beli.harga : state?.cart?.total}
            />
          </span>
        </p>
        {metode && (
          <p className="flex justify-between">
            Pembayaran melalui : <span className="font-bold">{metode}</span>
          </p>
        )}
        {/* <p className="flex justify-between">
          Ongkir :{" "}
          <span className="font-bold">
            <FormatRupiah value={20000} />
          </span>
        </p> */}
      </div>
      <button
        onClick={handleOnclick}
        type="submit"
        className="btn px-3 py-2 mt-5 rounded-lg text-white    w-full flex "
      >
        Bayar sekarang
      </button>
    </div>
  );
}
