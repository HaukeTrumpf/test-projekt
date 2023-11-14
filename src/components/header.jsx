import React, { useState } from 'react'
import Navbar from './navbar'
import InView from '../util/inView'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <>
            <header className="bg-cover bg-center h-screen bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 flex flex-col">
                <Navbar
                    isMenuOpen={isMenuOpen}
                    toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
                />
                <div class="m-auto">
                    <InView className="fade-in-left">
                        <div className="container mx-auto">
                            <h1 className="text-8xl md:text-9xl text-white font-futuraBold justify-center items-center flex flex-wrap gap-16">
                                Moin!
                                <span class="wave">👋</span>
                            </h1>
                        </div>
                    </InView>
                </div>
            </header>
        </>
    )
}

export default Header
