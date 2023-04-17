import React, { useState } from 'react'
import './style.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [open, setOpen] = useState(false)
    return (
        <nav className={open ? 'nav-open' : ''} style={{ position: 'fixed', top: 0, left: 0, right: 0 }}>
            <div className='container'>
                <div className='logo'>
                    <span></span>
                    <button className='toggler' onClick={() => setOpen(prev => !prev)}>
                        {
                            open ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                                : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                        }
                    </button>
                </div>
                <div className='links'>
                    <Link to='mood-tracker'>Mood Tracker</Link>
                    <Link to='/fitness-recommendations'>Fitness Recommendations</Link>
                    <Link to='/nutrition'>Nutrition</Link>
                    <Link to='/bmi-calculator'>BMI Calculator</Link>
                    <Link to='/calorie-calculator'>Calorie Calculator</Link>
                </div>
            </div>
        </nav>
    )
}


