import { useEffect, useState } from "react";
import searchIcon from "../../images/searchIcon.png";
import Table from "../../Components/Customs/Table";
import CardList from "../../Components/Customs/CardList";

const headers = [
  { key: "actions", label: "الإجراءات" },
  { key: "weight1", label: "الوزن/كغ" },
  { key: "thickness1", label: "السماكية/مم" },
  { key: "weight2", label: "الوزن/كغ" },
  { key: "thickness2", label: "السماكية/مم" },
  { key: "weight3", label: "الوزن/كغ" },
  { key: "thickness3", label: "السماكية/مم" },
  { key: "length", label: "الطول/متر" },
  { key: "size", label: "مقاس" },
];

const data = [
  {
    weight1: "-",
    thickness1: "3",
    weight2: "1,35",
    thickness2: "2,5",
    weight3: "1,25",
    thickness3: "2",
    length: "6",
    size: "20 x 20",
  },
  {
    weight1: "-",
    thickness1: "3",
    weight2: "1,35",
    thickness2: "2,5",
    weight3: "1,25",
    thickness3: "2",
    length: "6",
    size: "20 x 20",
  },
  {
    weight1: "-",
    thickness1: "3",
    weight2: "1,35",
    thickness2: "2,5",
    weight3: "1,25",
    thickness3: "2",
    length: "6",
    size: "20 x 20",
  },
  {
    weight1: "-",
    thickness1: "3",
    weight2: "1,35",
    thickness2: "2,5",
    weight3: "1,25",
    thickness3: "2",
    length: "6",
    size: "20 x 20",
  },
  {
    weight1: "-",
    thickness1: "3",
    weight2: "1,35",
    thickness2: "2,5",
    weight3: "1,25",
    thickness3: "2",
    length: "6",
    size: "20 x 20",
  },
  {
    weight1: "-",
    thickness1: "3",
    weight2: "1,35",
    thickness2: "2,5",
    weight3: "1,25",
    thickness3: "2",
    length: "6",
    size: "20 x 20",
  },
];
const cardOrder = [
  "size",
  "length",
  "thickness3",
  "weight3",
  "thickness2",
  "weight2",
  "thickness1",
  "weight1"
];

export default function Product() {

  const [filter, setfilter] = useState()

  useEffect(() => {
    document.title = "لوحة التحكم | إدراة المنتجات";
  }, []);

  return (
    <div className="bg-[rgba(255,248,235,1)] min-h-screen">
      <div className="container mx-auto px-6 overflow-hidden">
        <div className="flex flex-col-reverse gap-4  items-center sm:flex sm:flex-row sm:justify-between my-4">
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
              value={filter}
              onChange={(e) => setfilter(e.target.value)}
              type="text"
              placeholder="ابحث عن محتوى ..."
              className="w-full border-[1px] border-primary pr-8 pl-2 py-1 rounded-2xl focus:outline-none focus:border-primary focus:border-2"
              dir="rtl"
            />
          </div>
        </div>

        <div className="overflow-x-auto hidden md:block rounded-3xl mt-10">
          <Table headers={headers} data={data}/>
        </div>
        <CardList headers={headers} data={data} order={cardOrder}/>
      </div>
    </div>
  );
}
