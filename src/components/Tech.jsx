import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

const Tech = () => {
  const icons = Object.values(technologies).map(
    (technology) => technology.icon
  );
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      <div className="w-full sm:w-full h-[75vh] mx-auto">
        <BallCanvas icons={icons} />
      </div>
      <div className="absolute xs:bottom-16 sm:bottom-24 bottom-32 w-full flex justify-center items-center">
        <a href="#Projects">
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
    </div>
  );
};

export default SectionWrapper(Tech, "");
