import React, { useState } from "react";
import { Logo, Container, Button } from "../index";

function Header() {
  const [open, setOpen] = useState(false);

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
    <header className="fixed w-full top-0 right-0 z-[1000] bg-transparent">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Logo />
          <ul
            className={`md:flex gap-6 text-sm md:bg-transparent md:w-auto md:static md:px-0 absolute top-[100%] w-44 bg-white px-1 rounded-sm duration-500 ${
              open ? "right-4" : "right-[-100%]"
            }`}
          >
            {navItems.map((item) => (
              <li
                key={item.name}
                className="md:bg-transparent md:hover:bg-transparent hover:bg-[#1291ee] rounded-sm md:my-0 my-1 md:p-0 p-2 md:text-white text-black hover:text-white"
              >
                <p className="md:font-extralight font-light md:hover:underline underline-offset-4 block cursor-pointer">
                  {item.name}
                </p>
              </li>
            ))}
          </ul>
          <div className="flex items-end">
            <Button />
            <div
              onClick={() => setOpen(!open)}
              className="text-3xl text-white ml-2 cursor-pointer z-[10001] md:hidden"
            >
              <ion-icon name={open ? "close-sharp" : "menu-sharp"}></ion-icon>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
