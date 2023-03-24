import CardSection from 'features/sections/card-section'
import AboutMe from 'features/sections/about-me'
import Projects from 'features/sections/projects'
import Skills from 'features/sections/skills'
import Contact from 'features/sections/contact'

import { useMouseDispatch } from 'features/mouse-move/MouseContext'
import { useScrollDispatch } from 'features/scroll/ScrollContext'
function Home() {
  const mousedispatch = useMouseDispatch()
  const scrollDispatch = useScrollDispatch()

  return (
    <div
      onScroll={(e) => {
        console.log('onScroll: ', e.currentTarget.scrollTop)
        scrollDispatch({
          type: 'UPDATE_MOUSE_POSITION',
          x: e.currentTarget.scrollTop,
          y: 0,
        })
      }}
      onMouseMove={(e) =>
        mousedispatch({
          type: 'UPDATE_MOUSE_POSITION',
          x: e.clientX,
          y: e.clientY,
        })
      }
    >
      <CardSection />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}

export default Home
