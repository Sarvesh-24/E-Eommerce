import { Grid, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'


import { Product } from "../component/Product";
import { listProducts } from '../actions/productActions'


export const HomeScreen = () => {

    const dispatch = useDispatch(); 

    const productList = useSelector(state => state.productList);

    const {loading,error,products} = productList;

    useEffect(() => {

      dispatch(listProducts());

    },[])

  return (
    <>
      <Heading as="h2" mb="8" fontSize="3xl">
        Latest Product
        <Grid templateColumns="repeat(4, 1fr)" gap="8">
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </Grid>
      </Heading>
    </>
  );
};
