import { useEffect, useState } from "react";
import Card from "./Card";

export default function CardList({ headers, data, order }) {
  const [rows, setRows] = useState(data);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [currentRowIndex, setCurrentRowIndex] = useState(null);
  const [currentKey, setCurrentKey] = useState(null);
  const [editedValue, setEditedValue] = useState("");

  const handleEdit = (rowIndex, key) => {
    setCurrentRowIndex(rowIndex);
    setCurrentKey(key);
    setEditedValue(rows[rowIndex][key] || "");
    setIsModelOpen(true);
  };

  const handleDelete = (index) => {
    const newRows = rows.filter((_, i) => i !== index);
    setRows(newRows);
  };

  const handleSave = () => {
    const updatedRows = [...rows];
    updatedRows[currentRowIndex][currentKey] = editedValue;
    setRows(updatedRows);
    setIsModelOpen(false);
  };

  useEffect(() => {
    setRows(data);
  }, [data]);

  return (
    <div className="block md:hidden space-y-4 my-10">
      {rows.map((row, index) => {
        const cardData = order.map((key) => {
          const header = headers.find((h) => h.key === key);
          let value = row[key];

          // التعامل مع render إذا موجود
          if (header.render) {
            value = header.render(value, row);
          }

          return {
            header: header.key,
            title: header.label,
            value,
          };
        });

        return (
          <Card
            key={index}
            data={cardData}
            onEdit={(key) => handleEdit(index, key)}
            onDelete={() => handleDelete(index)}
          />
        );
      })}

      {/* مودل التعديل */}
      {isModelOpen && (
        <div className="fixed inset-0 bg-[rgba(255,248,235,1)] bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-80 shadow-lg">
            <h2 className="text-lg font-bold mb-4">تعديل البيانات</h2>

            <input
              type="text"
              value={editedValue}
              onChange={(e) => setEditedValue(e.target.value)}
              className="w-full border p-2 rounded mb-4"
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setIsModelOpen(false)}
                className="px-4 py-2 border rounded cursor-pointer"
              >
                إلغاء
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-[rgba(250,177,71,1)] text-white rounded cursor-pointer"
              >
                حفظ
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
