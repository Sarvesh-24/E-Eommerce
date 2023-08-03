import { useState } from 'react';
import {Link as RouterLink} from 'react-router-dom'
import {Flex, Heading, Box, Icon, Link} from '@chakra-ui/react';
import {HiShoppingBag, HiUser, HiOutlineMenuAlt3} from "react-icons/hi"


const MenuItem = ({children , url}) => {

    

    return(

        <Link as={RouterLink} to={url} fontSize="sm"
            letterSpacing="wide"
            color="whiteAlpha.600"
            fontWeight="bold"
            textTransform="uppercase"
            mr="5"
            display="block"
            _hover={{color:"whiteAlpha.800"}}
            mt={{base:"4", md:"0" }}
        >{children}</Link>
    )
}


export const Header = () => {

    const [showItems , setShow] = useState(false);

    

    return(

        <>
            <Flex as='header' align="center" justify="space-between"
            wrap="wrap"
            py="6"
            px="6"
            bgColor="gray.800"
            w="100%"
            top="0"
            zIndex="2"
            pos="fixed"
            >
                <Flex align="center">

                    <Heading
                        as="h1"
                        color="whiteAlpha.800"
                        fontWeight="bold"
                        size="md"
                        letterSpacing="md"
                    >

                    <Link 
                        as={RouterLink}
                        to='/' 
                        _hover={{color:"grey.500" , textDecor:"none"}}>
                        E-commerce

                    </Link>

                    </Heading>   
                </Flex>

                <Box 
                    display={{base:'block' , md:"none", sm:"block"}}
                    onClick={() => setShow(!showItems)}
                    >
                    <Icon 
                        as={HiOutlineMenuAlt3} 
                        color="white" 
                        w="6"
                        h="6"

                        />
                </Box>

                <Box
                    display={{base: showItems ? "block" : "none" , md:"flex" }}
                    width={{base:'full' , md:"auto"}}
                    >

                    <MenuItem url="/">

                        <Flex alignItems="center">
                           <Icon as={HiShoppingBag} w="4"
                           h="4"
                           mr="1"
                            /> Cart

                        </Flex>
                    </MenuItem>
                    <MenuItem url="/">

                        <Flex alignItems="center">
                           <Icon as={HiUser} 
                           w="4"
                           h="4"
                           mr="1"
                            /> Log-In

                        </Flex>
                    </MenuItem>

                </Box>
            </Flex>
        </>
    );
};
