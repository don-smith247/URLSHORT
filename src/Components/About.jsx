import React from 'react'
import icon from './images/icon-brand-recognition.svg'
import own from './images/icon-detailed-records.svg'
import abdul from './images/icon-fully-customizable.svg'
import './About.css'

function About() {
  return (
    <div className='myown'>
         <div className='ad'>
        <div className='classic'>
        <div className='txtx'>
          <h2>Advanced Statistics</h2>
          <p>Track how your links are performing across the web  <br />with our advanced statistics dashboard.</p>
        </div>
        <div className='line'></div>
        <div className='three'>
          <div className='bobo'>
           <div className='bbb'><img src={icon} alt="" /></div>
           <h3>Brand Recognition</h3>
           <p> Boost your brand recognition with <br /> each click. Generic links don’t mean a  <br />thing. Branded links help instil <br /> confidence in your content.</p>
          </div>
          <div className='bobo-0'>
            <div className='bb'><img src={own} alt="" /></div>
            <h3>Detailed Records</h3>
            <p>Gain insights into who is clicking your <br /> links. Knowing when and where <br /> people engage with your content <br /> helps inform better decisions.</p>
          </div>
          <div className='bobo-1'>
            <div className='bb'><img src={abdul} alt="" /></div>
            <h3>Fully Customizable</h3>
            <p>Improve brand awareness and <br /> content discoverability through <br /> customizable links, supercharging <br /> audience engagement.</p>
          </div>
        </div>
        </div>
        <div>
      <div className='boost'>
        <h2>Boost your links today</h2>
        <button>Get Started</button>
     </div>
        </div>
     </div>
    </div>
  )
}

export default About