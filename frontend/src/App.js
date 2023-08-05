import {ChakraProvider, Flex,} from '@chakra-ui/react'
import { Route, Routes} from 'react-router-dom'


import { Header } from './component/Header'
import  {Footer} from './component/Footer'
import { HomeScreen } from './screens/HomeScreen'
import { ProductScreen } from './screens/ProductScreen'
import { CartScreen } from './screens/CartScreen'


export const App = () => {

    return(

        <>
            
            
                
            <div>

            <Header/>
                <Flex           
                as="main"                  
                direction="column" mt="72px" 
                minH="xl" 
                py="6" 
                px="6" 
                bgColor="gray.200 ">

                <Routes>
                    <Route path='/' element={<HomeScreen/>}/>

                    <Route path='/product/:id' element={<ProductScreen />} />

                    <Route path='/cart/:id' element={<CartScreen/>}/>
                    <Route path='/cart' element={<CartScreen/>}/>
                </Routes>

                </Flex>

                
            <Footer />
                
            </div>
            
            
        </>
    )
}