import React from "react";
import Wrapper from "../Wrapper";
import Buttons from "../Buttons";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <div className="bg-[url('https://i.ibb.co/fFYNPPp/homebg.webp')] bg-cover bg-no-repeat bg-fixed bg-center	 ">
      <div
        style={{
          background:
            "linear-gradient(to bottom,transparent, rgba(0, 0, 0, 0.9))",
          margin: "0",
          padding: "0",
          height: "100%",
          boxSizing: "border-box",
        }}
      >
        <div className="mx-auto max-w-2xl py-12 sm:py-28 lg:py-24">
          <Wrapper className="flex flex-col gap-3">
            <div className="flex justify-center">
              <img
                src="/logo.webp"
                width={20}
                height={20}
                alt="logo"
                className="w-[210px] md:w-[310px] "
              />
            </div>
            <div className="text-center">
              <h1 className=" brightness-100 text-3xl font-bold tracking-tight text-white sm:text-6xl">
                नम्रता & तुषार ट्रेडर्स, इंगरूळ
              </h1>
              <p className="mt-6 text-xl md:text-2xl leading-3 md:leading-8 font-semibold text-white">
                पशुखाद्याचे होलसेल व रिटेल विक्रेते.
              </p>
              <p className="mt-6 text-xl md:text-2xl leading-7 md:leading-8 font-medium text-white">
                आमच्याकडे सर्व प्रकारचे सरकी पेंड आटा, भुसा, हरभरा कळना, गोळी
                होलसेल व रिटेल दारात मिळेल.
              </p>
              <p className="mt-6 text-xl md:text-2xl leading-3 md:leading-8 font-medium text-white ">
                संपर्क : ९९२३९५९८३९ , ८९९९३६३५९०
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                {/* <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a> */}
                <Link to="/contact">
                  <Buttons name="Contact" />
                </Link>
              </div>
            </div>
          </Wrapper>
        </div>
      </div>
    </div>
  );
};

export default Landing;
