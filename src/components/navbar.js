import icon from "./../static/icon.png"
import { BiLogoTelegram } from "react-icons/bi"
import { FiMail } from "react-icons/fi"

export default function Navbar(props) {
  return (
    <div className="navbar">
      <img src={icon} style={{marginRight: "8vw"}} alt="icon"></img>

      <div className="link-container" style={{display: "flex", columnGap: "1.5vw", alignSelf: "center"}}>
        <a href="/">PARTNERS</a>
        <a href="/">SERVICES</a>
        <a href="/">CONTACTS</a>
      </div>
      
      <div className="social-med-container">
        <button> <a href="#"> <BiLogoTelegram  style={{fontSize: "1.3rem"}}/> </a> </button>
        <button> <a href="#"> <FiMail style={{fontSize: "1.3rem"}}/> </a> </button>
      </div>

      




    </div>
  )
}