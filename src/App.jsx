import React from 'react'
import Header from './components/header'
import MainContent from './components/mainContent'

import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Contact from './components/contactForm'

function App() {
    return (
        <div className="App"> 
            <Parallax pages={4} >
                 <ParallaxLayer speed={0.1} sticky={{ start: 0, end: 0 }}>
                <Header /> 
                </ParallaxLayer>
                <ParallaxLayer speed={1} sticky={{ start: 1, end: 2 }}>
                <MainContent />
                </ParallaxLayer>
                <ParallaxLayer sticky={{ start: 2, end: 3 }}>
                <Contact/>
                </ParallaxLayer>
                
            </Parallax>
 
        </div>
    )
}

export default App
