import React from 'react';
import Card from '../Card';
import {useSelector} from 'react-redux';
import { Box, Grid, GridItem,Text} from '@chakra-ui/react'

function Products() {
  const items = useSelector(state => state.product.items);
  const money = useSelector(state => state.product.money);

  return <div>
    <Box mt={2} mb={4} bg='green.400' color='white' height='80px'  >
      <Text fontSize={40} fontWeight={500} > $ {money} </Text> 
      </Box>


    <Grid templateColumns='repeat(3, 1fr)' gap={4}>
      {items.map((item)=>(
      <GridItem key={item.id}>
        <Card id={item.id}/>
        </GridItem>
      )
      )
    }
    </Grid>
  </div>;
}

export default Products;
