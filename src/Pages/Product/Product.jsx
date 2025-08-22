import { useEffect } from "react";
import searchIcon from "../../images/searchIcon.png";
import pen from "../../images/pen.png";
import deletIcon from "../../images/deletIcon.png";

import Card from "./Components/Card";

const headers = [
  "الإجراءات",
  "الوزن/كغ",
  "السماكية/مم",
  "الوزن/كغ",
  "السماكية/مم",
  "الوزن/كغ",
  "السماكية/مم",
  "الطول/متر",
  "مقاس",
];

const rowData = ["-", "3", "1,35", "2,5", "1,25", "2", "6", "20 x 20"];

const cardData = [
  { title: "مقاس", value: "20 x 20" },
  { title: "الطول/متر", value: "6" },
  { title: "السماكية/مم", value: "2" },
  { title: "الوزن/كغ", value: "125" },
  { title: "السماكية/مم", value: "25" },
  { title: "الوزن/كغ", value: "135" },
  { title: "السماكية/مم", value: "3" },
  { title: "الوزن/كغ", value: "-" },
];

export default function Product() {
  useEffect(() => {
    document.title = "لوحة التحكم | إدراة المنتجات";
  }, []);


  return (
    <div className="bg-[rgba(255,248,235,1)] min-h-screen">
      <div className="container mx-auto px-6 overflow-hidden">
       
        <div className="flex justify-between my-4">
          <button className="w-44 bg-primary text-white font-bold py-2 rounded-2xl cursor-pointer">
            إضافة محتوى جديد+
          </button>
          <div className="relative w-44 flex">
            <img
              src={searchIcon}
              alt="search"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4"
            />
            <input
              type="text"
              placeholder="ابحث عن محتوى ..."
              className="w-full border-[1px] border-primary pr-8 pl-2 py-1 rounded-2xl focus:outline-none focus:border-primary focus:border-2"
              dir="rtl"
            />
          </div>
        </div>

        <div className="overflow-x-auto hidden md:block rounded-3xl mt-10">
          <table className="min-w-[900px] table-auto border-collapse w-full text-center border-l-[1px] border-r-[1px] border-[rgba(250,177,71,1)]">
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
              {Array.from({ length: 10 }, (_, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="border-b-[1px] border-[rgba(250,177,71,1)]"
                >
                  <td className="px-4 py-2">
                    <div className="flex justify-center gap-3">
                      <button className="w-5">
                        <img src={pen} alt="edit" />
                      </button>
                      <button className="text-[rgba(73,65,58,1)] w-5">
                        <img src={deletIcon} alt="delete" />
                      </button>
                    </div>
                  </td>
                  {rowData.map((value, colIndex) => (
                    <td key={colIndex} className="px-4 py-2">
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      
        <div className="block md:hidden space-y-4 my-10">
          {Array.from({ length: 10 }, (_, rowIndex) => (
            <Card key={rowIndex} data={cardData} />
          ))}
        </div>
      </div>
    </div>
  );
}