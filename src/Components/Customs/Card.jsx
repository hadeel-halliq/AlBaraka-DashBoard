import CardRow from "./CardRow";
import pen from "../../images/pen.png";
import deletIcon from "../../images/deletIcon.png";

export default function Card({ data, onEdit, onDelete }) {
  return (
    <div className="rounded-2xl p-4 shadow-md bg-white border-2 border-primary">
      <div className="grid gap-2">
        {data.map((item, i) => (
          <div key={i} className="flex justify-between items-center bg-gray-50 px-3 py-2 rounded-lg">
            <CardRow title={item.title} value={item.value} />
            <button
              className="w-6 cursor-pointer"
              onClick={() => onEdit(item.header)}
            >
              <img src={pen} alt="edit" />
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-4 border-t pt-3">
        <span className="font-bold text-gray-700">الإجراءات</span>
        <div className="flex gap-4">
          <button className="w-6 cursor-pointer" onClick={onDelete}>
            <img src={deletIcon} alt="delete" />
          </button>
        </div>
      </div>
    </div>
  );
}
