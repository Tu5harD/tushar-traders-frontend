import { useState, useEffect } from "react";
import Wrapper from "../Wrapper";
import Buttons from "../Buttons";
import AvataIcon from "../AvataIcon";
import MobileMenu from "./MobileHeader";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

import Menu from "./Menu";
const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("-translate-y-[80px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const polygonClipPath =
    "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)";
  return (
    <header
      className={`w-full h-[50px] md:h-[80px] flex items-center justify-between  z-20 bg-gray-50 sticky top-0 transition-transform duration-300 ${show}
      } `}
    >
      <Wrapper className="h-[60px] flex items-center justify-between">
        <div className=" flex flex-row items-center gap-1">
          <Link to="/">
            <img
              src="/logo.webp"
              alt="cattle logo"
              width={20}
              height={20}
              className=" w-[40px] h-[40px] md:w-[60px] md:h-[60px]"
            />
          </Link>
          <span className=" text-md font-semibold text-gray-600">
            Cattle Feeds
          </span>
        </div>
        <div className="flex items-center justify-between gap-2 md:gap-6">
          <Menu />

          {mobileMenu && (
            <MobileMenu
              // showCatMenu={showCatMenu}
              // setShowCatMenu={setShowCatMenu}
              setMobileMenu={setMobileMenu}
              // categories={categories}
            />
          )}

          <div>
            <hr className=" hidden md:block border-t-2  border-gray-400 h-0 w-6 transform rotate-90" />
          </div>

          <Link to="/admin-page">
            <div className=" flex items-center justify-center">
              <AvataIcon />
            </div>
          </Link>

          <Link to="/contact">
            <div className="hidden md:block">
              <Buttons name="Contact" />
            </div>
          </Link>

          <div className=" md:hidden w-8 md:w-12 h-8 md:h-12 rounded-full flex items-center justify-center cursor-pointer">
            {mobileMenu ? (
              <CloseIcon
                onClick={() => {
                  setMobileMenu(false);
                }}
              />
            ) : (
              <MenuIcon
                onClick={() => {
                  setMobileMenu(true);
                }}
              />
            )}
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
