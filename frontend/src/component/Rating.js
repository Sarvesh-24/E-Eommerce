
import {Flex, Icon, Box, Text} from '@chakra-ui/react'
import {IoStar, IoStarOutline, IoStarHalf} from 'react-icons/io5'


export const Rating = ({value, text, color="red.500"}) => {

    return(

        <>
            <Flex alignItems="flex-start">
                <Box mr="2">
                <Icon as={value >= 1 ? IoStar : value >= 0.5 ? IoStarHalf : IoStarOutline}
                color={color}></Icon>
                <Icon as={value >= 2 ? IoStar : value >= 1.5 ? IoStarHalf : IoStarOutline}
                color={color}></Icon>
                <Icon as={value >= 3 ? IoStar : value >= 2.5 ? IoStarHalf : IoStarOutline}
                color={color}></Icon>  <Icon as={value >= 4 ? IoStar : value >= 3.5 ? IoStarHalf : IoStarOutline}
                color={color}></Icon>  <Icon as={value >= 5 ? IoStar : value >= 4.5 ? IoStarHalf : IoStarOutline}
                color={color}></Icon> 
                </Box> 
                <Text>{text && text}</Text>
            </Flex>
        </>
    )
}