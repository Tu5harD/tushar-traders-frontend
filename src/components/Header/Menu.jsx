import React from "react";
import { Link } from "react-router-dom";
const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Products", url: "/products" },
];
// const [isOverflowVisible, setIsOverflowVisible] = useState(false);

const Menu = () => {
  return (
    <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-black">
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
           
              <li className="cursor-pointer ">
                <Link to={item?.url}>{item.name}</Link>
              </li>
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default Menu;
