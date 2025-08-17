import { Link, useLocation } from "react-router-dom";

export default function DashboardMenu({ links }) {
  const location = useLocation();

  const modifiedLinks = links.map((link) => {
    if (
      location.pathname === "/dashboard/content" &&
      link.name === "إدارة المحتوى"
    ) {
      return { ...link, name: "إدارة المنتجات", to: "/dashboard/products" };
    }
    if (
      location.pathname === "/dashboard/products" &&
      link.name === "إدارة المنتجات"
    ) {
      return { ...link, name: "إدارة المحتوى", to: "/dashboard/content" };
    }
    return link;
  });
  return (
    <nav className="space-y-7">
      {modifiedLinks.map((link, index) => (
        <div key={index} className="flex justify-between items-center">
          {link.counter ? (
            <img src={link.counter} className="w-[24px]" />
          ) : (
            <div className="w-[24px]" />
          )}
          <div className="flex items-center gap-3">
            <Link to={link.to} className="font-bold text-lg" >
              {link.name}
            </Link>
            {link.icon && <img src={link.icon} className="w-[24px]" />}
          </div>
        </div>
      ))}
    </nav>
  );
}
