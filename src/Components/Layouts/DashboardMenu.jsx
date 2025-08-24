import { Link } from "react-router-dom";

export default function DashboardMenu({ links }) {
  return (
    <nav className="space-y-7">
      {links.map((link, index) => (
        <div key={index} className="flex justify-between items-center">
          {link.counter ? (
            <img src={link.counter} className="w-[24px]" />
          ) : (
            <div className="w-[24px]" />
          )}
          <div className="flex items-center gap-3">
            <Link to={link.to} className="font-bold text-lg">
              {link.name}
            </Link>
            {link.isComponent ? (
              <link.icon className="w-[24px] h-[24px]" />
            ) : (
              <img src={link.icon} className="w-[24px]" />
            )}
          </div>
        </div>
      ))}
    </nav>
  );
}
