import { Box } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Select,Input,Button } from '@chakra-ui/react'
import { useAuth0 } from "@auth0/auth0-react";
import Logout from "./Logout";
import Login from "./Login";
import Admin from "./Admin";
function Navbar() {
  const { user, isAuthenticated, isLoading ,logout} = useAuth0();
    return (<div>
        <Box bg='#1A202C' w='100%' p={6} color='white'>
        <HStack spacing='24px'>
  <Box w='90px' h='40px' bg=''>
    <img src="https://www.linkpicture.com/q/FashionCliq.png" alt="logo" />
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
  
</HStack>

</Box>
    </div>)
}
export default Navbar