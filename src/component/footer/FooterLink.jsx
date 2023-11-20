import React from "react";

const FooterLink = ({ impotantLink }) => {
  return (
    <>
      {impotantLink.map((link) => (
        <li
          key={link.name}
          className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]"
        >
          <a href="#">{link.name}</a>
        </li>
      ))}
    </>
  );
};

export default FooterLink;
