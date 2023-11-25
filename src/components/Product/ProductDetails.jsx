import React, { useEffect, useState } from "react";
import Wrapper from "../Wrapper";
import axios from "axios";
import { useParams } from "react-router-dom";
import RelatedProduct from "./RelatedProduct";
import { getById } from "../../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LabelIcon from "@mui/icons-material/Label";
import { URL } from "../../server/api";
const ProductDetails = () => {
  const { id } = useParams();
  const product = useSelector((state) => state.users.idusers);
  const dispatch = useDispatch();
  const [countHeart, setCountHeart] = useState(180);
  const [clicked, setClicked] = useState(false);
  const [color, setColor] = useState("gray");

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        // get data bye id
        const responsebyid = await axios.get(
          `${URL}/getbyid/${id}`
        );

        window.scrollTo({ top: 0, behavior: "smooth" });

        dispatch(getById(responsebyid.data));
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchProductData();
  }, [id, dispatch]);

 
  const handleClick = () => {
    if (!clicked) {
      setColor("red");
      setCountHeart((prevCount) => prevCount + 1);
      setClicked(true);
    }
  };

  return (
    <Wrapper className=" pt-10 pb-0 sm:py-20">
      <div className=" sm:py-10 sm:border-t border-b border-gray-400">
        <div className=" group flex flex-col md:flex-row gap-4 md:gap-16 items-center">
          {/* Image section start */}

          <div className="md:w-1/3 relative">
            <div className="overflow-hidden bg-gray-300  bg-opacity-50 border rounded-2xl">
              <img
                width={300}
                height={300}
                className="w-full cursor-pointer h-auto hover:scale-100	"
                src={product?.imageurl}
                alt="detail"
              />
            </div>
          </div>

          {/* Image section end */}

          <div className="md:w-2/3">
            <h5 className="text-lg font-semibold font-urbanist flex justify-center">
              | {product.name} |
            </h5>
            <div className=" flex flex-wrap sm:flex-nowrap items-center  justify-between">
              <h5 className="text-lg font-semibold font-urbanist">
                Product <span className=" text-sky-600">Description</span>
              </h5>

              <div className="mt-2">
                <ul className="flex space-x-2">
                  <li
                    className="flex items-center gap-1 cursor-pointer text-gray-700"
                    onClick={handleClick}
                  >
                    <div className={`text-${color}-500`}>
                      <FavoriteIcon />
                    </div>
                    {countHeart} 
                  </li>
                  <li>|</li>
                  <li className="flex items-center gap-1 text-gray-700 cursor-pointer">
                    <div className=" text-orange-500">
                      <LabelIcon />
                    </div>
                    Tag
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex">
                <div className="w-full">
                  <div className="mb-4">
                    <table className="w-full border-collapse border border-black">
                      <tbody>
                        <tr>
                          <td className=" border border-black p-2 font-semibold text-gray-800">
                            कोणासाठी
                          </td>
                          <td className=" border border-black p-2 font-medium text-gray-500">
                            {product.application}
                          </td>
                        </tr>
                        <tr>
                          <td className=" border border-black p-2 font-semibold text-gray-800">
                            स्वरुप
                          </td>
                          <td className=" border border-black p-2 font-medium text-gray-500">
                            {product.productform}
                          </td>
                        </tr>
                        <tr>
                          <td className=" border border-black p-2 font-semibold text-gray-800">
                            पॅकींग
                          </td>
                          <td className=" border border-black p-2 font-medium text-gray-500">
                            {/* <ul>
                            <li>५० कि. प्लॅस्टीक पॅकींग</li>
                            <li>५९ कि. बारदान पॅकींग</li>
                            <li>५९ कि. प्लॅस्टीक पॅकींग</li>
                          </ul> */}
                            {product.packaging}
                          </td>
                        </tr>
                        <tr>
                          <td className=" border border-black p-2 font-semibold text-gray-800">
                            उपलब्धता
                          </td>
                          <td className=" border border-black p-2 font-medium text-gray-500">
                            {product.location}
                            {/* सातारा, बारामती,श्रीरामपूर */}
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 font-semibold text-gray-800">
                            खाद्याची मात्रा
                          </td>
                          <td className=" border border-black p-2 font-medium text-gray-500">
                            {product.dosage}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <ul className="mt-4"></ul>
          </div>
        </div>
      </div>
      <RelatedProduct />
    </Wrapper>
  );
};

export default ProductDetails;
