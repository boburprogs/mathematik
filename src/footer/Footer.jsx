
import React from 'react'

function Footer() {
    return (
        <div className='container'>
            <div className="site row">
                <img className='col-sm-12 col-md-5' src="../public/logo.webp" alt="" />
                <div className='footer_logo col-md-5'>
                    <a href="#"><img src="../public/instagram.png" alt="" /></a>
                    <a href="#"><img src="../public/telegram.png" alt="" /></a>
                    <a href="#"><img src="../public/facebook.png" alt="" /></a>
                    <a href="#"><img src="../public/github.png" alt="" /></a>
                </div>
            </div>

            <div className="row footer_link">
                <ul className='row col-sm-12 col-md-6'>
                    <li className='col-sm-6 col-lg-4'>
                        <a href="#">Bosh Sahifa</a><br />
                        <a href="#">Masalalar</a><br />
                        <a href="#">Video Darslar</a><br />
                        <a href="#">Algebra</a><br />
                    </li>

                    <li className='col-sm-6 col-lg-4'>
                        <a href="#">Bosh Sahifa</a><br />
                        <a href="#">Masalalar</a><br />
                        <a href="#">Video Darslar</a><br />
                        <a href="#">Algebra</a><br />
                    </li>

                    <li className='col-sm-6 col-lg-4'>
                        <a href="#">Bosh Sahifa</a><br />
                        <a href="#">Masalalar</a><br />
                    </li>
                </ul>
            </div>

            <h6>THE AUTHOR: Olimjonov Nodirbek</h6>

        </div>
    )
}

export default Footer