import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Jacky</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            <span>I am a </span>
            <TypeAnimation
              cursor={true}
              className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-teal-500"
              sequence={[
                "Web Developer",
                500,
                "Full Stack Developer",
                500,
                "Chemical Engineer",
                500,
              ]}
              repeat={Infinity}
            />
          </p>
        </div>
      </div>
      <ComputersCanvas />

      <div className="absolute bottom-16 xs:bottom-16 sm:bottom-24 lg:bottom-16 w-full flex justify-center items-center">
        <a href="#About">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className={styles.scrollClick}
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
