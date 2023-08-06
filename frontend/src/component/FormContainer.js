
import {Flex} from '@chakra-ui/react'


export const FormContainer = ({children, width='xl'}) => {

    return (

        <>
            <Flex
                direction='column'
                boxShadow='md'
                rounded='md'
                bgColor='white'
                p='10'
                width={width}>
                {children}
		    </Flex>

        </>

    )
}