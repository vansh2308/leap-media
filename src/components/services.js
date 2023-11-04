import "./services.css"
import { useRef, useEffect } from "react"
import { motion, Variants } from "framer-motion"



export default function ServiceContainer(props) {
  const lastSectionRef = useRef(null)
  const handleScroll = () => {
    // console.log(lastSectionRef.current)
    // console.log(props.innerRef.current.getBoundingClientRect().top)
    console.log(lastSectionRef.current.getBoundingClientRect().top)
    if (lastSectionRef.current.getBoundingClientRect().top == 0) {
      // props.innerRef.current.style = {
      //   "position": "relative",
      //   "overflowY": "hidden",
      // }
    }
  }
  useEffect(() => {
    props.innerRef.current.addEventListener("scroll", handleScroll, { passive: true })
    return (() => {
      props.innerRef.current.removeEventListener("scroll", handleScroll)
    })


  }, [])



  return (
    <div className="services-container" ref={props.innerRef} style={
      props.stick ? {
        overflowY: "scroll",
        position: "sticky",
        top: "0"
      } : {
        position: "relative",
        overflowY: "hidden",
      }
    }>



      <div className="service" style={{ background: "#bde0fe" }}>
        <header> COMPLETE WEB3 VIDEO SOLUTIONS </header>
        <div className="service-content">
          From mesmerizing 2D and 3D animations to compelling product demos and hype videos, our tailor-made solutions are crafted to captivate and engage.
        </div>
      </div>

      <Service
        heading="KOL INFLUENCER MARKETING"
        content="Our influencer network isn't just about reach; it's about relevance and resonance. We connect you with voices that amplify your message authentically and effectively in different regions."
        yt="https://www.youtube.com/embed/i1IKnWDecwA?si=-H4dODq7Uzx-4ryG"
        style={{
          background: "#ffc8dd"
        }}
      />

      <Service
        bg="#d0f4de"
        heading="BUILING COMMUNITIES GLOBALLY"
        content="We don't just build communities; we nurture them. Our strategies are designed to foster lasting relationships and loyalty across diverse global audiences."
        yt="https://www.youtube.com/embed/h7MYJghRWt0?si=ZonNlHc7-MKg6WeG"
        style={{
          background: "#d0f4de"
        }}

      />
      <Service
        bg="#ffdab9"
        heading="EVENT MARKETING"
        content="Our event marketing goes beyond traditional boundaries, capturing the essence of your brand and the excitement of your audience."
        imgs={[require("./../static/event-marketing-img.png")]}
        style={{
          background: "#ffdab9"
        }}


      />
      <Service
        bg="#e4c1f9"
        heading="GLOBAL EVENT AWARENESS PARTNER"
        content="Our event marketing goes beyond traditional boundaries, capturing the essence of your brand and the excitement of your audience."
        imgs={[require("./../static/global-event-awareness-partner-1.png"), require("./../static/global-event-awareness-partner-2.png")]}
        style={{
          background: "#e4c1f9"
        }}
      />
      <Service
        heading="FOUNDER / BRAND STORYTELLING"
        content="Leap Media takes podcasting to the next level. We help you tell your story, connecting deeply with your audience and establishing you as a thought leader in the Web3 space. At Leap Media, we understand the pulse of Web3. We're not just a service provider; we're a partner in your journey towards innovation and success. Ready to make your mark in the Web3 world? Leap with us!"
        imgs={[require("./../static/storytelling-1.png"), require("./../static/storytelling-2.png"), require("./../static/storytelling-3.png")]}
        style={{
          background: "#ffa69e",
        }}

        innerRef={lastSectionRef}
      />


    </div>
  )
}



const serviceVariants = {
  offScreen: {
    rotateX: 45
  },
  onScreen: {
    // background: "red"
    rotateX: 0,
    transition: {
      duration: 2
    }
  }

}

function Service(props) {
  return (
    <motion.div
      className="service"
      initial="offScreen"
      whileInView="onScreen"
      variants={serviceVariants}
      viewport={{once: true}}

    >


      <div style={{...props.style, height: "100%"}} ref={props.innerRef}>
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

        <div style={{

        }} className="img-container">

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

    </motion.div>
  )
}