import { FaArrowUpLong } from "react-icons/fa6";

export default function InfoCard({
  icon,
  title,
  number,
  description,
  isArrow,
}) {
  return (
    <div className="flex flex-col gap-4 bg-white border-[1px] border-gray-200 border-r-primary border-r-4 px-3 py-4 rounded-2xl shadow-[0_0_4px_0_rgba(0,0,0,0.25)] w-full max-w-[300px] mx-auto sm:max-w-none sm:mx-0">
      <div className="flex justify-center items-center">
        <h2 className="text-[rgba(83,74,64,1)] font-medium text-xl xl:text-2xl">
          {title}
        </h2>
        <img src={icon} alt={title} />
      </div>
      <p
        className="flex justify-center xl:justify-start xl:pr-12 font-bold text-2xl"
        dir="rtl"
      >
        {number}
      </p>
      {isArrow ? (
        <div className="flex justify-center xl:justify-end xl:pr-10 text-[rgba(77,204,49,1)] text-sm">
          <p dir="rtl">{description}</p>
          <FaArrowUpLong />
        </div>
      ) : (
        <div className="flex justify-center xl:justify-end xl:pr-10">
          <p className="text-[rgba(77,204,49,1)] text-sm" dir="rtl">
            {description}
          </p>
        </div>
      )}
    </div>
  );
}