import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
const RelatedProduct = () => {
  const product = useSelector((state) => state.users.users);


  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className=" mt-[50px] md:mt-[100px] mb-[100px] md:mb-0">
      <div className="text-xl font-bold mb-1 flex items-center gap-2">
        RELATED PRODUCTS
        <img
          src="/bag.webp"
          width={50}
          height={50}
          className="fill-sky-500 w-10 h-10"
        />
      </div>
      <div className="max-w-[270px] rounded h-1 mb-5 bg-sky-500"></div>
      <Carousel
        responsive={responsive}
        containerClass="-mx-[10px]"
        itemClass="px-[40px]"
        style={{button:" black"}}
        
      >
        {product?.map((product) => (
          <ProductCard key={product?._id} product={product} />
        ))}
      </Carousel>
    </div>
  );
};

export default RelatedProduct;
