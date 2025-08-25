import Table from "../../Components/Customs/Table";
import Card from "../../Components/Customs/Card";

const contactHeaders = [
  { label: "الإجراءات", key: "actions" },
  { label: "رابط مباشر", key: "link" },
  { label: "الرابط / الحساب", key: "linkText" },
  { label: "الوصف", key: "description" },
  { label: "نوع التواصل", key: "type" },
];


const contactData = [
  {
    type: "زيارتنا",
    description: "يمكنك زيارتنا في مقرنا الرئيسي خلال أوقات العمل",
    linkText: "عرض موقع على الخريطة",
    link: "https://www.google.com/maps/...",
  },
  {
    type: "البريد الإلكتروني",
    description: "أرسل لنا رسالة وسنرد عليك في أسرع وقت ممكن",
    linkText: "info@albarakametal.com",
    link: "mailto:info@albarakametal.com",
  },
  {
    type: "اتصل بنا",
    description: "لدينا فريق دعم متاح خلال أوقات العمل الرسمية",
    linkText: "+963 948 888 330",
    link: "tel:+963948888330",
  },
  {
    type: "Instagram",
    description: "تابعنا على إنستغرام",
    linkText: "@barakametal",
    link: "https://instagram.com/barakametal",
  },
  {
    type: "Telegram",
    description: "انضم للقناة الرسمية على تلغرام",
    linkText: "@barakametal",
    link: "https://t.me/barakametal",
  },
];

const cardOrder = ["type", "description", "linkText", "link"];

export default function SocialLinks() {
  return (
    <div className="bg-[rgba(255,248,235,1)] min-h-screen">
      <div className="container mx-auto px-6 overflow-hidden">
        <div className="overflow-x-auto hidden md:block rounded-3xl mt-10">
          <Table headers={contactHeaders} data={contactData} />
        </div>
        <div className="block md:hidden space-y-4 my-10">
          {contactData.map((row, index) => {
            const cardData = contactHeaders
              .filter((header) => header.key !== "actions")
              .map((header) => ({
                header: header.key,
                title: header.label,
                value: row[header.key],
              }));
            return <Card key={index} data={cardData} />;
          })}
          
        </div>
      </div>
    </div>
  );
}
