import React, { useEffect } from 'react'
import Wrapper from '../src/components/Wrapper'
import ProductCard from '../src/components/Product/ProductCard'
import { useSelector } from 'react-redux'

const Products = () => {
  const product = useSelector((state) => state.users.users);
  window.scrollTo({ top: 0, behavior: "smooth" });
  // useEffect(() => {
  //   document.title = "Products"
  // }, []); 
  document.title = "Products"

   return (
    <div className=' py-5'>
      <Wrapper>
      <div className="text-xl font-bold mb-1 flex items-center gap-2 pt-5">
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
      </Wrapper>
    </div>
  )
}

export default Products
