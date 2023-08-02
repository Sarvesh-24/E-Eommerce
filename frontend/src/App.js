import {ChakraProvider} from '@chakra-ui/react'



import { Header } from './component/Header'
import  {Footer} from './component/Footer'

export const App = () => {

    return(

        <>
            <ChakraProvider>
                <div>
                    <Header/>
                    <Footer />
                </div>
            </ChakraProvider>
        </>
    )
}