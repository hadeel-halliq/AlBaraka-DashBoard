export default function CardRow({ title, value }) {
  return (
    <div className="flex flex-row-reverse justify-between py-2 border-b last:border-b-0 border-[rgba(250,177,71,1)]">
      <span className="font-bold text-gray-700">{title}</span>
      <span>{value}</span>
    </div>
  );
}
