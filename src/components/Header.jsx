import { useState, useEffect } from "react";
import NavLink from "./NavLink";
export default function Header() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scroll, setScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      const aboutSection = document.getElementById("about");
      const portfolioSection = document.getElementById("portfolio");
      const servicesSection = document.getElementById("services");
      const header = document.getElementById("header");
      const position = scrollY + 250;

      if (scrollY < heroSection.offsetTop + header.offsetHeight) {
        setActiveSection("#hero");
      } else if (
        position >= aboutSection.offsetTop &&
        position < aboutSection.offsetTop + header.offsetHeight
      ) {
        setActiveSection("#about");
      } else if (
        position >= portfolioSection.offsetTop &&
        position < portfolioSection.offsetTop + header.offsetHeight
      ) {
        setActiveSection("#portfolio");
      } else if (
        position >= servicesSection.offsetTop &&
        position < servicesSection.offsetTop + header.offsetHeight
      ) {
        setActiveSection("#services");
      }
      // else if (position >= contactSection.offsetTop) {
      //   setActiveSection("contact");
      // }
      setScroll(scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const onToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header id="header" className={`fixed-top ${scroll && "header-scrolled"}`}>
      <div className="container d-flex align-items-center justify-content-between">
        <h1 className="logo ">
          <a href="/" className="text-decoration-none">
            ENDOSKOPI
          </a>
        </h1>

        <nav id="navbar" className={`navbar ${isOpen ? "navbar-mobile" : ""}`}>
          <ul>
            <NavLink
              href="#hero"
              text={"Halaman Utama"}
              activeSection={activeSection}
            />
            <NavLink
              href="#about"
              text={"Tentang"}
              activeSection={activeSection}
            />
            <NavLink
              href="#portfolio"
              text={"Bagian - Bagian"}
              activeSection={activeSection}
            />
            <NavLink
              href="#services"
              text={"Prosedur"}
              activeSection={activeSection}
            />
          </ul>
          <i
            className={`bi ${isOpen ? "bi-x" : "bi-list"} mobile-nav-toggle`}
            onClick={onToggle}
          ></i>
        </nav>
      </div>
    </header>
  );
}
