import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './header.scss';
import { useEffect, useState } from "react";
export default function Header() {
  const [open,setOpen] = useState(false)
  useEffect(() => {
    const header = document.querySelector(".nav");
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > sticky) {
        header.classList.add("fixed");
      } else {
        header.classList.remove("fixed");
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);
  const toggleDrawer = () => {
    setOpen(!open)
  }
  return (
    <div className="nav">
      <div className="nav__wrap container dflex">
        <div className="nav__logo"><img src="http://cheaphostings.org/html/item-lalvai/lalvai/assets/img/logo.png" alt="test"/></div>
        <div className="nav__logos"><img src="http://cheaphostings.org/html/item-lalvai/lalvai/assets/img/logo-two.png" alt="test"  className="logo-hidden" /></div>
        <ul className={`nav__menu dflex ${open && "open"}`}>
          <li className="nav__item"><a className="link" href="#">Home</a></li>
          <li className="nav__item"><a className="link" href="#client">About</a></li>
          <li className="nav__item"><a className="link" href="#work">Portfolio</a></li>
          <li className="nav__item"><a className="link" href="#meet">Team</a></li>
          <li className="nav__item"><a className="link" href="#pricing">Pricing</a></li>
          <li className="nav__item"><a className="link" href="#blog">Blog</a></li>
          <li className="nav__item"><a className="link" href="#contact">Contact</a></li>
        </ul>
        <div className="nav__button" onClick={toggleDrawer}><FontAwesomeIcon icon={faBars} /></div>
      </div>
    </div>
  )
}
