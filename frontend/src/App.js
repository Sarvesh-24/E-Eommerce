import {ChakraProvider, Flex,} from '@chakra-ui/react'
import { Route, Routes} from 'react-router-dom'


import { Header } from './component/Header'
import  {Footer} from './component/Footer'
import { HomeScreen } from './screens/HomeScreen'
import { ProductScreen } from './screens/ProductScreen'
import { CartScreen } from './screens/CartScreen'
import {LoginScreen} from './screens/LoginScreen'
import {RegisterScreen} from './screens/RegisterScreen'
import { ProfileScreen } from './screens/ProfileScreen'
import { ShippingScreen } from './screens/ShippingScreen'
import { PaymentScreen } from './screens/paymentScreen'
import { PlaceOrderScreen } from './screens/PlaceOrderScreen'


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
                    <Route path='/login' element={<LoginScreen/>} />
                    <Route path='/register' element={<RegisterScreen/>}/>
                    <Route path='/profile' element={<ProfileScreen/>}/>
                    <Route path='/shipping' element={<ShippingScreen/>} />       
                    <Route path='/payments' element={<PaymentScreen/>} />       
                    <Route path='/placeorder' element={<PlaceOrderScreen/>} />       

                </Routes>

                </Flex>

                
            <Footer />
                
            </div>
            
            
        </>
    )
}