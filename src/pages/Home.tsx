import CardSelection from 'features/card-game/CardSelection'
import { useMouseDispatch } from 'features/mouse-move/MouseContext'

function Home() {
  const dispatch = useMouseDispatch()

  return (
    <div
      onMouseMove={(e) =>
        dispatch({
          type: 'UPDATE_MOUSE_POSITION',
          x: e.clientX,
          y: e.clientY,
        })
      }
    >
      <CardSelection />
    </div>
  )
}

export default Home
