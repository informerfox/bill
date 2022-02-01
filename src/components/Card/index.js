import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Image, Text } from '@chakra-ui/react'

function Card({ id }) {
  const items = useSelector(state => state.product.items);
  const item = items.find((tmp) => tmp.id === id);

  return (
    <Box w='100%' p={4} color='black' borderWidth='1px'  alignItems='center'>
      <Image src={item.image} />
      <Text fontSize={25} fontWeight={700}>
        {item.productName}
      </Text>
      <Box>
        $ {item.productPrice}
      </Box>
    </Box>);
}

export default Card;
