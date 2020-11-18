import React,{useEffect,useState} from'react'
import './Nav.css'

const Nav = (props)=>{
    const url = 'http://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=e18dd1e6de1242418003d10e8c9b6a56';
const req = new Request(url);
const [newsCom, setNewsCom]= useState([])
const getNewsComps= (list) => {
    const newsList = []
    list.forEach((item, index) => {
    newsList.push(<div key={index}><img src={item.urlToImage} style={{height:"50px", width:"50px"}}/><div className="Title">{item.title}</div></div>)
    })
    return newsList;
}
const fetchNews = () =>{

    fetch(req)
        .then(function(response) {
            response.json().then(data =>{
                const newsList = data.articles.slice(0,4)
                setNewsCom(getNewsComps(newsList))
                setTimeout(()=>{
                    fetchNews()
                },5000)
            })
        })
}
useEffect(()=>{
    fetchNews()
},[])
    return(
        <div className="Nav">
            <div onClick={()=>{props.updateHome()}} className="Home" style={{cursor:'pointer'}}>Home</div>
    <div className="weather">{newsCom}</div>
        </div>
    )
}
export default Nav;