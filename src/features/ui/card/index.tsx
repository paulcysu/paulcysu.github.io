import { useEffect, useState, MouseEvent } from 'react'
import { useMouse } from 'features/mouse-move/MouseContext'
import './styles.css'

type CardProp = {
  children?: JSX.Element
}

function Card(props: CardProp) {
  const { children } = props
  const mousePosition = useMouse()

  const [rotation, setRotation] = useState({ x: 0, y: 0 })

  useEffect(() => {
    let middleX, middleY, offsetX, offsetY, degreeX, degreeY

    middleX = window.innerWidth / 2
    middleY = window.innerHeight / 2
    offsetX = mousePosition.x - middleX
    offsetY = mousePosition.y - middleY
    degreeX = (offsetX / middleX) * 45
    degreeY = (offsetY / middleY) * 45

    setRotation({
      x: mousePosition.x == 0 ? 0 : degreeX,
      y: mousePosition.y == 0 ? 0 : degreeY,
    })
  }, [mousePosition])

  return (
    <div
      className="card-container"
      style={{
        transform: `
          perspective(3000px) 
          rotateY(${rotation.x}deg) 
          rotateX(${-1 * rotation.y}deg)`,
      }}
    >
      <div className="card-golden-border">{children}</div>
    </div>
  )
}

export default Card
