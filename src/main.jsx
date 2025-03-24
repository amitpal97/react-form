import { createRoot } from 'react-dom/client'
import './index.css'
import SignUp from './Components/SignUp/'
import Form from './Components/Form-Component/Form'
import Container from './Global-Ui/Container'
import { AppProvider } from './Context'
// import { store } from './State-Mangement/redux-Toolkit/Store/store'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { Provider } from 'react-redux'


createRoot(document.getElementById('root')).render(


  <>
    {/* <Container>

      <AppProvider >
      </AppProvider>
      </Container> */}

    <Provider store={store}>
      {/* <Form /> */}
      {/* <SignUp /> */}

    </Provider>




  </>
)
