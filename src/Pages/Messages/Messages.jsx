import { useEffect, useState } from "react";
import CardList from "../../Components/Customs/CardList";
import Table from "../../Components/Customs/Table";


const headers = [
  { label: "الإجراءات", key: "actions" },
  { label: "الحالة", key: "status" },
  { label: "التاريخ", key: "date" },
  { label: "الموضوع", key: "subject" },
  { 
    label: "البريد الإلكتروني", 
    key: "email",
    render: (value) => (
      <a href={`mailto:${value}`} className="text-blue-500 cursor-pointer">
        {value}
      </a>
    )
  },
  { label: "اسم المرسل", key: "name" },
];

const messagesData = [
  {
    name: "أحمد علي",
    email: "ahmad@example.com",
    subject: "استفسار عن أسعار الحديد",
    date: "2025-08-20",
    status: "جديد",
  },
  {
    name: "سارة محمد",
    email: "sara@example.com",
    subject: "طلب عرض تصميم لمشروع",
    date: "2025-08-18",
    status: "مقروء",
  },
  {
    name: "محمد خالد",
    email: "mohammad@example.com",
    subject: "استفسار عن وقت التسليم",
    date: "2025-08-15",
    status: "تم الرد",
  },
  {
    name: "ليلى أحمد",
    email: "leila@example.com",
    subject: "تقديم شكوى بخصوص خدمة",
    date: "2025-08-14",
    status: "جديد",
  },
  {
    name: "خالد يوسف",
    email: "khaled@example.com",
    subject: "طلب فاتورة تفصيلية",
    date: "2025-08-10",
    status: "مقروء",
  },
];

const cardOrder = ["name", "email", "subject", "date", "status"];

export default function Messages() {
  const [filter, setFilter] = useState("all");
  const [filteredData, setFilteredData] = useState(messagesData); 

  useEffect(() => {
    document.title = "لوحة التحكم | إدارة الرسائل"
  }, []);
  
  useEffect(() => {
    const newData = messagesData.filter((messages) => {
      if (filter === "all") return true;
      return messages.status === filter;
    });
    setFilteredData(newData);
  }, [filter]);

  return (
    <div className="bg-[rgba(255,248,235,1)] min-h-screen">
      <div className="container mx-auto px-6 overflow-hidden">
        <div className="my-5 flex flex-row-reverse justify-center ">
          <label
            htmlFor="filterLabel"
            className="ml-6 bg-primary rounded-2xl p-1.5 text-white font-bold cursor-pointer"
          >
            فلترة حسب الحالة
          </label>
          <select
            className="px-4 py-2 rounded-2xl border border-gray-300 bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors cursor-pointer"
            id="filterLabel"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">جميع الرسائل</option>
            <option value="جديد">جديد</option>
            <option value="مقروء">مقروء</option>
            <option value="تم الرد">تم الرد</option>
          </select>
        </div>
        <div className="overflow-x-auto hidden md:block rounded-3xl mt-10">
          <Table headers={headers} data={filteredData} />
        </div>
        <CardList headers={headers} data={filteredData} order={cardOrder} />
      </div>
    </div>
  );
}
