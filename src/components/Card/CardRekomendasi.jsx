import React, { useContext } from "react";
import { FormatRupiah } from "@arismun/format-rupiah";
import { Toaster } from "react-hot-toast";
import { AiFillStar } from "react-icons/ai";
import { IoIosCart } from "react-icons/io";
import { VscHeartFilled } from "react-icons/vsc";
import { Link } from "react-router-dom";
import CartAnimation from "../CartAnimation";
import BtnCart from "../buttons/BtnMain";
import { MyContext } from "../../context/Context";
export default function CardRekomendasi({ produk }) {
  const { animate, handleKeranjang, image } = useContext(MyContext);
  return (
    <div className="relative">
      <Toaster />
      {animate && <CartAnimation img={image} />}
      <div className="lg:w-[16rem] w-full lg:h-[24rem]  h-[18rem] hover:border-[1px] border   rounded-xl overflow-hidden cursor-pointer hover:shadow-md  relative translinear bg-white  flex flex-col">
        <div
          className="lg:h-[60%] h-[50%] bg-[#B7B7B7] bg-cover bg-center relative border"
          style={{
            backgroundImage: `url(${produk?.foto})`,
          }}
        >
          {produk?.stok == 0 ||
            (produk?.status == 0 && (
              <div className="absolute w-full h-full bg-black/70 flex justify-center items-center top-0 left-0 right-0 bottom-0 ">
                <h1 className="text-md text-primary font-semibold">
                  Stok Habis
                </h1>
              </div>
            ))}
          <div className="absolute right-2 top-2   group  text-transparent/60  translinear hover:text-red-600 hover:scale-125  p-1">
            <VscHeartFilled className="lg:text-[20px]" />
          </div>
        </div>
        <div className="lg:h-[40%] h-[50%]  p-2 text-text flex flex-col justify-between  lg:text-[13px] text-[11px]   lg:gap-y-[3px]">
          <Link
            to={`/produk/${produk.id}`}
            className="grid lg:gap-y-[3px] group"
          >
            <div className="flex gap-x-2 justify-between font-semibold tracking-wide">
              <div>
                <p className="group-hover:underline">
                  {produk.nama} <span>({produk.jenis})</span>
                </p>
                <p className="text-[10px] p-[2px] font-normal inline-flex border bg-abu/10 rounded-lg    ">
                  {produk.kategori?.nama}
                </p>
              </div>
              <p>
                {" "}
                <FormatRupiah value={produk.harga} />{" "}
              </p>
            </div>

            <div className="flex gap-x-[1px] lg:text-[15px]">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={
                    star <= produk.rating
                      ? "text-yellow-500 cursor-pointer"
                      : "text-black"
                  }
                >
                  <AiFillStar />
                </span>
              ))}
            </div>
          </Link>

          <BtnCart
            stok={produk?.stok}
            icon={<IoIosCart />}
            // onClick={(e) => handleKeranjang(e, produk)}
            onClick={(e) => {
              handleKeranjang(e, produk, 1);
            }}
            text={"keranjang"}
          />
        </div>
      </div>
    </div>
  );
}
