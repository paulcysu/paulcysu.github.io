import { useRouteError } from "react-router-dom";
import IdleGhost from 'assets/cute_ghost_idle.png'
import BlueGhost from 'assets/cute_ghost_blue.png'
import { useState } from "react";

const ErrorPage = () => {
  const error: any = useRouteError();
  console.error(error);
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <div className="ghost-error">
        <img
          src={isHovered ? BlueGhost : IdleGhost}
          alt="ghost"
          className="ghost"
          onMouseEnter={() => {
            setIsHovered(true)
          }}
          onMouseLeave={() => {
            setIsHovered(false)
          }}
          onTouchStart={() => {
            setIsHovered(true)
          }}
          onTouchEnd={() => {
            setIsHovered(false)
          }}
        />
      </div>
    </div>
  )
}

export default ErrorPage