import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className={
          idName !== "Contact"
            ? `${styles.padding} max-w-7xl mx-auto relative z-0`
            : null
        }
      >
        <span className="hash-span" id={idName !== "Contact" ? idName : null}>
          &nbsp;
        </span>
        <div id={idName === "Contact" ? idName : null}></div>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
