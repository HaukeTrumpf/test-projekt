import React from 'react'
import Header from './components/header'
import { motion, useScroll } from "framer-motion"
import Contact from './components/contactForm'

function App() {
    const { scrollYProgress } = useScroll();
    return (
        <>
        <motion.div
                className="progress-bar"
                style={{ scaleX: scrollYProgress }}
        /> 
        <div className="App">  
                <Header /> 
                <Contact/>      
        </div>
        </>
    )
}

export default App
