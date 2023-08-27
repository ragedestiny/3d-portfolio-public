import React, { useState } from "react";

import { emailStatus } from "../constants";
import { closeicon } from "../assets";
import { styles } from "../styles";
import ImgLoader from "./ImgLoader";

const EmailModal = ({ open, onClose, status }) => {
  if (!open) return null;

  const [imgLoaded, setImgLoaded] = useState(false);
  const curStatus = status ? emailStatus[0] : emailStatus[1];

  const Success = () => {
    return (
      <div>
        <p className={styles.modalText}>Successfully sent.</p>
        <p className={styles.modalText}>Connect with you soon!</p>
      </div>
    );
  };

  const Failure = () => {
    return (
      <div>
        <p className={styles.modalText}>Something went wrong.</p>
        <p className={styles.modalText}>Please try again!</p>
      </div>
    );
  };

  return (
    <div onClick={onClose} className="bg-black/50 absolute h-full w-full z-10">
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-max w-full h-auto fixed top-[50%] left-1/2 -translate-x-[50%] -translate-y-1/2 flex bg-slate-800 shadow-sm rounded-lg px-[3%]"
      >
        <div className="flex flex-col mt-[10%]">
          <img
            src={closeicon}
            onClick={onClose}
            className="fixed top-[4%] right-[4%] w-[5%] h-[4%] md:h-[5%] cursor-pointer"
          />

          <div className="relative bg-gradient-to-b from-violet-600 rounded-full w-80 h-80 mx-auto overflow-hidden">
            {!imgLoaded && <ImgLoader />}
            <img
              src={curStatus.image}
              alt={curStatus.alt}
              className="object-cover"
              onLoad={() => setImgLoaded(true)}
            />
          </div>
          <div className="flex justify-center text-center mt-12 px-4 py-8">
            {status ? <Success /> : <Failure />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailModal;
