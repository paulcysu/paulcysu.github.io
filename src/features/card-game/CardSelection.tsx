import Card from '../ui/card/Card';
import { ReactComponent as Sword } from 'assets/sword.svg'
import './styles.css'

function CardSelection() {
  return (
    <div className='cards-container'>
      <Card name='sword'>
        <Sword className="sword" fill='red' stroke='green'/>
      </Card>
    </div>
  )
}

export default CardSelection;