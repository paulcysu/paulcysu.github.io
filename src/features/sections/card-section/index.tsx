import Card from 'features/ui/card'
import { ReactComponent as Sword } from 'assets/sword.svg'
import './styles.css'

function CardSection() {
  return (
    <>
        <div className='card-selection'>
          <div className="author-section slide-up">
            <p className="author-name black">Paul Su</p>
            <p className="author-title black">Full Stack Developer</p>
          </div>
          <Card>
            <Sword className="sword" fill="red" stroke="green" />
          </Card>
        </div>
    </>
  )
}

export default CardSection
