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
  } from '@chakra-ui/react';
  import { Grid, GridItem } from '@chakra-ui/react'
function LandingPage(){
const [data,setData]=useState([])
useEffect(()=>{
    axios.get('http://localhost:3000/womensproduct')
  .then(function (response) {
    // handle success
    console.log(response.data)
    setData(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
},[])
//console.log(data)
const IMAGE =
  'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';

 return (
<>
{/* <LandingSlider/> */}
 <Grid templateColumns='repeat(5, 1fr)' gap={6}>
    {data.map((el)=>  (
    <Center py={12}>
      <Box _hover={{bg:"gray",cursor:"pointer"}}
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        //bg={useColorModeValue('white', 'gray.800')}
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
            //backgroundImage: `url(${IMAGE})`,
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
            <Text fontWeight={800} fontSize={'xl'}>
              {el.rating}
          
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  ))}
  </Grid></> )
}
export default LandingPage