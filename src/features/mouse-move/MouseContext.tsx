import { createContext, useContext, useReducer, ReactNode } from 'react'

type MouseProps = {
  x: number
  y: number
}

type MouseProviderProps = {
  children: ReactNode
}

const initialMouse: MouseProps = { x: 0, y: 0 }

const MouseContext = createContext<MouseProps>(initialMouse)
const MouseDispatchContext = createContext<any>(null)

export const MouseProvider = (props: MouseProviderProps) => {
  const { children } = props

  const [mouse, dispatch] = useReducer(mouseReducer, initialMouse)

  return (
    <MouseContext.Provider value={mouse}>
      <MouseDispatchContext.Provider value={dispatch}>
        {children}
      </MouseDispatchContext.Provider>
    </MouseContext.Provider>
  )
}

export function useMouse() {
  return useContext(MouseContext)
}

export function useMouseDispatch() {
  return useContext(MouseDispatchContext)
}

function mouseReducer(state: any, action: any) {
  switch (action.type) {
    case 'UPDATE_MOUSE_POSITION':
      return {
        ...state,
        x: action.x,
        y: action.y,
      }
    default: {
      throw new Error('Unknown action: ' + action.type)
    }
  }
}
