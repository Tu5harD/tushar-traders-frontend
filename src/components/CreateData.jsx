import React, { useState } from "react";
import axios from "axios";
import Buttons from "./Buttons";
import { addUser } from "../redux/userSlice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { URL } from "../server/api";
const CreateData = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [imageurl, setImageUrl] = useState("");
  const [weight, setWeight] = useState("");
  const [application, setApplication] = useState("");
  const [productform, setproductform] = useState("");
  const [packaging, setPackaging] = useState("");
  const [dosage, setDosage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        !name ||
        !imageurl ||
        !weight ||
        !application ||
        !productform ||
        !packaging ||
        !dosage
      ) {
        toast.warn("Please fill in all fields!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        return; // Stop the function if any field is empty
      }

      const userData = {
        name,
        imageurl,
        weight,
        application,
        productform,
        packaging,
        dosage,
      };
      const response = await axios.post(
        `${URL}/create`,
        userData
      );
      dispatch(addUser(response.data));
      toast.success("Product added succesfully !", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.error("Error creating user:", error);
      if (error.response) {
        console.error(
          "Server responded with:",
          error.response.status,
          error.response.data
        );
      }
      setError("Error creating user. Please try again."); // Set the error state
    }
  };

  return (
    <div className=" md:py-5">
      <div className="md:w-[90%] mx-auto p-6 bg-white shadow-lg rounded-md">
        <div className="flex flex-row gap-2 items-center">
          <h2 className="text-xl font-semibold mb-4">Add Product</h2>
          <span className=" mb-5 text-[2rem]">🛍️🛒</span>
        </div>

        <form>
          <div className="flex flex-col md:flex-row md:gap-5">
            <div className=" md:w-1/2">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Product name:
                </label>
                <input
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="imageurl"
                >
                  Product ImageURL:
                </label>
                <input
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="type"
                  id="imageurl"
                  value={imageurl}
                  onChange={(e) => setImageUrl(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="weight"
                >
                  Product weight:
                </label>
                <input
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  id="weight"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="application"
                >
                  Product application:
                </label>
                <input
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  id="application"
                  value={application}
                  onChange={(e) => setApplication(e.target.value)}
                />
              </div>
            </div>
            <div className=" md:w-1/2">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="productform"
                >
                  Product Form:
                </label>
                <input
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  id="productform"
                  value={productform}
                  onChange={(e) => setproductform(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="packaging"
                >
                  Product packaging:
                </label>
                <input
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  id="packaging"
                  value={packaging}
                  onChange={(e) => setPackaging(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="dosage"
                >
                  Product dosage:
                </label>
                <input
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  id="dosage"
                  value={dosage}
                  onChange={(e) => setDosage(e.target.value)}
                />
              </div>

              {/* <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button> */}

              <div className=" md:mt-11" onClick={handleSubmit}>
                <Buttons name="Submit" />
              </div>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CreateData;
