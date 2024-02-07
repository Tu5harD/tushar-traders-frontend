import React from "react";
import Wrapper from "../src/components/Wrapper";
import { useSelector } from "react-redux";
import ProductCard from "../src/components/Product/ProductCard";
import Features from "../src/components/Home/Features";
import Landing from "../src/components/Home/Landing";
const HomePage = () => {
  const product = useSelector((state) => state.users.users);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.title = "Namrata & Tushar Traders";
  }, []);


  return (
    <div>
      <Landing />
      <Wrapper className="py-5">
        <div className="text-xl font-bold mb-1 flex items-center gap-2">
          OUR PRODUCTS
          <img
            src="/bag.webp"
            width={50}
            height={50}
            className="fill-sky-500 w-10 h-10"
          />
        </div>
        <div className="max-w-[220px] rounded h-1 mb-5 bg-sky-500"></div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {product?.map((product) => (
            <ProductCard key={product?._id} product={product} />
          ))}
        </div>

        <Features />
      </Wrapper>
    </div>
  );
};

export default HomePage;
