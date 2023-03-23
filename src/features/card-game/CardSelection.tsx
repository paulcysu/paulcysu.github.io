import Card from '../ui/card/Card'
import { ReactComponent as Sword } from 'assets/sword.svg'
import './styles.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function CardSelection() {
  const [showSelection, setShowSelection] = useState(true)

  return (
    <>
        <div className={`card-selection ${showSelection ? '' : ' hide'}`}>
          <div className="author-section">
            <p className="author-name">Paul Su</p>
            <p className="author-title">Full Stack Developer</p>
          </div>
          <Card handleOnClick={() => setShowSelection(false)}>
            <Sword className="sword" fill="red" stroke="green" />
          </Card>
          <p className="card-selection-instruction">- - Select Card - -</p>
        </div>
    </>
  )
}

export default CardSelection
