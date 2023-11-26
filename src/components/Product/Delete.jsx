// import React from "react";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Delete = ({ product }) => {
//   const handleDelete = async (id: string) => {
//     try {
//       await axios.delete("http://localhost:3001/delete/" + id);
//       toast.success("The product successfully deletes.", {
//         position: "bottom-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//       });
//       window.location.reload();
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };
//   return (
//     <>
//       <div className="">
//         <ToastContainer />
//         <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-2xl bg-gray-200  lg:h-80 ">
//           <img
//             src={product?.imageurl}
//             alt="logo"
//             width={200}
//             height={200}
//             className="h-full w-full object-cover object-center "
//           />
//         </div>

//         <div className="mt-4 flex justify-between ">
//           <div>
//             <h3 className="text-md text-black font-semibold">
//               <span className="absolute inset-0" />
//               {product?.name}
//             </h3>
//             <p className="mt-1 text-sm text-gray-500">
//               Weight : {product?.weight} KG
//             </p>
//           </div>

//           <button
//             className="inline-flex h-9 items-center gap-x-1.5 rounded-full bg-red-500 text-white px-3 py-0 text-xs font-medium cursor-pointer"
//             onClick={() => handleDelete(product?.id)}
//           >
//             DELETE {"  "} 🗑️
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Delete;
import React from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import URL from "../../server/api"
const Delete = ({ product }) => {
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${URL}/delete/` + id);
      toast.success("The product successfully deletes.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      window.location.reload();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="">
        <ToastContainer />
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-2xl bg-gray-200  lg:h-80 ">
          <img
            src={product?.imageurl}
            alt="logo"
            width={200}
            height={200}
            className="h-full w-full object-cover object-center "
          />
        </div>

        <div className="mt-4 flex justify-between ">
          <div>
            <h3 className="text-md text-black font-semibold">
              {product?.name}
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Weight: {product?.weight} KG
            </p>
          </div>

          <button
            className="inline-flex h-9 items-center gap-x-1.5 rounded-full bg-red-500 text-white px-3 py-0 text-xs font-medium cursor-pointer"
            onClick={() => handleDelete(product?.id)}
          >
            DELETE {"  "} 🗑️
          </button>
        </div>
      </div>
    </>
  );
};

export default Delete;
