import React from "react";
import { Container, Logo } from "../index";

function Footer() {
  const footerLinks = [
    {
      label: "Useful Links",
      links: [
        { label: "Community", href: "/" },
        { label: "Partner", href: "/" },
        { label: "Content", href: "/" },
        { label: "Help Center", href: "/" },
      ],
    },
    {
      label: "Our Partner",
      links: [
        { label: "How it Works", href: "/" },
        { label: "Partners", href: "/" },
        { label: "Become a Partner", href: "/" },
        { label: "Submit a Review", href: "/" },
      ],
    },
    {
      label: "Create",
      links: [
        { label: "Suggestions", href: "/" },
        { label: "Explore", href: "/" },
        { label: "Blog", href: "/" },
        { label: "Newsletter", href: "/" },
      ],
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-[#1d2b36] pt-14 lg:pt-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 mb-4">
          <div className="flex md:block flex-col items-center">
            <Logo />
            <p className="text-white text-sm mb-1 mt-8">
              {"(+1) 234-567-8910"}
            </p>
            <p className="text-[#758595] text-sm">hello@YourCompany.com</p>
          </div>
          <div className="col-span-2 mt-8 md:mt-0">
            <ul className="flex flex-col sm:flex-row sm:justify-between">
              {footerLinks.map((group) => (
                <li
                  key={group.label}
                  className="mb-4 text-center sm:text-start"
                >
                  <h4 className="font-medium text-white">{group.label}</h4>
                  <ul className="mt-2">
                    {group.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-sm text-[#758595] hover:underline underline-offset-4"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="text-[#758595] mb-8 flex flex-col sm:flex-row items-center justify-between">
          <div className="text-2xl flex gap-1">
            <ion-icon name="logo-facebook"></ion-icon>
            <ion-icon name="logo-instagram"></ion-icon>
            <ion-icon name="logo-twitter"></ion-icon>
            <ion-icon name="logo-github"></ion-icon>
          </div>
          <div
            className="flex text-white cursor-pointer mt-8 sm:mt-0"
            onClick={scrollToTop}
          >
            <div className=" text-xl mt-[0.1rem] mr-1">
              <ion-icon name="arrow-up-circle-sharp"></ion-icon>
            </div>
            <p>Back to top</p>
          </div>
        </div>
        <div className="py-4 text-[#758595] text-sm font-light text-center border-t border-[#758595]">
          © 2023{" "}
          <span className="hover:underline underline-offset-2 cursor-pointer">
            YourCompany™
          </span>
          . All Rights Reserved.
        </div>
      </Container>
    </div>
  );
}

export default Footer;
