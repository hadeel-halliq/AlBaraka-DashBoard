import Table from "../../Components/Customs/Table";
import Card from "../../Components/Customs/Card";
import CardList from "../../Components/Customs/CardList";
import { useEffect } from "react";

const headers = [
  { label: "الإجراءات", key: "actions" },
  { label: "المرحلة", key: "stage" },
  { label: "الآلة/الأداة المستخدمة", key: "equipment" },
  { label: "الوصف", key: "description" },
  { label: "الخدمة", key: "service" },
];
const servicesData = [
  {
    service: "ثني الحديد",
    description: "ثني الحديد حسب المقاسات المطلوبة",
    equipment: "مكابس هيدروليكية",
    stage: "تصنيع",
  },
  {
    service: "تطعيج الحديد",
    description: "تطعيج الحديد بعد التصنيع",
    equipment: "-",
    stage: "بعد الإنتاج",
  },
  {
    service: "التصميم المبدئي",
    description: "تصميم حسب متطلبات العميل",
    equipment: "برامج تصميم حديثة",
    stage: "تصميم",
  },
  {
    service: "مرحلة التصنيع",
    description: "تنفيذ التصميم على الآلات",
    equipment: "أحدث المكابس والآلات",
    stage: "تصنيع",
  },
  {
    service: "مراقبة الجودة",
    description: "فحص كل مرحلة لضمان الجودة",
    equipment: "أدوات قياس دقيقة",
    stage: "مراقبة الجودة",
  },
  {
    service: "التسليم النهائي",
    description: "تغليف وتوصيل المنتج مع ضمان",
    equipment: "-",
    stage: "تسليم",
  },
  {
    service: "2التسليم النهائي",
    description: "تغليف وتوصيل المنتج مع ضمان",
    equipment: "-",
    stage: "تسليم",
  },
  {
    service: "3التسليم النهائي",
    description: "تغليف وتوصيل المنتج مع ضمان",
    equipment: "-",
    stage: "تسليم",
  },
  {
    service: "4التسليم النهائي",
    description: "تغليف وتوصيل المنتج مع ضمان",
    equipment: "-",
    stage: "تسليم",
  },
];

const cardOrder = ["service", "description", "equipment", "stage"];

export default function Services() {

  useEffect(() => {
    document.title = "لوحة التحكم | إدارة الخدمات";
  }, []);

  return (
    <div className="bg-[rgba(255,248,235,1)] min-h-screen">
      <div className="container mx-auto px-6 overflow-hidden">
        <div className="overflow-x-auto hidden md:block rounded-3xl mt-10">
          <Table headers={headers} data={servicesData} />
        </div>
        <CardList headers={headers} data={servicesData} order={cardOrder} />
      </div>
    </div>
  );
}
