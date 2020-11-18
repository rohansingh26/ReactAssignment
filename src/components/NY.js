import React from 'react'
import image from '../NY.jpg'

const NY = (props)=>{
    if(!props.detail)
    return(
        <div className="Item">
            <img src={image} style={{height:"120px", width:"200px"}}/>
            <div onClick={() => {props.updateState('NY')}} style={{cursor:'pointer'}}>New York (11/18/2020)</div>
            <div>New York Travel Guides</div>
        </div>
    )
    else return(
        <div style={{overflow:"hidden"}}>
            <img src={image} style={{height:"300px", width:"500px"}}/>
            <div style={{overflowY:'auto'}}>

1. Walk the Brooklyn Bridge
Walk across the Brooklyn Bridge to experience an interesting view of the New York skyline and harbor. It’s a long walk, but good food and drinks (like the brewery) await you on the other side. Stopping to take photos and meandering along the way will make the walk about 40 minutes. I enjoy doing this walk at night when downtown Manhattan is all lit up.

2.See Times Square
No matter when you go to Times Square, it will be packed with people (usually other tourists). There are pedestrian areas where you can sit and hang out. If you aren’t shopping or eating or seeing a show, there isn’t much to do in the area (and no New Yorker hangs out there), but it’s still a fabulous place to people-watch for a few minutes from the top of the red steps of the TKTS kiosk.

3.Experience the Prohibition Bars
I love the 1920s — a lot. And that’s one of the reasons I love NYC so much — there are a lot of other people here who love the Jazz Age. There are lots and lots of Prohibition-style bars serving classic drinks while pumping out live jazz and swing music. While the fancy cocktails they serve may not be cheap ($12–15), I’m hooked on the atmosphere. Stepping into these bars with the music playing, people dancing.

</div>
        </div>
    )
}
export default NY