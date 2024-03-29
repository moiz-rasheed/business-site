import React, { useState, useEffect } from "react";
import { Logo, Container, Button } from "../index";
import { Link } from "react-scroll";

function Header() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  //Nav items data starts
  const navItems = [
    {
      name: "Home",
      target: "hero",
      offset: 0,
    },
    {
      name: "About Us",
      target: "about",
      offset: -50,
    },
    {
      name: "Services",
      target: "services",
      offset: -50,
    },
    {
      name: "Work",
      target: "work",
      offset: -50,
    },
    {
      name: "Innovation",
      target: "innovation",
      offset: -50,
    },
  ];
  //Nav items data ends

  //Function to handle header background becomes white when start scrolling
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  //useEffect for handleScroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full top-0 right-0 z-[1000] bg-transparent ${
        isScrolled ? "bg-white drop-shadow duration-200" : ""
      }`}
    >
      <Container>
        <div className="flex items-center justify-between py-2">
          {/* Logo starts */}
          <Logo textColor={`${isScrolled ? "text-black" : "text-white"}`} />
          {/* Logo ends */}

          {/* Nav items start */}
          <ul
            className={`md:flex gap-6 text-sm md:bg-transparent md:w-auto md:px-0 absolute md:static drop-shadow-lg md:drop-shadow-none top-[100%] w-44 bg-white px-1 rounded-sm duration-500 ${
              open ? "right-4" : "right-[-100%]"
            }`}
          >
            {navItems.map((item) => (
              <li
                key={item.name}
                className="md:bg-transparent md:hover:bg-transparent hover:bg-primary rounded-sm md:my-0 my-1 md:p-0 p-2 md:text-white text-black hover:text-white"
              >
                <Link
                  to={item.target}
                  spy={true}
                  smooth={true}
                  offset={item.offset}
                  duration={500}
                  onClick={() => setOpen(!open)}
                  className={`md:font-extralight font-light md:hover:underline underline-offset-4 block cursor-pointer ${
                    isScrolled ? "md:text-black md:font-normal" : ""
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          {/* Nav items end */}

          <div className="flex items-end">
            <Button /> {/* Get started button */}
            {/* Button to toggle menu on mobile starts */}
            <div
              onClick={() => setOpen(!open)}
              className={`text-3xl  ml-2 cursor-pointer z-[10001] md:hidden ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              <ion-icon name={open ? "close-sharp" : "menu-sharp"}></ion-icon>
            </div>
            {/* Button to toggle menu on mobile ends */}
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
