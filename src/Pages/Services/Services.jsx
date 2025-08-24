import pen from "../../images/pen.png";
import deletIcon from "../../images/deletIcon.png";

const headers = [
  "الإجراءات",
  "المرحلة",
  "الآلة/الأداة المستخدمة",
  "الوصف",
  "الخدمة",
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
];



export default function Services() {
  return (
    <div className="bg-[rgba(255,248,235,1)] min-h-screen">
      <div className="container mx-auto px-6 overflow-hidden">
        <div className="overflow-x-auto hidden md:block rounded-3xl mt-10">
          <table className="min-w-[900px] table-auto w-full text-center border-l-[1px] border-r-[1px] border-[rgba(250,177,71,1)]">
            <thead>
              <tr className="bg-[rgba(250,177,71,1)] text-white">
                {headers.map((title, i) => (
                  <th
                    key={i}
                    className="px-4 py-2 border-b-[1px] border-[rgba(250,177,71,1)]"
                  >
                    {title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {servicesData.map((item, index) => (
                <tr
                  key={index}
                  className="border-b-[1px] border-[rgba(250,177,71,1)] bg-white"
                >
                  <td className="py-5 text-center flex justify-center gap-2">
                    <button className="w-5">
                      <img src={pen} alt="edit" />
                    </button>
                    <button className="text-[rgba(73,65,58,1)] w-5">
                      <img src={deletIcon} alt="delete" />
                    </button>
                  </td>
                  <td className="py-5">{item.stage}</td>
                  <td className="py-5">{item.equipment}</td>
                  <td className="py-5">{item.description}</td>
                  <td className="py-5">{item.service}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
