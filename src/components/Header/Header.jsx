import React from "react";
import { Logo, Container } from "../index";

function Header() {
  const navItems = [
    {
      name: "Home",
    },
    {
      name: "About Us",
    },
    {
      name: "Services",
    },
    {
      name: "Work",
    },
    {
      name: "Blog",
    },
  ];

  return (
    <div>
      <Container>
        <div className="flex items-center justify-between">
          <Logo />
          <ul className="md:flex gap-6 text-xs text-white">
            {navItems.map((item) => (
              <li key={item.name}>
                <p className="font-extralight hover:font-normal">{item.name}</p>
              </li>
            ))}
          </ul>
          <div></div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
