import { FaRegUser } from "react-icons/fa";
import { GoCalendar, GoGear } from "react-icons/go";

export default function CounterSection() {
  return (
    <>
      <div
        className="d-flex justify-content-evenly text-white"
        style={{
          backgroundColor: "#282a37",
        //   height: "250px",
          paddingTop: "100px",
          paddingBottom: "100px",
          borderRadius: "15px",
        }}
      >
        <div className="d-flex">
          <FaRegUser
            size={70}
            style={{
              //    backgroundColor:'red',
              padding: "20px",
              borderRadius: "12px",
              color: "white",
              border: ".143px #fff3 solid",
            }}
          />
          <div className="ps-5">
            <h2>30+</h2>
            <h6 style={{ color: "#fff5", fontWeight: "" }}>Happy Clients</h6>
          </div>
        </div>
        <div className="d-flex">
          <GoGear
            size={70}
            style={{
              //    backgroundColor:'red',
              padding: "20px",
              borderRadius: "12px",
              color: "white",
              border: ".143px #fff3 solid",
            }}
          />
          <div className="ps-5">
            <h2>143</h2>
            <h6 style={{ color: "#fff5", fontWeight: "" }}>Project Complete</h6>
          </div>
        </div>
        <div className="d-flex">
          <GoCalendar
            size={70}
            style={{
              //    backgroundColor:'red',
              padding: "20px",
              borderRadius: "12px",
              color: "white",
              border: ".143px #fff3 solid",
            }}
          />
          <div className="ps-5">
            <h2>2<span style={{color:"#dfa450"}}>+</span></h2>
            <h6 style={{ color: "#fff5", fontWeight: "" }}>
              Years of Experience
            </h6>
          </div>
        </div>
      </div>
    </>
  );
}
