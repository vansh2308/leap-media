

export default function Marquee(props) {
  return (
    <div className="logos">

      <div className={`logos-slide logos-slide-${props.direction}`}>
        {props.logo_lst.map((each) => {
          return (
            <img src={each} alt="company-logo"/>
          )
        })}
      </div>
      <div className={`logos-slide logos-slide-${props.direction}`}>
        {props.logo_lst.map((each) => {
          return (
            <img src={each} alt="company-logo" />
          )
        })}
      </div>
      <div className={`logos-slide logos-slide-${props.direction}`}>
        {props.logo_lst.map((each) => {
          return (
            <img src={each} alt="company-logo"/>
          )
        })}
      </div>
      
    </div>
  )
}