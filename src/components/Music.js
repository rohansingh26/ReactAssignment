import React from 'react'
import image from './Music.jpg'

const Music = (props)=>{
    if(!props.detail)
    return(
        <div className="Item">
            <img src={image} style={{height:"120px", width:"200px"}}/>
            <div onClick={() => {props.updateState('Music')}} style={{cursor:'pointer'}}>Music (11/18/2020)</div>
            <div>Full-Scale Ultra Music Festival Event Takes Place In Taiwan, Where COVID-19 Has Been Contained</div>
        </div>
    )
    else return(
        <div>
            <img src={image} style={{height:"300px", width:"500px"}}/>
            <div>While music festivals remain a distant memory in most parts of the world, a full-scale Ultra Music Festival event went on in Taiwan on Saturday, November 14th. The event, which took place at Dajie Riverside Park in Taipei, was billed as a part of Road to Ultra, the long-running series of one-day festival events in cities around the world created and founded by the team behind the famous Miami electronic dance music festival. The Ultra event in Taiwan was headlined by Swedish progressive house maestro Alesso and featured performances by LA-based duo Slander, Israeli production pair Vini Vici, and America DJ Kayzo as well as regional supporting acts Junior, RayRay, and Pei Pei. It welcomed crowds of thousands to enjoy a full music festival experience complete with lavish stage production, pyrotechnics, and fireworks in addition to live painting demonstrations, global street food, and a graphic art wall created by Taiwanese designers. The event was streamed live online to a global audience.</div>
        </div>
    )
}
export default Music