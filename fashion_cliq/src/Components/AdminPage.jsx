import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
} from '@chakra-ui/react'
import {useDisclosure} from "react";
import { Button, ButtonGroup,Heading } from '@chakra-ui/react'
import { useState ,useEffect,useRef} from "react";
import React from "react";
import axios from "axios";
import AdminAddProduct from "./AdminAddProduct";
import { useNavigate } from "react-router-dom";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Image,
} from '@chakra-ui/react';
import { Input } from '@chakra-ui/react'
export default function AdminPage() {
    let navigate = useNavigate(); 
  const GotoHome = () =>{ 
    let path = `/`; 
    navigate(path);
  }
const[data,setData]=useState([])

useEffect(()=>{
   axios.get(`http://localhost:3000/mensproduct`)
  .then(function (response) {
    setData(response.data)
    
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
},[])
  const handleOnchange=(e)=>{
   let query=e.target.value
   console.log(query)
   axios.get(`http://localhost:3000/mensproduct`, {
    params: {
      q: query
    }
  })
  .then(function (response) {
    setData(response.data);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

  }
  // const handleEdit=(e)=>{
  //   let query=e.target.value
  //   console.log(query)
  //   axios.patch(`http://localhost:3000/mensproduct`, {
  //    params: {
  //      q: query
  //    }
  //  })
  //  .then(function (response) {
  //    setData(response.data);
  //  })
  //  .catch(function (error) {
  //    console.log(error);
  //  })
  //  .finally(function () {
  //    // always executed
  //  });
 
  //  }
 function handleDelete(id){
  axios.delete(`http://localhost:3000/mensproduct/${id}`)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })

 }

 
  return (
    <div >
        <Button onClick={GotoHome} colorScheme='blue'>LogOut</Button>
         <AdminAddProduct/>
        <Input width={500} marginTop="20px" className = "searchAddress"  placeholder = "Search Data" onChange={handleOnchange}/>

        
        <TableContainer whiteSpace="wrap">
          <Table className="table">
            <Thead >
              <Tr>
                <Th><Heading as='h4' size='md'>Brand</Heading></Th>
                <Th><Heading as='h4' size='md'>Title</Heading></Th>
                <Th><Heading as='h4' size='md'>ImageUrl</Heading></Th>
                <Th><Heading as='h4' size='md'>Price</Heading></Th>
                <Th><Heading as='h4' size='md'>Edit</Heading></Th>
                <Th><Heading as='h4' size='md'>Delete Item</Heading></Th>
              </Tr>
            </Thead>
            <Tbody> 
              {data.map((el)=> (
                <Tr key={el.id} className = "houseDetails"  >
                <Td  className = "name" >{el.brand}</Td>
                <Td className = "ownersName" >{el.title}</Td>
                <Td  className = "address" ><Image width="30%"  src={el.image}></Image></Td>
                <Td className = "areaCode" >Rs {el.price}</Td>
                <Td _hover={{cursor:"pointer"}} className = "edit"  ><Button colorScheme="blue">Edit</Button>  </Td>
                <Td _hover={{cursor:"pointer"}} className = "delete" onClick={()=>handleDelete(el.id)} ><Button colorScheme="blue">Delete</Button>  </Td>
            </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
    </div>
  )
}


// function AdminPage(){
// return <div>dasdfasd</div>
// }
// export default AdminPage

