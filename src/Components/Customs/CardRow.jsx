export default function CardRow({ title, value, headerKey }) {
  return (
    <div className="flex flex-row-reverse justify-between py-2 border-b last:border-b-0 border-[rgba(250,177,71,1)]">
      <span className="font-bold text-gray-700">{title}</span>

      {headerKey === "link" || headerKey === "linkText" ? (
        <a
          href={value}
          target="_blank"
          className="text-blue-600 hover:underline cursor-pointer"
        >
          {value}
        </a>
      ) : (
        <span>{value}</span>
      )}
    </div>
  );
}
