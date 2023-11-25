import React from "react";
import { Link } from "react-router-dom";
const MobileMenu = ({ setMobileMenu }) => {
  const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "Products", url: "/products" },
    { id: 4, name: "Contact", url: "/contact" },
  ];

  return (
    <ul
      className="flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh - 50px)]
    border-1 shadow-lg px-1 rounded-sm  text-black bg-white"
    >
      {data.map((value) => {
        return (
          // React Fragment we can add for key..they can not genrate server side error
          <React.Fragment key={value.id}>
            <li className="py-4 px-4 border-b text-sm font-semibold text-black">
              <Link to={value.url} onClick={() => setMobileMenu(false)}>
                {value.name}
                
              </Link>
              
            </li>
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default MobileMenu;
