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
      onTouchMove={(e) =>
        mousedispatch({
          type: 'UPDATE_MOUSE_POSITION',
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
        })
      }
    >
      <CardSection />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home
