import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import circleIcon from "../images/circleIcon.png";
import market from "../images/market.png";
import orangePen from "../images/orangePen.png";

export default function DashboardHeader({ isOpen, handleClick }) {
  const location = useLocation();
  const iconStyle = "text-3xl cursor-pointer text-primary";

  const titles = {
    "/dashboard/content": {
      text: "نظرة عامة",
      icon: market,
    },
    "/dashboard/products": {
      text: "إدارة المنتجات",
      icon: orangePen,
    },
  };

  const mainTitle = titles[location.pathname];

  return (
    <div className="bg-[rgba(255,248,235,1)] py-7">
      <div className="container mx-auto px-6 overflow-hidden flex justify-between items-center">
        <div className="flex justify-center items-center gap-2">
          <Link to="/">
            <img src={circleIcon} alt="circleIcon" className="w-[50px]" />
          </Link>
          <div className="xl:hidden">
            <button onClick={handleClick}>
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <IoClose className={iconStyle} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="bars"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaBars className={iconStyle} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {mainTitle && (
          <div className="flex justify-center items-center gap-2">
            <h2 className="font-bold text-2xl">{mainTitle.text}</h2>
            <img src={mainTitle.icon} alt={mainTitle.text} />
          </div>
        )}
      </div>
    </div>
  );
}
