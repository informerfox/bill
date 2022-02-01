import React from 'react';
import Card from '../Card';
import {useSelector} from 'react-redux';
import { Grid, GridItem } from '@chakra-ui/react'

function Products() {
  const items = useSelector(state => state.product.items);
  console.log(items);

  return <div>Products
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
