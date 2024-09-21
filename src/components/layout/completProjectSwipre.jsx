import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import codementorImg from "./../../assets/imgs/codementor-sreenshoot.webp";
import ecomFrontImg from "./../../assets/imgs/e-com-front.webp";
const TemplateShowcase = () => {
  const templates = [
    {
      name: "Codementor",
      description: "https://codementor-ward.vercel.app/",
      category: "FrontEnd / React / MUI",
      imageUrl: codementorImg,
    },
    {
      name: "E-Commerce Frontend",
      description:
        "https://alwaleedibrahim.github.io/e-commerce-frontend/pages/home.html",
      category: "FrontEnd / Javacript / HTML / Css",
      imageUrl: ecomFrontImg
    },
  ];

  return (
    <div className="template-showcase">
      <div className="container">
        <div className="row">
          <div className="col-12 col-xl-12 d-block d-md-flex justify-content-between">
            <div className="section-content pos-relative pt-5">
              <span className="text-white-50">||</span>
              <span className="ps-3 section-tag text-white-50">
                {" "}
                Awesome Portfolio
              </span>
              <h2 className="section-title text-white">My Complete Projects</h2>
            </div>
          </div>
        </div>
      </div>
      <Swiper
        navigation = {false}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
        spaceBetween={50}
        // height={"75vh"}
        style={{
          // height: "100%",
          overflow: "hidden",
        }}
        // slidesPerView={2}
        controller={true}
        breakpoints={{
          576: {
            // width: 576,
            slidesPerView: 1,
          },
          768: {
            // width: 768,
            slidesPerView: 2,
          },
          1024: {
            // width: 1024,
            slidesPerView: 2,
          },
          1200: {
            // width: 1200,
            slidesPerView: 2,
          },
        }}

        // width={80}
      >
        {templates.map((template, index) => (
          <SwiperSlide key={index} style={{height:500}}>
            <div
              className="template-card text-white"
              style={{
                // backgroundColor: "red",
                overflow: "hidden",
                height: "300px",
                position: "relative",
              }}
            >
              <img
                src={template.imageUrl}
                style={{
                  opacity: 0.1,
                  transform: "rotate(-45deg) translateY(-16%) translateX(66%)",
                }}
              />
              <div
                style={{
                  backgroundColor: "green",
                  height: "250px",
                  width: "80%",
                  position: "absolute",
                  bottom: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundImage: `url(${template.imageUrl})`,
                  backgroundSize: "cover",
                  // margin:"auto"
                }}
              ></div>
              {/* <div
                // style={{backgroundColor:"blue",backgroundImage:`url(${codementorImg})`, position: "absolute" }}
              ></div> */}
            </div>
            <h2 className="template-name text-white pt-4">{template.name}</h2>
              <p className="template-category text-white">{template.category}</p>
            <p className="template-description text-white">
              <a
                className="live-preview"
                href={template.description}
                style={{ color: "white" }}
              >
                Live Preview
              </a>
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TemplateShowcase;
