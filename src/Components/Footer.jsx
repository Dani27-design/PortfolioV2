import React from 'react'

function Footer() {
    return (
        <div id="footer">
            <div className="container-logo">
                <p className="logo-footer">DC<img className="dot-navbar" src={`${process.env.PUBLIC_URL}/dot-navbar.png`} alt="" /></p>
                <p className='copyright'>copyright2022</p>
            </div>
            <div className="container-build">
                <p className='teks-build'>Build with </p>
                <img src={`${process.env.PUBLIC_URL}/logo.svg`} alt="" className="logo-react" />
            </div>
        </div>
    )
}

export default Footer
