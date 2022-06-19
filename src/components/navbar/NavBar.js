import React from "react";

const NAV_DATA = [
  {
    title: "Dashboard",
    link: "/",
    // Icon: HomeIcon,
  },
  {
    title: "Invoices",
    link: "invoices",
    // Icon: InvoiceIcon,
  },
  {
    title: "Clients",
    link: "clients",
    // Icon: ClientPlusIcon,
  },
  {
    title: "Products",
    link: "products",
    // Icon: ProductIcon,
  },
];
const NavBar = () => {
  return (
    <nav>
      <ul className="mt-4">
        {NAV_DATA.map(({ title, link }) => {
          return <li key={title}>{title}</li>;
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
