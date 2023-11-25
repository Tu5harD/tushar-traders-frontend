import React from "react";
import { Link } from "react-router-dom";
import AdsClickIcon from "@mui/icons-material/AdsClick";
const ProductCard = ({ product }) => {
  return (
    <Link to={`/products/${product?.id}`}>
      <div className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-2xl bg-gray-200	 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <div class="absolute bg-sky-500 px-2 text-white p-1 rounded-br-2xl top-0 left-0 z-10 text-xs sm:text-sm">
            More Information{" "}
            <span className="text-sm">
              <AdsClickIcon />
            </span>
          </div>
          <img
            // src="https://hindustanfeeds.com/wp-content/uploads/2023/01/Indraneel.png"
            src={product?.imageurl}
            alt="logo"
            width={200}
            height={200}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full hover:scale-100"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-md text-black font-semibold">
              <span aria-hidden="true" className="absolute inset-0" />
              {product?.name}
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Weight : {product?.weight} KG
            </p>
          </div>
          <span className="inline-flex h-5 items-center gap-x-1.5 rounded-full bg-green-100 text-green-700 px-1.5 py-0  text-xs font-medium font-urbanist">
            <svg
              className=" w-1.5 h-1.5 fill-green-500"
              viewBox="0 0 6 6"
              aria-hidden="true"
            >
              <circle cx="3" cy="3" r="3"></circle>
            </svg>
            SELL 🚀
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
