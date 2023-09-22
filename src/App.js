import './App.css';
import Destination from './components/destination/Destination';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import {  Route, Routes } from "react-router-dom"
import data from "./jsons/data.json"
import { useEffect, useState } from 'react';
import Crew from './components/crew/Crew';
import Technology from './components/technology/Technology';
function App() {
  let [dest] = useState([data.destinations])
  let [crew] = useState([data.crew])
  let [tech] = useState([data.technology])
  console.log(dest[0][0]);
  
  useEffect(()=>{
    document.querySelector(".navbar-main li a:nth-child(1)").click()
  },[])

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Destination' element={<Destination land={dest[0][0]} />} />
        {dest[0].map((des) => {
          return <Route key={des.name} path={`/Destination/${des.name}`} element={<Destination land={des} />} />
        })}
        <Route path='/crew' element={<Crew person={crew[0][0]} />} />
        {crew[0].map((cr) => {
          return <Route key={cr.name} path={`/crew/${cr.name}`} element={<Crew person={cr} />} />
        })}
        <Route path='/Technology' element={<Technology craft={tech[0][0]} />} />
        {tech[0].map((t) => {
          return <Route key={t.name} path={`/Technology/${t.name}`} element={<Technology craft={t} />} />
        })}
      </Routes>
    </div>
  );
}

export default App;
