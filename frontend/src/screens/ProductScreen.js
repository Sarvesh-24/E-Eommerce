import {
  Flex,
  Grid,
  Text,
  Divider,
  Button,
  Heading,
  Image,
  Select,


} from "@chakra-ui/react";
import { useParams, useNavigate,Link as RouterLink } from "react-router-dom";
import { useEffect, useState} from "react";
import {useSelector, useDispatch} from 'react-redux'



import { Rating } from "../component/Rating";
import { listProductDetails } from "../actions/productActions";
import { Loader } from "../component/Loader";
import {Message} from '../component/Message'


export const ProductScreen = () => {

    const {id} = useParams();

    // const product = products.find(product => product._id === +id)

    const [qty, setQty] = useState(1)


    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const productDetails = useSelector((state) => state.productDetails)

    const {loading, product, error} = productDetails

    useEffect(() => {

      dispatch(listProductDetails(id))
     

    }, [id, dispatch])

    const addToCartHandler = () => {

        navigate(`/cart/${id}?qty=${qty}`)
    }

    return (

        <>
          <Flex mb="5">
            <Button as={RouterLink} to="/" colorScheme="gray">Go Back</Button>

          </Flex>
          {
            loading ? (<Loader/>) : error ? (<Message type="error">{error}</Message>) : (<Grid templateColumns={{base:"1fr", md:"2fr 1fr"}} gap="10">

            {/* Column 1 */}
            <Image src={product.img} alt={product.name} borderRadius="md"></Image>

            
            {/* Column 2 */}
            <Flex direction="column">
                <Heading 
                as="h6" 
                fontSize="base" 
                color="gray.500">
                    {product.brand}
                </Heading>
                <Heading 
                as="h1" 
                fontSize="big" 
                color="gray.500">
                    {product.name}
                </Heading>
                <Rating 
                value={product.rating} 
                text={`${product.numReviews} reviews`}>
                </Rating>

                <Heading 
                    as="h5"
                    my="5" fontSize="4xl" fontWeight="bold" color="teal.600">${product.price}
                 </Heading>
                 <Text>{product.description}</Text>
            </Flex>

            {/* Column 3*/}

            <Flex direction="column">
                <Flex justifyContent="space-between" py="2">
                    <Text>Price:</Text>
                    <Text fontWeight="bold">{product.price}</Text>
                </Flex>

                <Flex justifyContent="space-between">
                    <Text>Status:</Text>
                    <Text fontWeight="bold">{product.countInStock > 0 ? 'In stock' : 'Out of stock'}</Text>
                </Flex>

                <Divider />

                {product.countInStock > 0 && (
                  <Flex justifyContent="space-between" py="2">
                    <Text>Qty:</Text>
                    <Select value={qty} onChange={(e) => setQty(e.target.value)} width="30%">
                        {[...Array(product.countInStock).keys()].map(i => (
                          <option key={i + 1} value={i +1}>{i+1}</option>
                        ))}
                    </Select>
                  </Flex>
                )}

                <Button bgColor="gray.800" textTransform="uppercase" letterSpacing="wide" colorScheme="teal" my="2"disabled={product.countInStock === 0}
                onClick={addToCartHandler}
                >Add to cart</Button>
            </Flex>
          </Grid>)


          }
        </>
    )
};
