import { useState } from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Landing from "./components/Landing";
import Room from './components/Room';

import './App.css'

function App() {

  return (
    <div>
   <BrowserRouter>
   <Routes>
    <Route path = "/" element = {<Landing></Landing>}/>
    <Route path = "/room" element = {<Room/>}/>
    </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
