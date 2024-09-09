import { Swiper, SwiperSlide } from "swiper/react";
import "./mainLayout.css";
import { HiArrowDownTray } from "react-icons/hi2";
import ServicesSwiper from "./servesSiper";
import codewardImgPath from "../../assets/imgs/mahmoud-whitoutbg1.png";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
export default function MainLayout() {
  return (
    <>
      <div className="circle-contaner">
        <span className="circle-top-left one">اتقى الله</span>
        <span className="circle-top-left two"></span>
        <span className="circle-top-left three"></span>
      </div>

      <section className="warda-container text-white pt-5 overflow-hidden">
        <div className="info container p-5 ">
          <h1 className="text-start mt-5 pt-5">Hello! I'm</h1>
          <h1 className="text-start">
            Mahmoud El<span className="nake-name-style">shony</span>
          </h1>
          <p className="text-white-50">MERN Stack Developer</p>
          <button className="btn border border-1 mt-5 px-5 py-3 rounded-5 text-white">
            Get Resume <HiArrowDownTray className="fs-5 m-1" />
          </button>
        </div>
        <div className="image-and-sochial">
          <div className="circle-contaner-sochial">
            <span className="circle-top-left one"></span>
            <span className="circle-top-left two">
              {/* <FaFacebook className="icon 25icon1"></FaFacebook> */}
              <FaFacebook className="icon icon1"></FaFacebook>
              <FaLinkedin  className="icon icon2" 
                style={{
                  top: '100px',
                  right: '-305px',
                }}/>
              <FaGithub  className="icon icon3" 
                style={{
                  top: '243px',
                  right: '-260px',
                }}
              />
            </span>

            <span className="circle-top-left three"></span>
          </div>
          <img
            src={codewardImgPath}
            className="mahmoud-img img-fluid"
            alt="Mahmoud Elshony"
          />
        </div>
      </section>
      <div className="circle-contaner" style={{ top: 0, position: "relative" }}>
        <span className="circle-top-left one">اتقى الله</span>
        <span className="circle-top-left two"></span>
        <span className="circle-top-left three"></span>
      </div>
      <section className="section-sercies d-flex  text-white pt-5 position-relative">
        <div className="col container pt-5 ">
          <h5 className="f">My Services</h5>
          <h2 className="text-start ">Service Provide For My Clients</h2>
          <div className=" mt-5">
            <ServicesSwiper></ServicesSwiper>
          </div>
        </div>
      </section>

    </>
  );
}
