import pen from "../../images/pen.png";
import deletIcon from "../../images/deletIcon.png";

export default function Table({ headers, data }) {
  return (
    <table className="min-w-[900px] table-auto w-full text-center border-l-[1px] border-r-[1px] border-[rgba(250,177,71,1)]">
      <thead>
        <tr className="bg-[rgba(250,177,71,1)] text-white">
          {headers.map((header, i) => (
            <th key={i} className="bg-[rgba(250,177,71,1)] text-white">
              {header.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
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
                ) : (
                  row[header.key]
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
