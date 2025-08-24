import CardRow from "./CardRow";
import pen from "../../images/pen.png";
import deletIcon from "../../images/deletIcon.png";

export default function Card({ data }) {
  return (
    <div className="rounded-lg p-4 shadow-sm bg-white border-l-[2px] border-r-[2px] border-[rgba(250,177,71,1)]">
      {data.map((item, i) => (
        <CardRow key={i} title={item.title} value={item.value} />
      ))}

      <div className="flex flex-row-reverse justify-between items-center mt-3">
        <span className="font-bold text-gray-700">الإجراءات</span>
        <div className="flex gap-3">
          <button className="w-6">
            <img src={pen} alt="edit" />
          </button>
          <button className="w-6">
            <img src={deletIcon} alt="delete" />
          </button>
        </div>
      </div>
    </div>
  );
}
