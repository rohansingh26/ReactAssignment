import React,{useState} from 'react'
import Body from './Body'
import Nav from './Nav'
import './Grid.css'
const Grid =(props)=>{
    return(<div className='Grid'><Body /><Nav updateHome={props.updateHome}/></div>)
}
export default Grid
