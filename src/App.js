import React,{useState} from 'react'
import logo from './logo.svg';
import Header from './components/Header'
import Grid from './components/Grid'
import Footer from './components/Footer'
import './App.css';

function App() {

  const [home,setHome] = useState('clicked')
  const updateHome=()=>{
      const update = home==='clicked'?'notClicked':'clicked'
      setHome(update)
  }
  return (
    <div className="App">
      <Header updateHome={updateHome}/>
      <Grid key={home} updateHome={updateHome}/>
      <Footer/>
    </div>
  );
}

export default App;
