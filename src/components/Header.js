import React from'react'
import './Header.css'
const Header=(props)=>{
    return(<div className='Header' onClick={props.updateHome} style={{cursor:'pointer'}}>Rohan's Blog</div>)
}
export default Header