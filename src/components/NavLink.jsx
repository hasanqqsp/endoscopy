/* eslint-disable react/prop-types */
export default function NavLink({ href, activeSection, text }) {
  console.log(activeSection, href, activeSection === href);
  const onNavigate = (ev) => {
    ev.preventDefault();
    const header = document.getElementById("header");
    const el = document.querySelector(href);
    window.scrollTo({
      top: el.offsetTop - header.offsetHeight - 10,
      behavior: "smooth",
    });
  };
  return (
    <li>
      <a
        className={"nav-link scrollto " + (activeSection === href && "active")}
        href={href}
        onClick={onNavigate}
      >
        {text}
      </a>
    </li>
  );
}
