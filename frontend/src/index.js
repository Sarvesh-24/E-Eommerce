import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM  from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import { App } from './App'


ReactDOM.render(<ChakraProvider>
   <BrowserRouter>
        <App />
   </BrowserRouter>
</ChakraProvider>, document.querySelector('#root'))