import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button, Center, Image, Input, Text } from '@chakra-ui/react'
import {updateCount} from "../../redux/Product/productSlice";
import NumberFormat from 'react-number-format';

function Card({ id }) {
  const items = useSelector(state => state.product.items);
  const money = useSelector(state => state.product.money);
  const initialMoney=useSelector(state => state.product.initialMoney);
  
  const item = items.find((tmp) => tmp.id === id);
  const dispatch = useDispatch();

  const [count,setCount] = useState(item.count);
  const [isBuyable,setisBuyable] =useState(false);
  const [isSellable,setisSellable] =useState(true);
  let maximumBuy=Math.floor(initialMoney/item.productPrice);
  console.log(maximumBuy);
  
  useEffect(() => {
    if(money!==0){
    dispatch(updateCount({id:item.id, count:count}))
    }
   
    
    if(count>maximumBuy){
      setCount(Number(maximumBuy));
    }
    
      console.log("carpım" ,(Number(count*item.productPrice)))
     
    

    control();
  }, [count]);

  useEffect(() => {
    if(item.productPrice>money ){
      setisBuyable(true);
    }
    if(item.productPrice<money ){
      setisBuyable(false);
    }
  }, [money]);
  
  
  const buy =()=>{
    setCount(Number(count)+1);
  }

  const sell =()=>{
    setCount(Number(count)-1);
  }
  const control =()=>{
    if(count > 0){
      setisSellable(false);
    }
    if(count == 0){
      setisSellable(true);
    }
    
  }
  
 

  return (
    <Box w='100%' h='100%' bg='#EBF8FF'  p={4} color='black' borderWidth='1px'  alignItems='center'>
      <Image src={item.image} m='auto' />
      <Text fontSize={25} fontWeight={700}>
        {item.productName}
      </Text>
      <Text>
        <NumberFormat value={item.productPrice} displayType='text' thousandSeparator={true} prefix={'$'} />
      </Text>
      <Box  alignItems='center' m='auto'>
        <Button colorScheme='teal' isDisabled={isBuyable} width='100px' height='40px' me={4}  onClick={()=>buy()}>Buy</Button>
        <Input type='number' min={0} max={maximumBuy} textAlign='center' value={count} onChange={(e)=>{setCount(e.target.value)}}  width='100px' height='40px' />
        <Button colorScheme='red'  isDisabled={isSellable} width='100px' height='40px' ms={4} onClick={()=>sell()} >Sell</Button>
      </Box>
    </Box>);
}

export default Card;
