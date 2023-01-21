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
    HStack
  } from '@chakra-ui/react';
  import { Grid, GridItem } from '@chakra-ui/react';
  function handleDelete(id){
    axios.delete(`http://localhost:3000/cart/${id}`)
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
  }

function Cartitems(){
const [data,setData]=useState([])
const [quantity,setquantity]=useState(1)
const [pri,setpri]=useState(0)
var newprice=0
const handleDataChange = (id,count,price,value) => {
  setquantity(quantity+value)
  setpri(price)
  console.log(quantity)
  newprice=price
  console.log(newprice, newprice*quantity)
    var updatedData = data.map((item) =>
    // {if(item.id === id){
    //     if(value=="1"){
    //   { ...item,price:item.price +item.price }
    //     }elseif(value=="-1"){
    //       { ...item
    //         ,price:item.price - item.price }
    //     }
    //    }}
       
      (item.id==id) ? {...item,price:price*quantity}:item
    );
    setData(updatedData);
  };

useEffect(()=>{
    axios.get('http://localhost:3000/cart')
  .then(function (response) {
    // handle success
    setData(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
},[])
//console.log(data)
 return (
<>
<div><Heading>Total Price:{data.reduce((acc,curr) =>(acc+curr.price),0)}</Heading>
<Button colorScheme='blue'>Buy Now</Button>
</div>
 <Grid templateColumns='repeat(5, 1fr)' gap={6}>
    {data.map((el)=>  (
    <Center key={el.id} py={12}>
      <Box  _hover={{cursor:"pointer"}}
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
            <Text fontWeight={800} fontSize={'md'}>
              Rating:{el.rating}
          
            </Text>
            <Button onClick={()=>handleDelete(el.id)} variant='outline' colorScheme='blue'>
        Delete
      </Button>
          </Stack>
          <HStack>
            <Box><Button onClick={()=>handleDataChange(el.id,el.count,el.price, -1)}>-</Button></Box>
            <Box>{quantity}</Box>
            <Box><Button onClick={()=>handleDataChange(el.id,el.count,el.price, 1)}>+</Button></Box>
          </HStack>
        </Stack>
      </Box>
    </Center>
  ))}
  </Grid>
  
  </> )
}

export default Cartitems