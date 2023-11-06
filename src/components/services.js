import "./services.css"
import { useEffect, useRef } from "react"


const servicesData = [
  {
    heading: "KOL INFLUENCER MARKETING",
    content: "Our influencer network isn't just about reach; it's about relevance and resonance. We connect you with voices that amplify your message authentically and effectively in different regions.",
    yt: "https://www.youtube.com/embed/WPpG4riAc3I?si=llX1leW8WPid2j-z",
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
    imgs: [require("./../static/event-marketing-img.png")],
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
    if (scrollTop >= distFromTop && scrollTop <= scrollDistance) {
      console.log(scrollTop - distFromTop)
      locomotiveWrapper.current.style.transform = "translateX(-" + (scrollTop - distFromTop) + "px)"
    }
  }


  useEffect(() => {
    // eslint-disable-next-line
    windoWidth = window.innerWidth
    // eslint-disable-next-line
    horLength = locomotiveWrapper.current.scrollWidth
    // eslint-disable-next-line
    distFromTop = ref.current.offsetTop
    // eslint-disable-next-line
    scrollDistance = distFromTop + horLength - windoWidth
    ref.current.style.height = scrollDistance + "px"

    window.addEventListener("scroll", handleScroll, 2, { passive: true })
    return (() => {
      window.removeEventListener("scroll", handleScroll)
    })
  }, [])



  return (
    <div className="services-container">

      <div className="service" style={{ background: "#bde0fe", height: scrollDistance + "px" }} ref={ref}>
        <div className="sticky-wrapper" style={{ display: "flex", flexDirection: "column" }}>
          <header> COMPLETE WEB3 VIDEO SOLUTIONS </header>
          <div className="service-content">
            From mesmerizing 2D and 3D animations to compelling product demos and hype videos, our tailor-made solutions are crafted to captivate and engage.
          </div>

          <div className="locomotive-wrapper" ref={locomotiveWrapper}>

            <div className="item">
              <h3>2D & 3D VIDEOS</h3>
              <div className="grid-2-2 subservice-media-wrapper">
                <div className="grid-child span-height">
                  <img src={require("./../static/2d-3dvid1.png")} alt="img" />
                </div>
                <div className="grid-child span-height">
                  <img src={require("./../static/2d-3dvid2.png")} alt="img" />
                </div>
              </div>
            </div>

            <div className="item">
              <h3>PRODUCT DEMO / HYPE VIDEOS</h3>
              <div className="grid-2-2 subservice-media-wrapper">
                <div className="grid-child span-height">
                  <iframe src="https://www.youtube.com/embed/7ls_33720B8?si=HXCYDlrLKzV-o0ge" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className="grid-child span-height">
                  <iframe src="https://www.youtube.com/embed/s7DIwVwLao8?si=xn07MQa0m39sBQll" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
              </div>


            </div>

            <div className="item">
              <h3>EXPLAINER VIDEOS</h3>
              <div className="grid-2-2 subservice-media-wrapper" style={{ gridTemplateColumns: "repeat(3, 1fr" }}>
                <div className="grid-child span-height">
                  <iframe src="https://www.youtube.com/embed/TK2k8BGeLuM?si=SOfTj0dhMebwFI8y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className="grid-child  span-height">
                  <iframe src="https://www.youtube.com/embed/F6woo0gYq9k?si=qti-vYOXi6kyeAos" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className="grid-child ">
                  <iframe src="https://www.youtube.com/embed/IFJOB_abx5E?si=TeBR7SHkM_tzfwxH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className="grid-child">
                  <iframe src="https://www.youtube.com/embed/HZZagbHUN84?si=XxrPLabEpraf7lWC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
              </div>

            </div>

            <div className="item">
              <h3>HOSTING & EVENT VIDEO PRODUCTION</h3>
              <div className="grid-2-2 subservice-media-wrapper" style={{ gridTemplateColumns: "repeat(3, 1fr" }}>
                <div className="grid-child span-height">
                  <iframe src="https://www.youtube.com/embed/0dbknwO8gPE?si=3Eer8M11ZP-BydGJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className="grid-child">
                  <iframe src="https://www.youtube.com/embed/dB6wYDpqNE4?si=FrVwhkwRQA8Ti7OD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className="grid-child ">
                  <iframe src="https://www.youtube.com/embed/DMKev4ga0fo?si=YzoGJkdJWOJZzrSh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className="grid-child">
                  <iframe src="https://www.youtube.com/embed/fqiX7F75ckA?si=caLSTd66MACHNyis" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className="grid-child">
                  <iframe src="https://www.youtube.com/embed/3IUhRzenJtk?si=VTubruJ6GCfIiHb0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
              </div>


            </div>

            <div className="item">
              <h3>EVENT HIGHLIGHTS</h3>
              <div className="grid-2-2 subservice-media-wrapper" style={{ gridTemplateColumns: "repeat(3, 1fr" }}>
                <div className="grid-child span-height" style={{ gridColumn: "1/end" }}>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/-PJhm6UXzLk?si=Db_GdCEyOwyc8rp0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
              </div>
            </div>

            <div className="item">
              <h3>PODCASTS</h3>
              <div className="grid-2-2 subservice-media-wrapper" style={{ gridTemplateColumns: "repeat(3, 1fr" }}>
                <div className="grid-child span-height" style={{ gridColumn: "1/end" }}>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/omUksH-NzDs?si=u3ozwHEoqH36243G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
              </div>

            </div>

            <div className="item">
              <h3>SOCIAL MEDIA VIDEOS</h3>
              <div className="grid-2-2 subservice-media-wrapper">
                <div className="grid-child span-height">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/bHHmdZo-re8?si=yb9msY5XfAs9Xvn7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className="grid-child span-height">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/O1mxgsOTGQ4?si=8uQPjyKACRcKyxZh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
              </div>

            </div>


          </div>

        </div>
      </div>



      {
        servicesData.map((each) => {
          return (
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



function Item(props) {
  return (
    <div className="item" style={props.style}>

    </div>
  )
}

function YtEmbed(props) {
  return (
    <iframe src="https://www.youtube.com/embed/QIU2TtNOinQ?si=aKvuk2rbHEeNk384" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  )
}