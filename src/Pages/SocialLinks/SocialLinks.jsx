import Table from "../../Components/Customs/Table";
import CardList from "../../Components/Customs/CardList";
import { useEffect } from "react";

const contactHeaders = [
  { label: "الإجراءات", key: "actions" },
  {
    label: "رابط مباشر",
    key: "link",
    render: (value, row) => (
      <a
        href={row.link}
        target="_blank"
        className="text-blue-500 hover:underline"
      >
        {row.link}
      </a>
    ),
  },
  { label: "الوصف", key: "description" },
  { label: "نوع التواصل", key: "type" },
];

const contactData = [
  {
    type: "زيارتنا",
    description: "يمكنك زيارتنا في مقرنا الرئيسي خلال أوقات العمل",
    link: "https://www.google.com/maps/...",
  },
  {
    type: "البريد الإلكتروني",
    description: "أرسل لنا رسالة وسنرد عليك في أسرع وقت ممكن",
    link: "mailto:info@albarakametal.com",
  },
  {
    type: "اتصل بنا",
    description: "لدينا فريق دعم متاح خلال أوقات العمل الرسمية",
    link: "tel:+963948888330",
  },
  {
    type: "Instagram",
    description: "تابعنا على إنستغرام",
    link: "https://instagram.com/barakametal",
  },
  {
    type: "Telegram",
    description: "انضم للقناة الرسمية على تلغرام",
    link: "https://t.me/barakametal",
  },
];

const cardOrder = ["type", "description", "link"];

export default function SocialLinks() {
  useEffect(() => {
    document.title = "لوحة التحكم | روابط التواصل ";
  }, []);

  return (
    <div className="bg-[rgba(255,248,235,1)] min-h-screen">
      <div className="container mx-auto px-6 overflow-hidden">
        <div className="overflow-x-auto hidden md:block rounded-3xl mt-10">
          <Table headers={contactHeaders} data={contactData} />
        </div>
        <CardList
          headers={contactHeaders}
          data={contactData}
          order={cardOrder}
        />
      </div>
    </div>
  );
}
