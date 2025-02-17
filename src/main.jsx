import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SignUp from './Components/SignUp/'
import Form from './Components/Form-Component/Form'
import { AppProvider } from './Context'

createRoot(document.getElementById('root')).render(



  <AppProvider>
    {<SignUp />}
    <Form />
  </AppProvider>
)
