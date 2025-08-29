import pen from "../../images/pen.png";
import deletIcon from "../../images/deletIcon.png";
import { useEffect, useState } from "react";

export default function Table({ headers, data }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [tableData, setTableData] = useState(data);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedRow, setEditedRow] = useState({});

  // الباجينيشن
  const rowsPerPage = 5;
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = tableData.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(tableData.length / rowsPerPage);

  const handleDecrement = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };
  const handleIncrement = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  // حذف صف
  const handleDelete = (rowIndex) => {
    const globalIndex = indexOfFirstRow + rowIndex;
    setTableData((prev) => prev.filter((_, i) => i !== globalIndex));
  };

  // بدء التعديل
  const handleEdit = (row, rowIndex) => {
    const globalIndex = indexOfFirstRow + rowIndex;
    setEditingIndex(globalIndex);
    setEditedRow(row);
  };
  // حفظ التعديلات
  const handleSave = () => {
    setTableData((prev) =>
      prev.map((r, i) => (i === editingIndex ? editedRow : r))
    );
    setEditingIndex(null);
    setEditedRow({});
  };
  // إلغاء التعديل
  const handleCancel = () => {
    setEditingIndex(null);
    setEditedRow({});
  };

  useEffect(() => {
    setTableData(data);
  }, [data]);

  return (
    <>
      <table className="min-w-[900px] table-auto w-full text-center border-[1px] border-[rgba(250,177,71,1)]">
        <thead>
          <tr className="bg-[rgba(250,177,71,1)] text-white">
            {headers.map((header, i) => (
              <th key={i} className="bg-[rgba(250,177,71,1)] text-white py-6">
                {header.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentRows.map((row, rowIndex) => {
            const globalIndex = indexOfFirstRow + rowIndex;

            return (
              <tr
                key={rowIndex}
                className="border-b-[1px] border-[rgba(250,177,71,1)] bg-white"
              >
                {headers.map((header, colIndex) => (
                  <td key={colIndex} className="py-5 text-center">
                    {/*  عمود الإجراءات */}
                    {header.key === "actions" ? (
                      <div className="flex justify-center gap-2">
                        {editingIndex === globalIndex ? (
                          <>
                            <button
                              onClick={handleSave}
                              className="px-2 py-1 mx-1 bg-green-500 text-white rounded cursor-pointer"
                            >
                              حفظ
                            </button>
                            <button
                              onClick={handleCancel}
                              className="px-2 py-1 mx-1 bg-gray-400 text-white rounded cursor-pointer"
                            >
                              إلغاء
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              className="w-5 cursor-pointer"
                              onClick={() => handleEdit(row, rowIndex)}
                            >
                              <img src={pen} alt="edit" />
                            </button>
                            <button
                              onClick={() => handleDelete(rowIndex)}
                              className="w-5 cursor-pointer"
                            >
                              <img src={deletIcon} alt="delete" />
                            </button>
                          </>
                        )}
                      </div>
                    ) : editingIndex === globalIndex ? (
                      //  حقل إدخال لتعديل أي عمود
                      <input
                        type="text"
                        value={editedRow[header.key] || ""}
                        onChange={(e) =>
                          setEditedRow({
                            ...editedRow,
                            [header.key]: e.target.value,
                          })
                        }
                        className="border p-1 w-full"
                      />
                    ) : header.render ? (
                      header.render(row[header.key], row)
                    ) : (
                      row[header.key]
                    )}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* pagenation */}
      <div className="flex justify-center gap-2 mt-4">
        <button onClick={handleDecrement}>الصفحة السابقة</button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-5 py-2 rounded-3xl border cursor-pointer ${
              currentPage === i + 1
                ? "bg-primary text-white"
                : "bg-white text-primary"
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button onClick={handleIncrement}>الصفحة التالية</button>
      </div>
    </>
  );
}
