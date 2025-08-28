import { useEffect } from "react";
import Table from "../../Components/Customs/Table";
import CardList from "../../Components/Customs/CardList";
const headers = [
  { label: "العنوان", key: "address" },
  { label: "ساعات العمل", key: "workHours" },
  {
    label: "الهاتف",
    key: "link",
    render: (value) => (
      <a href={value} className="text-blue-500 cursor-pointer">
        {value}
      </a>
    ),
  },
  {
    label: "الموقع",
    key: "linkText",
    render: (value) => (
      <a
        href={value}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 cursor-pointer"
      >
        الموقع على الخريطة
      </a>
    ),
  },
  { label: "المدير", key: "manager" },
];

const data = [
  {
    address: "حي السريان، شارع المكتب، حلب، سوريا",
    workHours: "8:00 صباحاً - 4:00 مساءً (الأحد - الخميس)",
    link: "tel:+963948888330",
    linkText:
      "https://www.google.com/maps/@36.218774,37.158682,1238m/data=!3m1!1e3?hl=ar",
    manager: "محمد محمد",
  },
  {
    address: "دمشق، ساحة الأمويين",
    workHours: "9:00 صباحاً - 5:00 مساءً (السبت - الخميس)",
    link: "tel:+963944555111",
    linkText: "https://www.google.com/maps/@33.5141,36.2765,14z?hl=ar",
    manager: "أحمد الأحمد",
  },
];

// ترتيب العرض في الكارد
const cardOrder = ["address", "workHours", "link", "linkText", "manager"];

export default function Locations() {
  useEffect(() => {
    document.title = "لوحة التحكم | إدارة المراكز";
  }, []);

  return (
    <div className="bg-[rgba(255,248,235,1)] min-h-screen">
      <div className="container mx-auto px-6 overflow-hidden">
        <div className="overflow-x-auto hidden md:block rounded-3xl mt-10">
          <Table headers={headers} data={data} />
        </div>
        <CardList headers={headers} data={data} order={cardOrder} />
      </div>
    </div>
  );
}
