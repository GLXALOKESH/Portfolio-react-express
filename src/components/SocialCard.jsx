import React from 'react'
import './SocialCard.css'
const SocialCard = (props) => {
  const url = props.url
  const id = props.id
  return (
    <>
      <div className="comp-socialcard-base">
        <div className="comp-socialcard-logo"><img src={url} alt="socialLogo" /></div>
        <div className="comp-socialcard-id">
         {props.id}
        </div>
        <div className="comp-socialcard-btn">
          Click me
        </div>
      </div> 
    </>
  )
}

export default SocialCard
