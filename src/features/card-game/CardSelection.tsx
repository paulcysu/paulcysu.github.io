import Card from '../ui/card/Card'
import { ReactComponent as Sword } from 'assets/sword.svg'
import './styles.css'

function CardSelection() {
  return (
    <div className="card-selection">
      <p className='author-name'>Paul Su</p>
      <Card>
        <Sword className="sword" fill="red" stroke="green" />
      </Card>
      <p className='card-selection-instruction'>- - Select Card - -</p>
    </div>
  )
}

export default CardSelection
