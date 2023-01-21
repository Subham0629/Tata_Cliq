

import axios from "axios";
import {useState,useEffect  } from "react";
import LandingSlider from "./LandingSlider";
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Button,
  } from '@chakra-ui/react';
  import { Grid, GridItem } from '@chakra-ui/react'
  function AddToCart(id,image,brand,title,price,rating,count=1){
    axios.post("http://localhost:3000/cart", {
      id,image,brand,title,price,rating,count
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

function MenProduct(){
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:3000/mensproduct')
      .then(function (response) {
        // handle success
        setData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    },[])
     return (
    <>
    <LandingSlider/> 
     <Grid templateColumns='repeat(5, 1fr)' gap={6}>
        {data.map((el)=>  (
        <Center key={el.id} py={12}>
          <Box  _hover={{bg:"gray",cursor:"pointer"}}
            role={'group'}
            p={6}
            maxW={'330px'}
            w={'full'}
            boxShadow={'2xl'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={1}>
            <Box
              rounded={'lg'}
              mt={-12}
              pos={'relative'}
              height={'230px'}
              _after={{
                transition: 'all .3s ease',
                content: '""',
                w: 'full',
                h: 'full',
                pos: 'absolute',
                top: 5,
                left: 0,
                filter: 'blur(15px)',
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: 'blur(20px)',
                },
              }}>
              <Image
                rounded={'lg'}
                height={230}
                width={282}
                objectFit={'cover'}
                src={el.image}
              />
            </Box>
            <Stack pt={10} align={'center'}>
              <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                {el.brand}
              </Text>
              <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                {el.title}
              </Heading>
              <Stack direction={'row'} align={'center'}>
                <Text fontWeight={800} fontSize={'xl'}>
                  {el.price}
                </Text>
                <Text textDecoration={'line-through'} color={'gray.600'}>
                  {el.price+1000}
                </Text>
              </Stack>
              <Stack direction={'row'} align={'center'}>
                <Text fontWeight={800} fontSize={'md'}>
                  Rating:{el.rating}
              
                </Text>
                <Button onClick={()=>AddToCart(el.id,el.image,el.brand,el.title,el.price,el.rating)} variant='outline' colorScheme='blue'>
            Add to cart
          </Button>
              </Stack>
            </Stack>
          </Box>
        </Center>
      ))}
      </Grid></> )
    }
    export default MenProduct