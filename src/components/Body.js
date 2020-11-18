import React,{useState, useEffect} from 'react'
import Apple from './Apple'
import Music from './Music'
import NY from './NY'
import './Body.css'

const Body =()=>{
    const items=['Apple','Music','NY']
    const[item,setitem]=useState()
    const getbody=(paran)=>{
        switch(paran){case 'Apple':return(<Apple detail/>)
    case 'Music':return(<Music detail/>)
    case 'NY':return(<NY detail/>)
    default: return(<div><Apple updateState={setitem}/><Music updateState={setitem} /><NY updateState={setitem} /></div>)
    }
 
    }
    return(<div className='Body'>{getbody(item)}</div>)
}
export default Body