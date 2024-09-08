import React from "react";
// import './header.css'
import Logo from "/src/assets/imgs/warda1443.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import './header.css'
class HeaderCom extends React.Component {
  render() {
    return (
      <>
      <header  className="navbar navbar-expand-lg sticky-top  top mx-5 z-5" >
        <div className="container-fluid m-3 text-center text-sm-start">
          <a className="navbar-brand col" href="#">
            <img className="rounded-5" src={Logo} width="171" />
          </a>

          <div className="collapse navbar-collapse col-auto" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto  mb-lg-0 gap-5 m-3 p-2">
              <li className="nav-item">
                <a className="nav-link p-0 text-secondary fs-5">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link p-0 text-secondary fs-5">Service</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link p-0 text-secondary fs-5">Blog</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link p-0 text-secondary fs-5">Pages</a>
              </li>
              <li className="nav-item">
                <a className="nav-link p-0 text-secondary fs-5">Contact</a>
              </li>
            </ul>
            <div className="d-flex" role="search"></div>
          </div>
          <div className="hire-me-btn d-none d-sm-block btn text-white border-1 border-secondary rounded-5 px-5 py-3">Hire me <MdKeyboardDoubleArrowRight /></div>
        </div>
      </header>

      
      </>
    );
  }
}

export default HeaderCom;
