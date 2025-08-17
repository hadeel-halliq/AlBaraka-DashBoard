import { motion, AnimatePresence } from "framer-motion";

import home from "../images/home.png";
import pen from "../images/pen.png";
import img from "../images/img.png";
import message from "../images/message.png";
import services from "../images/services.png";
import contact from "../images/contact.png";

import Frame1 from "../images/Frame1.png";
import Frame32 from "../images/Frame32.png";
import Frame23 from "../images/Frame23.png";
import Frame12 from "../images/Frame12.png";
import DashboardMenu from "./DashboardMenu";
import SidebarHeader from "./SidebarHeader";

export default function SideBar({ isOpen }) {
  const links = [
    { name: "الصفحة الرئيسية", icon: home, to: "/" },
    { name: "إدارة المحتوى", icon: pen, to: "/dashboard/content" },
    { name: "إدارة الصور", icon: img, to: "", counter: Frame1 },
    { name: "إدارة الرسائل", icon: message, to: "", counter: Frame32 },
    { name: "إدارة الخدمات", icon: services, to: "/dashboard/products", counter: Frame23 },
    { name: "إدارة المراكز", icon: home, to: "", counter: Frame12 },
    { name: "روابط التواصل", icon: contact, to: "", counter: Frame1 },
  ];
  
  return (
    <>
      <div className="hidden xl:flex flex-col bg-white text-black p-4 h-full">
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