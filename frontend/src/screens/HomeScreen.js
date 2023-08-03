import { Flex, Grid, Heading } from "@chakra-ui/react";

import { Product } from "../component/Product";
import { products } from "../products";

export const HomeScreen = () => {
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
