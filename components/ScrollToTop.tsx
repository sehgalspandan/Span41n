import { IoIosArrowUp } from "react-icons/io";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useScrollPercentage from "../hooks/useScrollPercentage" 

export default function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);
  const scrollPercentage = useScrollPercentage();
 
  useEffect(() => {
    if ( scrollPercentage > 15) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, [scrollPercentage]);
 
  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };
 
  return (
    <>
      {showButton && (
        <motion.button
          onClick={scrollToTop}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.2,
          }}
          aria-label="Scroll To Top"
          className="fixed bottom-20 100 transition-all ease-in-out right-8 md:bottom-[50px] md:right-[20px]  z-40 print:hidden"
        >
          <IoIosArrowUp className="bg-black   text-white rounded-xl shadow-lg text-[45px] md:mr-10" />
        </motion.button>
      )}
    </>
  );
}