import React from "react";
import { Container, Logo } from "../index";

function Footer() {
  //Footer links data starts
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
  //Footer links data ends

  //Function to go to the top starts
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  //Function to go to the top ends

  return (
    <div className="bg-[#1d2b36] pt-14 lg:pt-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 mb-4">
          {/* Logo and contacts section starts */}
          <div className="flex md:block flex-col items-center">
            <Logo />
            <p className="text-white text-sm mb-1 mt-8">
              {"(+1) 234-567-8910"}
            </p>
            <p className="text-[#758595] text-sm">hello@YourCompany.com</p>
          </div>
          {/* Logo and contacts section ends */}

          {/* Footer links section starts */}
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
          {/* Footer links section ends */}
        </div>

        <div className="text-[#758595] mb-8 flex flex-col sm:flex-row items-center justify-between">
          {/* Social icons starts */}
          <div className="text-2xl flex gap-1">
            <ion-icon name="logo-facebook"></ion-icon>
            <ion-icon name="logo-instagram"></ion-icon>
            <ion-icon name="logo-twitter"></ion-icon>
            <ion-icon name="logo-github"></ion-icon>
          </div>
          {/* Social icons ends */}

          {/* Back to top button starts*/}
          <div
            className="flex text-white cursor-pointer mt-8 sm:mt-0"
            onClick={scrollToTop}
          >
            <div className=" text-xl mt-[0.1rem] mr-1">
              <ion-icon name="arrow-up-circle-sharp"></ion-icon>
            </div>
            <p>Back to top</p>
          </div>
          {/* Back to top button ends*/}
        </div>

        {/* Copyright section starts */}
        <div className="py-4 text-[#758595] text-sm font-light text-center border-t border-[#758595]">
          © 2023{" "}
          <span className="hover:underline underline-offset-2 cursor-pointer">
            YourCompany™
          </span>
          . All Rights Reserved.
        </div>
        {/* Copyright section ends */}
      </Container>
    </div>
  );
}

export default Footer;
