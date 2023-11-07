import { useEffect, useState } from "react"
var moment = require('moment-timezone');

const timeZones = [
  {location: "NYX", code: "America/New_York"},
  {location: "DXB", code: "Asia/Dubai"},
  {location: "LDN", code: "Europe/London"},
  {location: "TYO", code: "Asia/Tokyo"}
]


export default function FooterTape(props){
  const [time, setTime] = useState(new Date())
  useEffect(()=>{
    const tick = setInterval(()=>{
      setTime(new Date())
      // console.log(time.toLocaleTimeString())
    }, 1000)

    return () => clearInterval(tick)
  }, [])

  return(
    <div className="footer-tape-wrapper">

        <div className="footer-tape logos-slide-left">
          <span style={{fontWeight: 600}}>GOOD WORK FOR GOOD PEOPLE</span>
          <img src={require("./../static/X with stripes.png")} alt="x" />
          INDIA
          <img src={require("./../static/rightArrow.png")} alt="right-arrow" />
          <div style={{width: "24rem", overflow:"hidden"}}>
            {time.toLocaleTimeString()}
          </div>

          {timeZones.map((item)=>{
            return(
              <Clock location={item.location} time={moment.tz(time.toLocaleString(), item.code).format().substring(11, 16)} />
            )
          })}
        </div>

        <div className="footer-tape logos-slide-left">
          <span style={{fontWeight: 600}}>GOOD WORK FOR GOOD PEOPLE</span>
          <img src={require("./../static/X with stripes.png")} alt="x" />
          INDIA
          <img src={require("./../static/rightArrow.png")} alt="right-arrow" />
          <div style={{width: "24rem", overflow:"hidden"}}>
            {time.toLocaleTimeString()}
          </div>

          {timeZones.map((item)=>{
            return(
              <Clock location={item.location} time={moment.tz(time.toLocaleString(), item.code).format().substring(11, 16)} />
            )
          })}
        </div>

       
      </div>
  )
}


function Clock(props){
  return(
    <div className="world-clock-wrapper">
      {props.location}
      <div>
        {props.time}
      </div>

    </div>
  )
}