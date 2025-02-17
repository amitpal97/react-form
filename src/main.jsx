import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SignUp from './Components/SignUp/'
import Form from './Components/Form-Component/Form'
import { AppProvider } from './Context'
import Container from './Global-Ui/Container'

createRoot(document.getElementById('root')).render(


  <>
    <Container>

      <AppProvider >
        {/* {<SignUp />} */}
        <Form />
      </AppProvider>
    </Container>


  </>
)
