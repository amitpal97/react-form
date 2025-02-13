import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SignUp from './Components/SignUp/'
import AppProvider from './Components/Context-provider/AppProvider'

createRoot(document.getElementById('root')).render(



  <AppProvider>

    {<SignUp />}
  </AppProvider>
)
