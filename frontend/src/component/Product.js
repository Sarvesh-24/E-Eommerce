import { Box, Flex, Link, Image, Heading, Text } from "@chakra-ui/react";
import { Rating } from "./Rating";
import { Link as RouterLink } from "react-router-dom";

export const Product = ({ product }) => {
  return (
    <Link
      as={RouterLink}
      to={`/product/${product._id}`}
      _hover={{ textDecor: "none" }}
    >
      <Box
        maxW="sm"
        borderRadius="lg"
        overflow="hidden"
        bgColor="white"
        transform="all"
        _hover={{ shadow: "md" }}
      >
        <Image
          src={product.img}
          alt={product.name}
          minH="360px"
          objectFit="cover"
        />
        <Flex py="4" px="4" direction="column" justifyContent="space-between">
          <Heading as="h4" mb="3" fontSize="lg">
            {product.name}
          </Heading>

          <Flex alignItems="center" justifyContent="space-between">
            <Rating value={product.rating} />
            <Text fontSize="2xl" fontWeight="bold" color="blue.600">
              ${product.price}
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Link>
  );
};
