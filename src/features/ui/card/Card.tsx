import { useState } from 'react'
import "./style.css"

type CardProp = {
  name: string,
  img?: any,
  children?: JSX.Element
}

function Card(props: CardProp) {
  const {name, img, children} = props

  const [mouse, setMouse] = useState({x: 0, y: 0})
  const [cursor, setCursor] = useState({x: 0, y: 0})

  const speed = 0.01

  return (
    <div className="card-container">
      <div className="card-golden-border">
        {children}
      </div>
    </div>
  )
}

export default Card;