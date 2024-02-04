import React from 'react'
import logo from './images/logo.svg'
import './Footer.css'
import face from './images/icon-facebook.svg'
import insta from './images/icon-instagram.svg'
import print from './images/icon-pinterest.svg'
import twi from './images/icon-twitter.svg'

function Footer() {
  return (
    <div className='foot'>
      <div className='gg'>
        <img src={logo} alt="" />
      </div>
      <div className='foot-1'>
        <div>
          <ul className='first-ul'>
            <li>Features</li>
            <li>Link Shortening </li>
            <li>Branded Links</li>
            <li> Analytics</li>
          </ul>
        </div>
        <div>
          <ul className='second-ul'>
            <li>Resources </li>
            <li>Blog</li>
            <li>Developers</li>
            <li>Support</li>
          </ul>
        </div>
        <div>
          <ul className='third-ul'>
            <li>Support</li>
            <li>About</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className='icon'>
          <img src= {face} alt="" />
          <img src= {insta} alt="" />
          <img src= {print} alt="" />
          <img src= {twi} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer