import React from 'react'
import Footer from './components/footer'
import Header from './components/header'
import MainContent from './components/mainContent'
import Wdyd from './components/wdyd'

import { Parallax, ParallaxLayer } from '@react-spring/parallax'

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
                <Wdyd/>
                <Footer />
                </ParallaxLayer>
                
            </Parallax>
 
        </div>
    )
}

export default App
