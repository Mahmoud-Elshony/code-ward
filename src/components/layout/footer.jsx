import {
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaPhone,
  FaPhoneAlt,
  FaRegEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import Logo from "/src/assets/imgs/warda1443.webp";

export default function Footer() {
  return (
    <div>
      <p style={{ visibility: "hidden" }}>
        لا حول ولا قوة الا بالله السميع العليم
      </p>
      <div className="container" style={{ paddingBottom: 50 }}>
        <h5 className="ps-3 text-white-50">
          <span className="pe-3">||</span>Get in Touch
        </h5>
        <div className="row m-auto text-center justify-content-between mb-n5">
          <div className="phoneNumber col-auto p-3">
            <a
              href="tel:01002026737"
              style={{ textDecoration: "none", color: "#fff", fontSize: 22 }}
            >
              <FaPhoneAlt
                size={60}
                style={{
                  //    backgroundColor:'red',
                  padding: "15px",
                  borderRadius: "20px",
                  color: "white",
                  border: ".143px #fff3 solid",
                  marginRight: "20px",
                }}
              />
              <span style={{ color: "#dfa450" }}>+2</span>
              <span>01002026737</span>
            </a>
          </div>
          <div className="phoneNumber col-auto p-3">
            <a
              href="mailto:codewarda@gmail.com"
              style={{ textDecoration: "none", color: "#fff", fontSize: 22 }}
            >
              <FaRegEnvelope
                size={60}
                style={{
                  //    backgroundColor:'red',
                  padding: "15px",
                  borderRadius: "20px",
                  color: "white",
                  border: ".143px #fff3 solid",
                  marginRight: "20px",
                }}
              />
              <span style={{ color: "#dfa450" }}>code</span>
              <span>warda@gmail.com</span>
            </a>
          </div>
          <div className="phoneNumber col-auto p-3">
            <a
              href="https://facebook.com/mido143"
              style={{
                textDecoration: "none",
                color: "#fff",
                fontSize: 22,
              }}
              target="_blank"
            >
              <FaFacebook
                size={60}
                style={{
                  //    backgroundColor:'red',
                  padding: "15px",
                  borderRadius: "20px",
                  color: "white",
                  border: ".143px #fff3 solid",
                  marginRight: "20px",
                }}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/mahmoud-shony/"
              style={{
                textDecoration: "none",
                color: "#fff",
                fontSize: 22,
              }}
              target="_blank"
            >
              <FaLinkedin
                size={60}
                style={{
                  //    backgroundColor:'red',
                  padding: "15px",
                  borderRadius: "20px",
                  color: "white",
                  border: ".143px #fff3 solid",
                  marginRight: "20px",
                }}
              />
            </a>
            <a
              href="https://wa.link/5tu9jd"
              style={{
                textDecoration: "none",
                color: "#fff",
                fontSize: 22,
              }}
              target="_blank"
            >
              <FaWhatsapp
                size={60}
                style={{
                  //    backgroundColor:'red',
                  padding: "15px",
                  borderRadius: "20px",
                  color: "white",
                  border: ".143px #fff3 solid",
                  marginRight: "20px",
                }}
              />
            </a>
          </div>
        </div>
      </div>
      {/* <hr style={{ border: "2px #fff solid" }} /> */}
      <hr style={{ padding: 0, border: "2px #fff solid" }} />
      <div className="container p-4 text-center flex-column-reverse flex-md-row d-flex justify-content-between align-items-center">
        <p>
          
          <span className="text-white-50">
            &copy; 2023 <span style={{color:"#d6d3d3"}}> 🌺code</span><span style={{color:"#dfa450"}}>ward</span>. All rights reserved.
          </span>
        </p>
        <div className="pb-3">
          <img className="rounded-5" src={Logo} width="171" />
        </div>
      </div>
    </div>
  );
}
