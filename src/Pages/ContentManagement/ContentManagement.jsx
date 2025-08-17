import { useEffect } from "react";

import services from "../../images/services.png";
import products from "../../images/products.png";
import message from "../../images/message.png";
import orangMessage from "../../images/orangMessage.png";
import visitors from "../../images/visitors.png";
import line from "../../images/line.png";

import InfoCard from "./Components/InfoCard";
import ChartCard from "./Components/ChatCard";


const infoArray = [
  {
    title: "الخدمات",
    icon: services,
    number: "20",
    description: "+ خدمة جديد",
    isArrow: false,
  },
  {
    title: "المنتجات",
    icon: products,
    number: "120",
    description: "+7 منتجات الجديدة",
    isArrow: false,
  },
  {
    title: "الرسائل",
    icon: message,
    number: "177",
    description: "10%عن الشهر الماضي",
    isArrow: true,
  },
  {
    title: "عدد الزوار",
    icon: visitors,
    number: "245,1",
    description: "12% عن الشهر الماضي",
    isArrow: true,
  },
];

const visitorsData = [
  { month: "كانون الاول", visitors: 700 },
  { month: "تشرين التاني", visitors: 1300 },
  { month: "تشرين الاول", visitors: 1400 },
  { month: "أيلول", visitors: 1700 },
  { month: "آب", visitors: 1900 },
  { month: "حزيران", visitors: 2100 },
  { month: "أيار", visitors: 1900 },
  { month: "نيسان", visitors: 2200 },
  { month: "آذار", visitors: 2200 },
  { month: "شباط", visitors: 2300 },
  { month: "كانون التاني", visitors: 2600 },
];


const messagesData = [
  { month: "كانون الاول", visitors: 300 },
  { month: "تشرين التاني", visitors: 350 },
  { month: "تشرين الاول", visitors: 390 },
  { month: "أيلول", visitors: 400 },
  { month: "آب", visitors: 390 },
  { month: "حزيران", visitors: 400 },
  { month: "أيار", visitors: 399 },
  { month: "نيسان", visitors: 350 },
  { month: "آذار", visitors: 310 },
  { month: "شباط", visitors: 430 },
  { month: "كانون التاني", visitors: 480 },
];

export default function ContentManagement() {

  useEffect(() => {
        document.title = "لوحة التحكم | إدارة المحتوى"
      }, []) 

  return (
    <div className="bg-[rgba(255,248,235,1)]  min-h-screen">
      <div className="container mx-auto px-6 overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {infoArray.map((card, index) => (
            <InfoCard
              key={index}
              title={card.title}
              icon={card.icon}
              number={card.number}
              description={card.description}
              isArrow={card.isArrow}
            />
          ))}
        </div>

        <ChartCard
          title="إحصائيات الزوار الشهرية"
          icon={line}
          data={visitorsData}
          type="area"
          color="#FFA500"
          yDomain={[500, 3000]}
          yTicks={[500, 1500, 2000, 2500, 3000]}
        />

        <ChartCard
          title="إحصائيات الرسائل"
          icon={orangMessage}
          data={messagesData}
          type="bar"
          color="rgba(105, 166, 206, 1)"
          yDomain={[0, 500]}
          yTicks={[100, 200, 300, 400, 500]}
          barSize={44}
        />

      </div>
    </div>
  );
}
