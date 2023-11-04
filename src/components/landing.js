
import video from "./../static/vid.mp4"
import Navbar from "./navbar"
// import { Player } from "video-react"

export default function Landing(props) {
  return (
    <div className="landing">
      <video autoPlay muted loop>
        <source src={video} style={{height: "100%"}}></source>
      </video>

      

      <h1> Leap Media </h1>
      <Navbar />
      



    </div>
  )
}
