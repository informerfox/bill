import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Button, Center, Image, Input, Text } from '@chakra-ui/react'

function Card({ id }) {
  const items = useSelector(state => state.product.items);
  const item = items.find((tmp) => tmp.id === id);

  return (
    <Box w='100%' h='100%' bg='#EBF8FF'  p={4} color='black' borderWidth='1px'  alignItems='center'>
      <Image src={item.image} m='auto' />
      <Text fontSize={25} fontWeight={700}>
        {item.productName}
      </Text>
      <Text>
        $ {item.productPrice}
      </Text>
      <Box  alignItems='center' m='auto'>
        <Button colorScheme='teal' width='100px' height='40px' me={4}>Buy</Button>
        <Input type='number'  textAlign='center'  width='100px' height='40px' />
        <Button colorScheme='red' width='100px' height='40px' ms={4} >Sell</Button>
      </Box>
    </Box>);
}

export default Card;
