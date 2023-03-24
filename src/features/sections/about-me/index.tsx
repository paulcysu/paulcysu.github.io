import { useState } from 'react'
import { useScroll } from 'features/scroll/ScrollContext'

import Me from 'assets/me.png'
import StreetLight from 'assets/street-light.png'
import './styles.css'

const AboutMe = () => {
  const { y } = useScroll()
  const meStartPositionX = 2000
  const lightStartPositionX = -800

  let meCurrentPosition = Math.max(meStartPositionX - y , 320)
  let lightCurrentPosition = Math.min(lightStartPositionX + y * 0.4, 50)

  // maybe like window width determine scroll speed
  console.log(meCurrentPosition)

  return (
    <div id="#about-me">
      <div className="parallax">
        <img
          src={StreetLight}
          alt="street-light"
          className="street-light"
          style={{ left: lightCurrentPosition }}
        />
        <img
          src={Me}
          alt="software-developer"
          className="developer"
          style={{ left: meCurrentPosition }}
        />
        <div className="about-me-text-container">
          <p className="about-me-title">About Me</p>
          <p className="about-me-text">
            I'm a Full Stack Developer in California
          </p>
          <p className="about-me-text">
            Strong in <span className="javascript-yellow">Javascript</span> and
            React
          </p>
          <p className="about-me-text">
            But also great at <span className="python-blue python-background">Py</span>
            <span className="python-yellow python-background">thon</span> and PostgreSQL
          </p>
          <p className="about-me-subtext">
            {"(" + "animations built from scratch" + ")"}
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
