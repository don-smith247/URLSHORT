import React from 'react'
import './Hero.css'
import working from './images/illustration-working.svg'
function Hero() {
  return (
   <div className='gan'>
     <div className='two'>
      <div className='tetx'>
        <h1 className='hh'>More than Just <br /> Shorter links</h1>
        <p>Build your brand’s recognition and get detailed <br /> insights on how your links are performing.</p>
        <button className='btn'>Get Started</button>
      </div>
      <div className='woe'>
        <img src={working} alt="" />
      </div>
     </div>
     <div className='gen'>
       <input type="text" placeholder='Shorten a link here...' />
       <button className='gen-buttton'>Shorten It!</button>
     </div>
    </div>
  )
}

export default Hero