import React, { useState } from 'react'

import Header from './components/header'
import MainContent from './components/mainContent'
import Footer from './components/footer'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)

function App() {
    return (
        <div className="App">
            <FontAwesomeIcon icon="check-square" />
            Your <FontAwesomeIcon icon="coffee" /> is hot and ready!
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

export default App
