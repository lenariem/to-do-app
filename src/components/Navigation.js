import React from 'react'
import logo from "../image/logo.png"

const Navigation = () => {
    return (
        <nav>
            <div className="left">
                <img src={logo} alt="logo"/>
            </div>
            <div className="right">
                <a href="#">Help</a>
            </div>
        </nav>
    )
}

export default Navigation