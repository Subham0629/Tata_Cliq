import { Box } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Select,Input,Button } from '@chakra-ui/react'
import { useAuth0 } from "@auth0/auth0-react";
import Logout from "./Logout";
import Login from "./Login";
import Admin from "./Adminlogin";
import { BsCartCheck } from "react-icons/bs";
import { Navigate,Link,useNavigate } from "react-router-dom";

function Navbar() {
  let navigate = useNavigate(); 
  const Gotocart = () =>{ 
    let path = `/Cartitems`; 
    navigate(path);
  }
  let navigatehome = useNavigate(); 
  const Imagehome = () =>{ 
    let path = `/`; 
    navigatehome(path);
  }
  const { user, isAuthenticated, isLoading ,logout} = useAuth0();
    return (<div>
        <Box bg='#1A202C' w='100%' p={6} color='white'>
        <HStack spacing='24px'>
  <Box _hover={{cursor:"pointer"}} w='90px' h='40px' bg=''>
    <img  onClick={Imagehome}  src="https://www.linkpicture.com/q/FashionCliq.png" alt="logo" />
  </Box>
  <Box w='40px' h='40px' bg=''>
  <Select  w={200} placeholder='Category'>
  <option  value='option1'>Men's Fashion</option>
  <option value='option2'>Women's Fashion</option>
  <option value='option3'>Gadgets</option>
</Select>
  </Box>
  <Box w='40px' h='40px' bg=''>
  <Input bg="#2D3748" marginLeft='250px' w={500} fontSize="18px" placeholder='Search for Products' />
  </Box>
  {/* <Box w='150px' h='40px' bg=''>
  {isAuthenticated && <p w='35px' h='40px' bg=''>{user.nickname}</p>}
  </Box> */}
  
    {isAuthenticated ? <Box w='35px' h='40px' bg=''><Logout/></Box>:<Box w='35px' h='40px' bg=''><Login/></Box>}
  
  <Box w='40px' h='40px' bg=''>
  <Admin/>
  </Box>
  <Box _hover={{cursor:"pointer"}}  w='40px' h='40px' bg=''>
    <BsCartCheck onClick={Gotocart} fontSize="30px"/>
    
  </Box>
  
  
</HStack>
</Box>
    </div>)
}
export default Navbar