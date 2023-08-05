import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react"


export const Message = ({type="info", children}) => {

    return(
        <>
            <Alert status={type}>
                <AlertIcon />
                <AlertTitle>{children}</AlertTitle>
            </Alert>
        </>
    )
};

export default Message;