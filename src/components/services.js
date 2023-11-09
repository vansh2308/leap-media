import { useEffect, useRef } from "react"
import "./service.css"
import ser1 from "./../static/service1.png"
import ser2 from "./../static/service2.png"
import ser3 from "./../static/service3.png"
import ser4 from "./../static/service4.png"
import ser5 from "./../static/service5.png"
import ser6 from "./../static/service6.png"

import img3 from "./../static/bcgimg.png"
import img4 from "./../static/emimg.png"
import img5 from "./../static/geapimg.png"
import img6 from "./../static/fbs img.png"

const txt1 = ""
const txt2 = "Our influencer network isn't just about reach; it's about relevance and resonance. We connect you with voices that amplify your message authentically and effectively in different regions."
const txt3 = "We don't just build communities; we nurture them. Our strategies are designed to foster lasting relationships and loyalty across diverse global audiences."
const txt4 = "Our event marketing goes beyond traditional boundaries, capturing the essence of your brand and the excitement of your audience."
const txt5 = "Join us at key web3 conferences like NFT KHI, Eth Portland, Bitcoin 2023, and Token2049. We'll be your dedicated info partner, creating testimonial videos and conducting interviews to amplify your brand's voice, boosting awareness and engagement with your protocol."
const txt6 = `Your journey is unique. We help articulate your vision and mission, crafting narratives that inspire and resonate with your target audience.At Leap Media, we understand the pulse of Web3. We're not just a service provider; we're a partner in your journey towards innovation and success. Ready to make your mark in the Web3 world? Leap with us!`




export default function ServiceContainer(props) {
  let windowWidth = 0
  let horLenght = 0
  let distFromTop = 0
  let scrollDistance = 0
  const wrapperRef = useRef(null)
  const locomotiveRef = useRef(null)

  const handleScroll = (e) => {
    let scrollTop = window.pageYOffset;
    if (scrollTop >= distFromTop && scrollTop <= scrollDistance) {
      locomotiveRef.current.style.transform = `translateX(-${scrollTop - distFromTop}px)`
    }
  }

  useEffect(() => {
    windowWidth = window.innerWidth
    horLenght = locomotiveRef.current.scrollWidth
    distFromTop = wrapperRef.current.offsetTop
    scrollDistance = distFromTop + horLenght - windowWidth
    wrapperRef.current.style.height = scrollDistance + "px"
    window.addEventListener("scroll", handleScroll, { passive: true })
    return (() => {
      window.removeEventListener("scroll", handleScroll)
    })
  })


  return (
    <div className="bilateral-container" ref={wrapperRef}>
      <div className="sticky-container" ref={locomotiveRef}>

        <div className="service-container">
          <div className="service">
            <ContentPanel text={txt1} />


            <ImgPanel imgUrl={ser1} name="COMPLETE WEB3 VIDEO SOLUTIONS" />
          </div>
        </div>
        <div className="service-container">
          <div className="service">
            <ContentPanel text={txt2} yt="https://www.youtube.com/embed/WPpG4riAc3I?si=TjxCu_mRdf-koMSg"/>

            <ImgPanel imgUrl={ser2} name="KOL / INFLUENCER MARKETING" />
          </div>
        </div>
        <div className="service-container">
          <div className="service">
            <ContentPanel text={txt3} img={img3}/>

            <ImgPanel imgUrl={ser3} name="BUILDING COMMUNITIES GLOBALLY" />
          </div>
        </div>
        <div className="service-container">
          <div className="service">
            <ContentPanel text={txt4}  img={img4}/>

            <ImgPanel imgUrl={ser4} name="EVENT MARKETING" />
          </div>
        </div>
        <div className="service-container">
          <div className="service">
            <ContentPanel text={txt5}   img={img5}/>

            <ImgPanel imgUrl={ser5} name="GLOBAL EVENT AWARENESS PARTNER" />
          </div>
        </div>
        <div className="service-container">
          <div className="service">
            <ContentPanel text={txt6}  img={img6}/>

            <ImgPanel imgUrl={ser6} name="FOUNDER / BRAND STORYTELLING" />
          </div>
        </div>





      </div>
    </div>
  )
}




function ImgPanel(props) {
  return (
    <div className="right-img-panel" style={{ background: `url(${props.imgUrl})` }}>
      <div className="gradient-overlay"> </div>
      <h4>{props.name}</h4>
    </div>
  )
}

function ContentPanel(props) {
  return (
    <div className="content-wrapper">
      <p> {props.text} </p>
      
      {
        props.yt &&
        <iframe width="560" height="315" src={props.yt} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      }

      {
        props.img && 
        <img src={props.img} />
      }

    </div>
  )
}