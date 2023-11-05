import "./services.css"
import { useEffect, useRef, useState } from "react"


const servicesData = [
  {
    heading: "KOL INFLUENCER MARKETING",
    content: "Our influencer network isn't just about reach; it's about relevance and resonance. We connect you with voices that amplify your message authentically and effectively in different regions.",
    yt: "https://www.youtube.com/embed/i1IKnWDecwA?si=-H4dODq7Uzx-4ryG",
    bg: "#ffc8dd"
  }, 
  {
    heading: "BUILING COMMUNITIES GLOBALLY",
    content: "We don't just build communities; we nurture them. Our strategies are designed to foster lasting relationships and loyalty across diverse global audiences..",
    yt: "https://www.youtube.com/embed/h7MYJghRWt0?si=ZonNlHc7-MKg6WeG",
    bg: "#d0f4de"
  }, 
  {
    heading: "EVENT MARKETING",
    content: "Our event marketing goes beyond traditional boundaries, capturing the essence of your brand and the excitement of your audience.",
    imgs: [require("./../static/global-event-awareness-partner-1.png"), require("./../static/global-event-awareness-partner-2.png")],
    bg: "#ffdab9"
  }, 
  {
    bg: "#e4c1f9",
    heading: "GLOBAL EVENT AWARENESS PARTNER",
    content: "Our event marketing goes beyond traditional boundaries, capturing the essence of your brand and the excitement of your audience.",
    imgs: [require("./../static/global-event-awareness-partner-1.png"), require("./../static/global-event-awareness-partner-2.png")],
  },
  {
    heading: "FOUNDER / BRAND STORYTELLING",
    content: "Leap Media takes podcasting to the next level. We help you tell your story, connecting deeply with your audience and establishing you as a thought leader in the Web3 space. \n At Leap Media, we understand the pulse of Web3. We're not just a service provider; we're a partner in your journey towards innovation and success. Ready to make your mark in the Web3 world? Leap with us!",
    imgs: [require("./../static/storytelling-1.png"), require("./../static/storytelling-2.png"), require("./../static/storytelling-3.png")],
    bg: "#ffa69e"
  }
]






export default function ServiceContainer(props) {
  let windoWidth = 0
  let horLength = 0
  let distFromTop = 0
  let scrollDistance = 0

  const ref = useRef(null)
  const locomotiveWrapper = useRef(null)

  const handleScroll = (e, x) => {

    var scrollTop = window.pageYOffset;
    if(scrollTop>=distFromTop && scrollTop<=scrollDistance){
      console.log(scrollTop - distFromTop)
      locomotiveWrapper.current.style.transform = "translateX(-"+(scrollTop - distFromTop)+"px)"
    }
  }


  useEffect(()=>{
    windoWidth = window.innerWidth
    horLength = locomotiveWrapper.current.scrollWidth
    distFromTop = ref.current.offsetTop
    scrollDistance = distFromTop+horLength-windoWidth
    ref.current.style.height = scrollDistance+"px"

    window.addEventListener("scroll", handleScroll, 2, {passive:true})
    return(()=>{
      window.removeEventListener("scroll", handleScroll)
    })
  }, [])



  return (
    <div className="services-container">
      
      <div className="service" style={{ background: "#bde0fe", height: scrollDistance+"px" }} ref={ref}>
        <div className="sticky-wrapper">
          <header> COMPLETE WEB3 VIDEO SOLUTIONS </header>
          <div className="service-content">
            From mesmerizing 2D and 3D animations to compelling product demos and hype videos, our tailor-made solutions are crafted to captivate and engage.
          </div>

          <div className="locomotive-wrapper" ref={locomotiveWrapper}>
            <Item style={{background: "red"}}/>
            <Item style={{background: "pink"}}/>
            <Item style={{background: "green"}}/>
            <Item style={{background: "cyan"}}/>
            <Item style={{background: "white"}}/>
            <Item style={{background: "grey"}}/>
            <Item style={{background: "black"}}/>

          </div>

        </div>
      </div>



      {
        servicesData.map((each) => {
          return(
            <Service 
              heading={each.heading}
              content={each.content}
              imgs={each.imgs}
              yt={each.yt}
              style={{
                background: each.bg
              }}
            />
          )
        })
      }
    </div>
  )
}




function Service(props) {
  return (
    <div style={{ ...props.style, height: "100%" }} className="service">
      <header> {props.heading} </header>
      <div className="service-content">
        {props.content}
      </div>

      {
        props.yt &&
        <div style={{ width: "100%", padding: "0 50px", transform: "" }}>
          <iframe src={`${props.yt}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      }

      <div className="img-container">
        {
          props.imgs &&
          props.imgs.map((item) => {
            return (
              <div
                style={{ backgroundImage: `url(${item})` }}
                className="img-container">
              </div>
            )
          })
        }
      </div>
    </div>
  )
}



function Item(props){
  return(
    <div className="item" style={props.style}>
      
    </div>
  )
}