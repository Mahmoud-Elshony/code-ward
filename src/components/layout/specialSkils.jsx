import { ProgressBar } from "react-bootstrap";
import "./specialSkils.css";
import SingleSkil from "./singleSkil";
import { HiArrowDownTray } from "react-icons/hi2";
export default function SpecialSkilsComponent() {
  return (
    <div className="container d-block d-md-flex">
      <div className="col-12 col-md-6  py-5 px-md-5 px-xxl-0">
        <h5 style={{ color: "#fff5", paddingTop: 50 }}>
          <span style={{ paddingRight: 15 }}>||</span>
          <span>Special Skills</span>
        </h5>
        <h2 style={{ color: "white" }} className="fs-1">
          My Special Skill Field Here.
        </h2>
        <a
          href="https://drive.google.com/file/d/1IBIJnG2tpE9le2lHWeBaw0WoonAfBZ7N/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn border border-1 mt-5 px-5 py-3 rounded-5 text-white">
            Get Resume <HiArrowDownTray className="fs-5 m-1" />
          </button>
        </a>
      </div>
      <div className="col-12 col-md-6 py-5 px-md-5 px-xxl-0">
        <SingleSkil tag="Communication" value="80"></SingleSkil>
        <SingleSkil tag="Teamwork" value="70"></SingleSkil>
        <SingleSkil tag="Think out of Box" value="114"></SingleSkil>
        <SingleSkil tag="Flexibility" value="85"></SingleSkil>
      </div>
    </div>
  );
}
