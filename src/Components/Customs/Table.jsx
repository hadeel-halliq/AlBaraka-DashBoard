import pen from "../../images/pen.png";
import deletIcon from "../../images/deletIcon.png";
import { useState } from "react";

export default function Table({ headers, data }) {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(data.length / rowsPerPage);
  const handleDecrement = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };
  const handleIncrement = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <>
      <table className="min-w-[900px] table-auto w-full text-center border-l-[1px] border-r-[1px] border-[rgba(250,177,71,1)]">
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
          {currentRows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="border-b-[1px] border-[rgba(250,177,71,1)] bg-white"
            >
              {headers.map((header, colIndex) => (
                <td key={colIndex} className="py-5 text-center">
                  {header.key === "actions" ? (
                    <div className="flex justify-center gap-2">
                      <button className="w-5">
                        <img src={pen} alt="edit" />
                      </button>
                      <button className="w-5 text-[rgba(73,65,58,1)]">
                        <img src={deletIcon} alt="delete" />
                      </button>
                    </div>
                  ) : header.key === "link" || header.key === "linkText" ? (
                    <a
                      href={row.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {row.linkText || row.link}
                    </a>
                  ) : (
                    row[header.key]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center gap-2 mt-4">
        <button onClick={handleDecrement}>الصفحة السابقة</button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-5 py-2 rounded-3xl border cursor-pointer ${
              currentPage === i + 1 ? "bg-primary text-white" : "bg-white text-primary"
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
