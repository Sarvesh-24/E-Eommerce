import {
  Flex,
  Icon,
  Grid,
  HEading,
  Text,
  Divider,
  Button,
  Heading,
  Image 

} from "@chakra-ui/react";
import { useParams, Link as RouterLink } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from 'axios'


import { products } from "../products";
import { Rating } from "../component/Rating";




export const ProductScreen = () => {

    const {id} = useParams();

    // const product = products.find(product => product._id === +id)
    
    const [product, setProduct] = useState({});

    useEffect(() => {

      const fetchProduct = async () =>{

        const {data} = await axios.get(`/api/products/${id}`);

        setProduct(data);
      
       }

       fetchProduct()

    }, [])

    return (

        <>
          <Flex mb="5">
            <Button as={RouterLink} to="/" colorScheme="gray">Go Back</Button>

          </Flex>
          <Grid templateColumns={{base:"1fr", md:"2fr 1fr"}} gap="10">

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

                <Button bgColor="gray.800" textTransform="uppercase" letterSpacing="wide" colorScheme="teal" my="2"disabled={product.countInStock === 0}>Add to cart</Button>
            </Flex>
          </Grid>
        </>
    )
};
