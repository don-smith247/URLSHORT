import React, { useState } from 'react'
import logo from './images/logo.svg'
import './Header.css'
function Header() {
const[active, setActive]= useState(false)
const handle = ()=>{
   setActive(!active)
}
  return (
    <div>
      <nav className='first-nav'>
         <div className='don'>
            <img src={logo} alt="" />
            <ul className='fiirst-ul'>
               <li>Features</li>
               <li>Pricing</li>
               <li>Resources</li>
            </ul>
         </div>
         <div className='dem'>
            <button className='first-btn'>Login</button>
            <button className='second-btn'>Sign Up</button>
         </div>
         <div className={`lg:hidden ${active ? 'toggle open' : 'toggle'}`} onClick={handle}>
            <div className="first"></div>
            <div className="second"></div>
            <div className="third"></div>
         </div>
      </nav>
      <ul className={`lg:hidden flex flex-col gap-3 justify-center items-center ${active ? 'h-[150px]' : 'h-0'} overflow-hidden transition-[all,5s,ease-linear]`}>
               <li>Features</li>
               <li>Pricing</li>
               <li>Resources</li>
            </ul>
   </div>
  )
}

export default Header