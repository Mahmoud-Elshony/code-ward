import React, { useEffect, useRef } from "react";
// import './header.css'
import Logo from "/src/assets/imgs/warda1443.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import "./header.css";
import SwitchButoon from "./darkLightButton";
export default function HeaderCom(){
  const headerElemnt = useRef();
  const handleScroll = () => {
    if (window.scrollY > 100) {
      headerElemnt.current.classList.add("navbar-dark");
      headerElemnt.current.classList.remove("navbar-light");
    } else {
      headerElemnt.current.classList.add("navbar-light");
      headerElemnt.current.classList.remove("navbar-dark");
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
    return (
      <>
        <header ref={headerElemnt} className="navbar navbar-expand-lg sticky-top top px-2 z-5">
          <div className="container-fluid m-3 text-center text-sm-start">
            <a className="navbar-brand col" href="#">
              <img className="rounded-5" src={Logo} width="171" />
            </a>

            <div
              className="collapse navbar-collapse col-auto"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto  mb-lg-0 gap-5 m-3 p-2">
                <li className="nav-item">
                  <a className="nav-link p-0 text-secondary fs-5">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link p-0 text-secondary fs-5">Service</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link p-0 text-secondary fs-5">Contact</a>
                </li>
                {/* switch litgh dark mode */}
                {/* <SwitchButoon></SwitchButoon> */}
              </ul>
              <div className="d-flex" role="search"></div>
            </div>
            <div className="hire-me-btn d-none d-sm-block btn text-white border-1 border-secondary rounded-5 px-5 py-3">
              Hire me <MdKeyboardDoubleArrowRight />
            </div>
          </div>
        </header>
      </>
    );
  
}
