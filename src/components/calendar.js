import { CiMail } from "react-icons/ci"
import { InlineWidget } from "react-calendly";

export default function Calendar(props) {
  return (
    <div className="calendar-container">
      <InlineWidget url="https://calendly.com/vir--leapmedia/30min?hide_gdpr_banner=1"
        styles={{
          minWidth: "320px",
          height: "700px",
          gridColumn: "1/end"
        }}
      />

      <div style={{ display: "flex", columnGap: "15px" }}>
        
        <div className="top-bottom-border flexbox" style={{ padding: "5rem" }}>
          <div style={{ width: "15rem", aspectRatio: "1/1", background: "#fff", borderRadius: "50%", padding: "2px" }} className="flexbox">
            <img src={require("./../static/Leap Media Logo 1.png")} alt="logo" style={{ width: "100%", aspectRatio: "1/1" }} />
          </div>
        </div>

        <div className="flexbox vl-wrapper">
          <div className="vl"></div>
        </div>

        <div className="top-bottom-border flexbox" style={{ flexDirection: "column", padding:"2rem 4rem"}}>

          <div style={{ display: "flex", alignItems: "center", fontSize: "1rem", columnGap: "20px", padding: "0 30px" }}>
            <img src={require("./../static/address.png")} alt="address-img"></img>
            <span>
              ADDRESS: BAY SQUARE, BUILDING 4, 2ND FLOOR - DUBAI - UNITED ARAB EMIRATES
            </span>
          </div>

          <div style={{columnGap: "10px", fontSize: "0.9rem", marginTop: "20px"}} className="flexbox">
            <CiMail style={{ fontSize: "1.3rem" }} />
            <a href="mailto:vir@leapmedia.xyz" style={{ color: "black", fontWeight: "400", textDecoration: "underline" }}>vir@leapmedia.xyz</a>
          </div>

          <div className="qr-container" style={{ display: "flex", justifyContent: "space-between", width: "100%", padding: "0 30px", marginTop: "4rem" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", rowGap: "5px" }}>
              <span style={{ fontSize: "0.6rem", width: "60%" }}>CONTACT US ON TELEGRAM</span>
              <img src={require('./../static/telegram-qr.png')} alt="telegram-qr" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", rowGap: "5px" }}>
              <span style={{ fontSize: "0.6rem", width: "60%" }}>CONTACT US ON TELEGRAM</span>
              <img src={require('./../static/telegram-qr.png')} alt="telegram-qr" />
            </div>

          </div>




          {/* <div className="adress-wrapper flexbox">
            <img src=""
          </div> */}
        </div>

      </div>


      <h2 className="flexbox"> LEAP MEDIA </h2>
    </div>

  )
}