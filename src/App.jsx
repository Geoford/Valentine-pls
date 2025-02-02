import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'

function App() {
  return(
    <>
    <Header></Header>
    <Food></Food>
    <Footer></Footer>
    </>
  );
}

export default App
