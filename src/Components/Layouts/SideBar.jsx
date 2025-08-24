import { motion, AnimatePresence } from "framer-motion";
import { FiGlobe } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";
import { FiBox } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";

import home from "../../images/home.png";
// import pen from "../images/pen.png";
import img from "../../images/img.png";
import message from "../../images/message.png";



import Frame1 from "../../images/Frame1.png";
import Frame32 from "../../images/Frame32.png";
import Frame23 from "../../images/Frame23.png";
import Frame12 from "../../images/Frame12.png";
import DashboardMenu from "./DashboardMenu";
import SidebarHeader from "./SidebarHeader";


export default function SideBar({ isOpen }) {
  const links = [
    { name: "الصفحة الرئيسية", icon: home, to: "/" },
    { name: "إدارة المنتجات", icon:  FiBox, to: "/products", counter: Frame23 , isComponent: true},
    { name: "إدارة الصور", icon: img, to: "/images", counter: Frame1 },
    { name: "إدارة الرسائل", icon: message, to: "/messages", counter: Frame32 },
    { name: "إدارة الخدمات", icon: FiSettings, to: "/services", counter: Frame32, isComponent: true},
    { name: "إدارة المراكز", icon:  FiMapPin , to: "/locations", counter: Frame12, isComponent: true },
    { name: "روابط التواصل", icon: FiGlobe, to: "/social-links", counter: Frame1, isComponent: true },
  ];
  
  return (
    <>
      <div className="hidden fixed xl:flex flex-col bg-white text-black p-4 h-full shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] z-100">
        <SidebarHeader/>
        <DashboardMenu links={links}/>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="sidebar"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 40 }}
            className="fixed right-0 top-0 h-full w-64 bg-white shadow-lg p-4 flex flex-col z-50 xl:hidden"
          >
            <SidebarHeader/>
            <DashboardMenu links={links} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}