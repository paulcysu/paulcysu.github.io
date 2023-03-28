import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

import Home from 'pages/Home'
import ErrorPage from 'pages/ErrorPage'
import { MouseProvider } from "features/mouse-move/MouseContext"
import { ScrollProvider } from 'features/scroll/ScrollContext'
import './main.css'

const router = createBrowserRouter([
  {
    path: "/portfolio",
    element: <Home />,
    errorElement: <ErrorPage />
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ScrollProvider>
      <MouseProvider>
        <RouterProvider router={router} />
      </MouseProvider>
    </ScrollProvider>
  </React.StrictMode>,
)
