import {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  useEffect,
  useMemo,
  useCallback
} from 'react'

type ScrollProps = {
  y: number
}

type ScrollProviderProps = {
  children: ReactNode
}

const initialScroll: ScrollProps = { y: 0 }

const ScrollContext = createContext<ScrollProps>(initialScroll)
const ScrollDispatchContext = createContext<any>(scrollReducer)

export const ScrollProvider = (props: ScrollProviderProps) => {
  const { children } = props

  const [scroll, dispatch] = useReducer(scrollReducer, initialScroll)

  const scrollCallback = useCallback(() => {
    dispatch({
      type: 'UPDATE_SCROLL',
      y: window.scrollY
    })
  }, [])

  useScrollEvent(scrollCallback)

  useMemo(() => {
    window.addEventListener('scroll', () => dispatch({
      type: 'UPDATE_SCROLL',
      y: window.scrollY
    }))
  }, [])

  return (
    <ScrollContext.Provider value={scroll}>
      <ScrollDispatchContext.Provider value={dispatch}>
        {children}
      </ScrollDispatchContext.Provider>
    </ScrollContext.Provider>
  )
}

export const useScroll = () => {
  return useContext(ScrollContext)
}

export const useScrollDispatch = () => {
  return useContext(ScrollDispatchContext)
}

export const useScrollEvent = (callback: EventListener) => {
  useEffect(() => {
    window.addEventListener('scroll', callback)
  }, [])
}

function scrollReducer(state: ScrollProps, action: any) {
  switch (action.type) {
    case 'UPDATE_SCROLL':
      return {
        ...state,
        y: action.y,
      }
    default:
      throw new Error('Unknown action: ' + action.type)
  }
}
