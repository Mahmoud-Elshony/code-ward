import { useEffect, useRef, useState } from "react";

export default function SingleSkil({ tag, value = 0 }) {
    const [wardaValue,setWardaValue] = useState(0);
    const skillProgress = useRef();
  function handelScroll() {

    console.log(skillProgress.current.getBoundingClientRect().top <window.innerHeight);
    if(skillProgress.current.getBoundingClientRect().top <window.innerHeight){
       setWardaValue(value)
    }
    else{
       setWardaValue(0)
    }
    console.log(skillProgress.current.getBoundingClientRect());
  }
  useEffect(
    () => {
      window.addEventListener("scroll", handelScroll);
    },
    []
  );
  return (
    <div className="skill-progress-single-item" ref={skillProgress}>
      <span className="tag text-white-50">{tag}</span>
      <div className="skill-box">
        <div
          className="progress-line"
          data-width={wardaValue}
          style={{ width: `${wardaValue}%` }}
        >
          <span className="skill-percentage">{wardaValue==114?143:wardaValue}<span style={{
            color:wardaValue==114?"#dfa450":""
          }}>%</span></span>
        </div>
      </div>
    </div>
  );
}
