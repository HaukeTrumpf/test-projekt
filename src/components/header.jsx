import React, { useState } from 'react';
import { SocialIcon } from 'react-social-icons'


import InView from '../util/inView';
import Navbar from './navbar';
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <>
            <header className="bg-cover bg-center h-screen bg-[#A1BE95] flex flex-col">
                <Navbar className='z-10'
                    isMenuOpen={isMenuOpen} 
                    toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
                />
                <div className="m-auto border-4 border-solid border-[#F98866] p-20 ">
                    <InView className="fade-in-left">
                        <div className="container mx-auto text-[#F98866]"> 
                            <h1 className="text-8xl md:text-9xl tracking-widest justify-center items-center flex flex-wrap gap-16">
                                Moin
                            </h1>
                            <span >ich bin Haui und mach Internet. Wenn du willst, dass ich dir deins mache, melde dich gern</span>
                            <div className='flex flex-wrap justify-center gap-4'>
                                <SocialIcon url="https://instagram.com" bgColor="#F98866"/>
                                <SocialIcon url="https://facebook.com" bgColor="#F98866"/>
                            </div>
                        </div>
                        
                    </InView> 
                 
                </div>
            </header>
        </>
    )
}

export default Header
