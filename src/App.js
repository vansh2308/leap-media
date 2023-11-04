import Landing from "./components/landing";
import "./app.css"
import logo1 from "./static/Biconomy_logo 2.png"
import logo2 from "./static/Bitget_logo 2.png"
import logo3 from "./static/Huobi_logo 2.png"
import logo4 from "./static/PancakeSwap_logo 2.png"
import logo5 from "./static/Vector.png"
import logo6 from "./static/okx.png"

import Marquee from "./components/infMarquee";
import ServiceContainer from "./components/services";
import { useState, useEffect, useRef } from "react";
import Calendar from "./components/calendar";

const logo_lst1 = [logo1, logo2, logo3]
const logo_lst2 = [logo4, logo5, logo6]

function App() {

  const [stickiness, setStickiness] = useState(false)
  const servicesRef = useRef(null)
  let top = 0;
  let btm = 0;

  

  const handleScroll = () => {
    if(window.scrollY >= top && window.scrollY <= btm){
      setStickiness(true)
    } else {
      setStickiness(false)
    } 
  }

  useEffect(()=>{
    // eslint-disable-next-line
    top = servicesRef.current.getBoundingClientRect().top;
    btm = servicesRef.current.getBoundingClientRect().bottom;

    window.addEventListener("scroll", handleScroll, {passive:true});
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);
  



  return (
    <div className="App">
      <Landing />

      <section style={{ width: "100vw", height: "100vh", padding: "2rem" }}>
        <div className="tagline-container" style={{ width: "100%", height: "100%", background: "#FFEB7F", borderRadius: "60px", textAlign: "center", padding: "0 8vw", display:"flex", alignItems: "center", lineHeight: "130%"}}>
          We’re a Web3 marketing agency that help
          in acquiring users, eyeball, revenue,
          building communities and brand building.
        </div>
      </section>

      <p style={{marginBottom: "10vh"}}>Trusted by 50+ Top Industry Leaders </p>
      <Marquee logo_lst = {logo_lst1} direction = "left"></Marquee>
      <Marquee logo_lst = {logo_lst2} direction = "right"></Marquee>
      
      <p style={{margin: "20vh 0 10vh 0"}}>Leap Media Services </p>

      <ServiceContainer innerRef={servicesRef} stick={stickiness}/>

      <Calendar />

      <div style={{margin:"3rem 0", background:"black", color:"#Fff", fontSize:"9rem", padding:"25px 0", whiteSpace:"nowrap", fontWeight:"500", }}>
        GOOD WORK FOR GOOD PEOPLE
      </div>
    

    </div>
  );
}

export default App;
