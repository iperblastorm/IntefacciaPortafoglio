import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'

import Store from './app/Store.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/Router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Provider store={Store}>
        <RouterProvider router={router} />
      </Provider>
  </StrictMode>,
)
