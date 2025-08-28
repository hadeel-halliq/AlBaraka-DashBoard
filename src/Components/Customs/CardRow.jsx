export default function CardRow({ title, value, headerKey }) {
  return (
    <div className="flex flex-row-reverse justify-between gap-4 items-center py-2">
      {/* العنوان */}
      <span className="font-semibold text-gray-700">{title}</span>

      {/* القيمة */}
      {headerKey === "link" || headerKey === "linkText" ? (
        <a
          href={value}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary font-medium cursor-pointer no-underline"
        >
          {value}
        </a>
      ) : (
        <span className="text-primary font-bold">{value}</span>
      )}
    </div>
  );
}
