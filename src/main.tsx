import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

import Home from 'pages/Home'
import ErrorPage from 'pages/ErrorPage'
import Portfolio from 'pages/Portfolio'
import { MouseProvider } from "features/mouse-move/MouseContext"
import { MantineProvider } from '@mantine/core'
import './main.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <MouseProvider>
        <RouterProvider router={router} />
      </MouseProvider>
    </MantineProvider>
  </React.StrictMode>,
)
