import { useState } from 'react'
import { useScroll } from 'features/scroll/ScrollContext'
import { useMediaQuery } from 'react-responsive'

import Me from 'assets/me.png'
import StreetLight from 'assets/street-light.png'
import './styles.css'

const positionByScreenMap = {
  'desktop': {
    'me': {
      'start': 2000,
      'stop': 320,
      'scrollSpeed': 1,
    },
    'light': {
      'start': -800,
      'stop': 50,
      'scrollSpeed': 0.4,
    }
  },
  'mobile': {
    'me': {
      'start': 500,
      'stop': 150,
      'scrollSpeed': 0.5,
    },
    'light': {
      'start': -200,
      'stop': 0,
      'scrollSpeed': 0.4,
    }
  }
}

const AboutMe = () => {
  const { y } = useScroll()

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)',
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  let meStartPositionX = isTabletOrMobile ? positionByScreenMap.mobile.me.start : positionByScreenMap.desktop.me.start
  let lightStartPositionX = isTabletOrMobile ? positionByScreenMap.mobile.light.start : positionByScreenMap.desktop.light.start
  let meStopPositionX = isTabletOrMobile ? positionByScreenMap.mobile.me.stop : positionByScreenMap.desktop.me.stop
  let lightStopPositionX = isTabletOrMobile ? positionByScreenMap.mobile.light.stop : positionByScreenMap.desktop.light.stop
  let meScrollSpeed = isTabletOrMobile ? positionByScreenMap.mobile.me.scrollSpeed : positionByScreenMap.desktop.me.scrollSpeed
  let lightScrollSpeed = isTabletOrMobile ? positionByScreenMap.mobile.light.scrollSpeed : positionByScreenMap.desktop.light.scrollSpeed

  let meCurrentPosition = Math.max(meStartPositionX - y * meScrollSpeed, meStopPositionX)
  let lightCurrentPosition = Math.min(lightStartPositionX + y * lightScrollSpeed, lightStopPositionX)

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
            Strong in{' '}
            <span className="javascript-yellow black-background">
              Javascript
            </span>{' '}
            and React
          </p>
          <p className="about-me-text">
            But also great at{' '}
            <span className="python-blue black-background">Py</span>
            <span className="python-yellow black-background">thon</span> and
            PostgreSQL
          </p>
          <p className="about-me-subtext">
            {'(' + 'animations built from scratch' + ')'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
