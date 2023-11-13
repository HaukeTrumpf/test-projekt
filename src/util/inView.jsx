import React, { useState, useEffect, useRef } from 'react'

const InView = ({ children, threshold = 0.1, className = '' }) => {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true)
                    observer.disconnect()
                }
            },
            { threshold }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => observer.disconnect()
    }, [ref, threshold])

    return (
        <div ref={ref} className={`${className} ${isVisible ? 'in-view' : ''}`}>
            {children}
        </div>
    )
}

export default InView
