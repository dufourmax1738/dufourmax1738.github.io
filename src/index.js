import React from 'react'
import ReactDOM from 'react-dom'
import About from './components/About'
import {Navbar} from "react-bootstrap";
import CustomNavbar from "./components/CustomNavbar";

const reactContentRoot = document.getElementById("root")

const App = () => {
  return (
      <main className="text-gray-400 bg-gray-900 body-font">
        <CustomNavbar/>
        <About />
      </main>
  )
}

ReactDOM.render(<App />, reactContentRoot)