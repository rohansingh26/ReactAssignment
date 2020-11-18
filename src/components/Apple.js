import React from 'react'
import image from './Apple.jpg'

const Apple = (props)=>{
    if(!props.detail)
    return(
        <div className="Item">
            <img src={image} style={{height:"120px", width:"200px"}}/>
            <div onClick={() => {props.updateState('Apple')}} style={{cursor:'pointer'}}>Apple (11/18/2020)</div>
            <div>Apple’s move to M1 chips will save $2.5B this year, estimates IBM exec</div>
        </div>
    )
    else return(
        <div>
            <img src={image} style={{height:"300px", width:"500px"}}/>
            <div>An analysis by a senior IBM exec suggests that Apple’s move to M1 chips will save the company around $2.5B this year, with far larger savings to come as Apple transitions its entire Mac lineup to its own silicon.

The analysis is admittedly based on a series of estimates, and likely inaccurate, but the overall picture it paints seems plausible …


 
The back-of-an-envelope calculations were carried out by IBM AI strategy lead Sumit Gupta. He estimates that M1 chip production will cost Apple somewhere in the $40-50 range, against around $200 for the Intel Core i5 processor in the MacBook Air, and more for the version in the entry-level MacBook Pro.</div>
        </div>
    )
}
export default Apple