import { CiMail } from "react-icons/ci"
import { InlineWidget } from "react-calendly";

export default function Calendar(props) {
  return (
    <div className="calendar-container">
      <div className="calendar-grid-container">

        <div style={{ justifyContent: "center", alignItems: "center", borderTop: "1px solid black", display: "flex", borderBottom: "1px solid black" }}>
          <img src={require("./../static/icon.png")} style={{ maxWidth: "80%" }} alt="logo"></img>
        </div>

        <div className="widget-container">
          <InlineWidget url="https://calendly.com/vir--leapmedia/30min?hide_gdpr_banner=1" 
            styles={{
              height:"100%", 
              width: "100%"
            }}
          />
        </div>

        <div style={{ gridRow: "1 / span2", gridColumn: "2 / span 1", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div style={{ height: "100%", width: "1px", borderRight: "1px solid" }}> </div>
        </div>

        <div style={{ borderBottom: "1px solid", display: "flex", flexDirection: "column", alignItems: "center", padding: "30px 0", position: "relative" }}>

          <div style={{ display: "flex", alignItems: "center", fontSize: "1rem", columnGap: "20px", padding: "0 30px" }}>
            <img src={require("./../static/address.png")} alt="address-img"></img>
            <span>
              ADDRESS: BAY SQUARE, BUILDING 4, 2ND FLOOR - DUBAI - UNITED ARAB EMIRATES
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", columnGap: "10px", fontSize: "0.9rem", marginTop: "20px" }}>
            <CiMail style={{ fontSize: "1.3rem" }} />
            <a href="mailto:vir@leapmedia.xyz" style={{ color: "black", fontWeight: "400", textDecoration: "underline" }}>vir@leapmedia.xyz</a>
          </div>


          <div className="qr-container" style={{ display: "flex", justifyContent: "space-between", width: "100%", padding: "0 30px", position: "absolute", bottom: "0", marginBottom: "30px" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", rowGap: "5px" }}>
              <span style={{ fontSize: "0.6rem", width: "60%" }}>CONTACT US ON TELEGRAM</span>
              <img src={require('./../static/telegram-qr.png')} alt="telegram-qr" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", rowGap: "5px" }}>
              <span style={{ fontSize: "0.6rem", width: "60%" }}>CONTACT US ON TELEGRAM</span>
              <img src={require('./../static/telegram-qr.png')} alt="telegram-qr" />
            </div>

          </div>
        </div>
      </div>

      <h2> LEAP MEDIA </h2>
    </div>

  )
}