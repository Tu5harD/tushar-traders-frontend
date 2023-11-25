import React from "react";
import Wrapper from "../Wrapper";

const Map = () => {
  return (
    <Wrapper>
      <div className=" py-5 ">
     
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3816.4148006806095!2d74.15279031060403!3d16.954134883793746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1a1c458d98fe5%3A0x506c64a6cf10436e!2sTUSHAR%20TRADERS!5e0!3m2!1smr!2sin!4v1700546313182!5m2!1smr!2sin"
          width="100%"
          height="600"
          className="h-[300px] sm:h-[600px]"
          style={{ border: 2 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </Wrapper>
  );
};

export default Map;
