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
import Calendar from "./components/calendar";
import FooterTape from "./components/footerTape";

const logo_lst1 = [logo1, logo2, logo3]
const logo_lst2 = [logo4, logo5, logo6]

function App() {

  return (
    <div className="App">
      <Landing />

      <section style={{ width: "100vw", height: "100vh", padding: "2rem" }}>
        <div className="tagline-container" style={{ width: "100%", height: "100%", background: "#FFEB7F", borderRadius: "60px", textAlign: "center", padding: "0 8vw", display: "flex", alignItems: "center", lineHeight: "130%", flexDirection: "column" }}>
          <div style={{marginTop: "10vh"}}>We’re a Web3 marketing agency that help
          in acquiring users, eyeball, revenue,
          building communities and brand building.</div>
          <img src={require("./static/D-_Leap-Media_Website_Animation_Paper-plane.gif")} alt="...loading" />
        </div>
      </section>

      <p style={{ marginBottom: "10vh" }}>Trusted by 50+ Top Industry Leaders </p>
      <Marquee logo_lst={logo_lst1} direction="left"></Marquee>
      <Marquee logo_lst={logo_lst2} direction="right"></Marquee>

      <p style={{ margin: "20vh 0 10vh 0" }}>Leap Media Services </p>

      <ServiceContainer />

      <Calendar />

      <FooterTape/>




    </div>
  );
}

export default App;
