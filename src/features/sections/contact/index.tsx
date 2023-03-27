import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'

import IdleGhost from 'assets/cute_ghost_idle.png'
import BlueGhost from 'assets/cute_ghost_blue.png'
import LinkedInLogo from 'assets/linkedin-logo.png'
import MailIcon from 'assets/mail-icon.png'

import './styles.css'

const Contact: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div id="#contact" className="contact">
      <img
        src={isHovered ? BlueGhost : IdleGhost}
        alt="ghost"
        className="ghost"
        onMouseEnter={() => {
          setIsHovered(true)
        }}
        onMouseLeave={() => {
          setIsHovered(false)
        }}
        onTouchStart={() => {
          setIsHovered(true)
        }}
        onTouchEnd={() => {
          setIsHovered(false)
        }}
      />
      <div className="contact-list">
        <a href="https://www.linkedin.com/in/paulcysu/" target="_blank" >
          <img src={LinkedInLogo} alt="ghost" className='linkedin' />
        </a>
        <a href="mailto: su.paul.cy@gmail.com" target="_blank" >
          <img src={MailIcon} alt="ghost" className='mail' />
        </a>
      </div>
    </div>
  )
}

export default Contact
