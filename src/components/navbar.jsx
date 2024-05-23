import React, { useState } from 'react'

const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300`

const Navbar = ({ isMenuOpen, toggleMenu }) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleToggle = () => { 
        setIsOpen(!isOpen)
        toggleMenu()
    }

    return (
        <nav className="text-white p-4 z-10">
            <div className="container mx-auto flex justify-between items-center">
    
                <div className="hidden md:flex space-x-4">
                    <a href="#" className="hover:text-gray-300">
                        Was kann der
                    </a>
                    <a href="#" className="hover:text-gray-300">
                        Schreib mir
                    </a>
                </div>

                <button
                    className="flex flex-col h-12 w-12 rounded justify-center items-center group md:hidden"
                    onClick={handleToggle}
                >
                    <div
                        className={`${genericHamburgerLine}  ${
                            isOpen
                                ? 'rotate-45 translate-y-3  group-hover:opacity-100'
                                : ' group-hover:opacity-100'
                        }`}
                    />
                    <div
                        className={`${genericHamburgerLine} ${
                            isOpen ? 'opacity-0' : ' group-hover:opacity-100'
                        }`}
                    />
                    <div
                        className={`${genericHamburgerLine} ${
                            isOpen
                                ? '-rotate-45 -translate-y-3  group-hover:opacity-100'
                                : ' group-hover:opacity-100'
                        }`}
                    />
                </button>
            </div>
            {isMenuOpen && (
                <div className="md:hidden">
                    <a href="#" className="block hover:text-gray-300">
                        Home
                    </a>
                    <a href="#" className="block hover:text-gray-300">
                        Über uns
                    </a>
                    <a href="#" className="block hover:text-gray-300">
                        Kontakt
                    </a>
                </div>
            )}
        </nav>
    )
}

export default Navbar
