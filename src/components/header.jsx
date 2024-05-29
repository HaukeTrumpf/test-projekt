import React, { useState } from 'react';
import { SocialIcon } from 'react-social-icons'


import InView from '../util/inView';
const Header = () => {

    return (
        <>
            <header className="bg-cover text-left bg-center h-screen bg-[#fff] flex flex-col p-20">
   
                <div className="m-auto lg:w-auto w-full  md:p-20 ">
                    <InView className="fade-in-left">
                        <div className="container  mx-auto text-[#2568fb]"> 
                            <h1 className="text-6xl md:text-9xl mb-10 tracking-widest flex flex-wrap ">
                                Moin
                            </h1>
                            <span >ich bin Haui und mach <a href="https://de.wikipedia.org/wiki/Internet">Internet</a>. Wenn du willst, dass ich dir deins mache, melde dich gern</span>
                        </div>
                        <a href="#contact">
                        <button className='mt-20 flex gap-4'>
                            Schreib mir! <div className='arrow bounce'>↓</div>
                        </button>
                        </a>
                        
                    </InView> 
                    
                </div>
                <div className='flex flex-wrap justify-center gap-4'> 
                                <SocialIcon url="https://instagram.com" fgColor='#2568fb' bgColor="#fff"/>
                                <SocialIcon url="https://facebook.com" fgColor='#2568fb' bgColor="#fff"/>
                            </div>
                            <a href="./lebenslauf_hauke_trumpf.pdf" download>Download the pdf</a>
            </header>
         
        </>
    )
}

export default Header
