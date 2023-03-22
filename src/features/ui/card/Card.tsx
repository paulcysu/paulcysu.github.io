import { useEffect, useState, MouseEvent } from 'react'
import "./style.css"

type CardProp = {
  img?: any,
  children?: JSX.Element 
}

function Card(props: CardProp) {
  const {children} = props

  const [rotation, setRotation] = useState({x: 26, y: 48})

  const handleMouseMove = (e: MouseEvent) => {
    let middleX, middleY, offsetX, offsetY, degreeX, degreeY
    middleX = window.innerWidth / 2
    middleY = window.innerHeight / 2
    offsetX = e.clientX - middleX
    offsetY = e.clientY - middleY
    degreeX = (offsetX / middleX) * 200
    degreeY = (offsetX / middleY) * 200
    setRotation({
      x: degreeX,
      y: degreeY
    })
  }

  return (
    <div 
      className="card-container"
      onMouseMove={handleMouseMove}
      style={{
        transform: `perspective(3000px) rotateY(${-1 * rotation.x}deg) rotateX(${rotation.y}deg)`
      }}
    >
      <div className="card-golden-border">
        {children}
      </div>
    </div>
  )
}

export default Card;