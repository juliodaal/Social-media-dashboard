import React from 'react'

// Styles
import '../../assets/css/Header.css'

function Header () {
    return(
        <header>
            <div className="container">
                <h1>
                    Social Media Dashboard
                    <span>Total Followers: 23,004</span>
                </h1>
                
                <div class="dark-mode-button">
                    Dark Mode
                    <button className="" /> 
                </div>
            </div>
        </header>
    )
}

export default Header