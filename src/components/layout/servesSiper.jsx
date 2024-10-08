import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./swiperStyle.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import { VscLayersActive } from "react-icons/vsc";
import { Card } from "react-bootstrap";

export default function ServicesSwiper() {
  return (
    <>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          //   rotate: 50,
          stretch: 0,
          //   depth: 100,
          modifier: 4,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        className="mySwiper"
        initialSlide={4}
      >
        <SwiperSlide>
          <Card
            className="p-5 overflow-hidden"
            style={{ backgroundColor: "#252734" }}
          >
            <div className="circle-contaner-card">
              <span className="circle-top-left one">اتقى الله</span>
              <span className="circle-top-left two"></span>
              <span className="circle-top-left three"></span>
            </div>
            <div className="img-fluid col-3">
              <img width="58" height="58" src="service-icon-1.webp" />
            </div>
            <h4 className="text-white pt-5">UI/UX Design</h4>
            <ul className="text-white-50 pt-3 list-unstyled">
              <li className="py-1">
                <MdKeyboardDoubleArrowRight />
                <span className="ms-3">Landing Pages</span>
              </li>
              <li className="py-1">
                <MdKeyboardDoubleArrowRight />
                <span className="ms-3">User Flow</span>
              </li>
              <li className="py-1">
                <MdKeyboardDoubleArrowRight />
                <span className="ms-3">Wireframing</span>
              </li>
              <li className="py-1">
                <MdKeyboardDoubleArrowRight />
                <span className="ms-3">Prototyping</span>
              </li>
              <li className="py-1">
                <MdKeyboardDoubleArrowRight />
                <span className="ms-3">Mobile App Design</span>
              </li>
            </ul>
            <div className="circle-contaner-card-bottom">
              <span className="circle-top-left one">اتقى الله</span>
              <span className="circle-top-left two"></span>
              <span className="circle-top-left three"></span>
            </div>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            className="p-5 overflow-hidden"
            style={{ backgroundColor: "#252734" }}
          >
            <div className="circle-contaner-card">
              <span className="circle-top-left one">اتقى الله</span>
              <span className="circle-top-left two"></span>
              <span className="circle-top-left three"></span>
            </div>
            <div className="img-fluid col-3">
              <img width="58" height="58" src="service-icon-2.webp" />
            </div>
            <h4 className="text-white pt-5">BackEnd</h4>
            <ul className="text-white-50 pt-3 list-unstyled">
              <li className="py-1">
                <MdKeyboardDoubleArrowRight />
                <span className="ms-3">JavaScript</span>
              </li>
              <li className="py-1">
                <MdKeyboardDoubleArrowRight />
                <span className="ms-3">NodeJS</span>
              </li>
              <li className="py-1">
                <MdKeyboardDoubleArrowRight />
                <span className="ms-3">MongoDB</span>
              </li>
              <li className="py-1">
                <MdKeyboardDoubleArrowRight />
                <span className="ms-3">Express</span>
              </li>
              <li className="py-1">
                <MdKeyboardDoubleArrowRight />
                <span className="ms-3">Rest :api</span>
              </li>
            </ul>
            <div className="circle-contaner-card-bottom">
              <span className="circle-top-left one">اتقى الله</span>
              <span className="circle-top-left two"></span>
              <span className="circle-top-left three"></span>
            </div>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            className="p-5 overflow-hidden"
            style={{ backgroundColor: "#252734" }}
          >
            <div className="circle-contaner-card">
              <span className="circle-top-left one">اتقى الله</span>
              <span className="circle-top-left two"></span>
              <span className="circle-top-left three"></span>
            </div>
            <div className="img-fluid col-3">
              <img width="58" height="58" src="service-icon-3.webp" />
            </div>
            <h4 className="text-white pt-5">FronEnd</h4>
            <ul className="text-white-50 pt-3 list-unstyled">
              <li className="py-1">
                <MdKeyboardDoubleArrowRight />
                <span className="ms-3">HTML5/Css3</span>
              </li>
              <li className="py-1">
                <MdKeyboardDoubleArrowRight />
                <span className="ms-3">Bootstrap</span>
              </li>
              <li className="py-1">
                <MdKeyboardDoubleArrowRight />
                <span className="ms-3">ReactJS</span>
              </li>
              <li className="py-1">
                <MdKeyboardDoubleArrowRight />
                <span className="ms-3">Animation</span>
              </li>
              <li className="py-1">
                <MdKeyboardDoubleArrowRight />
                <span className="ms-3">Mobile App Design</span>
              </li>
            </ul>
            <div className="circle-contaner-card-bottom">
              <span className="circle-top-left one">اتقى الله</span>
              <span className="circle-top-left two"></span>
              <span className="circle-top-left three"></span>
            </div>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            className="p-5 overflow-hidden"
            style={{ backgroundColor: "#252734" }}
          >
            <div className="circle-contaner-card">
              <span className="circle-top-left one">اتقى الله</span>
              <span className="circle-top-left two"></span>
              <span className="circle-top-left three"></span>
            </div>
            <div className="img-fluid col-3">
              <img width="58" height="58" src="service-icon-1.webp" />
            </div>
            <h4 className="text-white pt-5">UI/UX Design</h4>
            <ul className="text-white-50 pt-3 list-unstyled">
              <li className="py-1">
                <MdKeyboardDoubleArrowRight />
                <span className="ms-3">Landing Pages</span>
              </li>
              <li className="py-1">
                <MdKeyboardDoubleArrowRight />
                <span className="ms-3">User Flow</span>
              </li>
              <li className="py-1">
                <MdKeyboardDoubleArrowRight />
                <span className="ms-3">Wireframing</span>
              </li>
              <li className="py-1">
                <MdKeyboardDoubleArrowRight />
                <span className="ms-3">Prototyping</span>
              </li>
              <li className="py-1">
                <MdKeyboardDoubleArrowRight />
                <span className="ms-3">Mobile App Design</span>
              </li>
            </ul>
            <div className="circle-contaner-card-bottom">
              <span className="circle-top-left one">اتقى الله</span>
              <span className="circle-top-left two"></span>
              <span className="circle-top-left three"></span>
            </div>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            className="p-5 overflow-hidden"
            style={{ backgroundColor: "#252734" }}
          >
            <div className="circle-contaner-card">
              <span className="circle-top-left one">اتقى الله</span>
              <span className="circle-top-left two"></span>
              <span className="circle-top-left three"></span>
            </div>
            <div className="img-fluid col-3">
              <img width="58" height="58" src="service-icon-2.webp" />
            </div>
            <h4 className="text-white pt-5">BackEnd</h4>
            <ul className="text-white-50 pt-3 list-unstyled">
              <li className="py-1">
                <MdKeyboardDoubleArrowRight />
                <span className="ms-3">JavaScript</span>
              </li>
              <li className="py-1">
                <MdKeyboardDoubleArrowRight />
                <span className="ms-3">NodeJS</span>
              </li>
              <li className="py-1">
                <MdKeyboardDoubleArrowRight />
                <span className="ms-3">MongoDB</span>
              </li>
              <li className="py-1">
                <MdKeyboardDoubleArrowRight />
                <span className="ms-3">Express</span>
              </li>
              <li className="py-1">
                <MdKeyboardDoubleArrowRight />
                <span className="ms-3">Rest :api</span>
              </li>
            </ul>
            <div className="circle-contaner-card-bottom">
              <span className="circle-top-left one">اتقى الله</span>
              <span className="circle-top-left two"></span>
              <span className="circle-top-left three"></span>
            </div>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            className="p-5 overflow-hidden"
            style={{ backgroundColor: "#252734" }}
          >
            <div className="circle-contaner-card">
              <span className="circle-top-left one">اتقى الله</span>
              <span className="circle-top-left two"></span>
              <span className="circle-top-left three"></span>
            </div>
            <div className="img-fluid col-3">
              <img width="58" height="58" src="service-icon-3.webp" />
            </div>
            <h4 className="text-white pt-5">FronEnd</h4>
            <ul className="text-white-50 pt-3 list-unstyled">
              <li className="py-1">
                <MdKeyboardDoubleArrowRight />
                <span className="ms-3">HTML5/Css3</span>
              </li>
              <li className="py-1">
                <MdKeyboardDoubleArrowRight />
                <span className="ms-3">Bootstrap</span>
              </li>
              <li className="py-1">
                <MdKeyboardDoubleArrowRight />
                <span className="ms-3">ReactJS</span>
              </li>
              <li className="py-1">
                <MdKeyboardDoubleArrowRight />
                <span className="ms-3">Animation</span>
              </li>
              <li className="py-1">
                <MdKeyboardDoubleArrowRight />
                <span className="ms-3">Mobile App Design</span>
              </li>
            </ul>
            <div className="circle-contaner-card-bottom">
              <span className="circle-top-left one">اتقى الله</span>
              <span className="circle-top-left two"></span>
              <span className="circle-top-left three"></span>
            </div>
          </Card>
        </SwiperSlide>
        <p id="Skils" style={{opacity:0}}></p>
      </Swiper>
    </>
  );
}
