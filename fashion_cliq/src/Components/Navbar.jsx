// import { Box } from '@chakra-ui/react'
// import { Stack, HStack, VStack } from '@chakra-ui/react'
// import { Select,Input,Button } from '@chakra-ui/react'
import { useAuth0 } from "@auth0/auth0-react";
import Logout from "./Logout";
import Login from "./Login";
 import Admin from "./Adminlogin";
// import { BsCartCheck } from "react-icons/bs";
// import { Navigate,Link,useNavigate } from "react-router-dom";

// function Navbar() {
//   let navigate = useNavigate(); 
//   const Gotocart = () =>{ 
//     let path = `/Cartitems`; 
//     navigate(path);
//   }
//   let navigatehome = useNavigate(); 
//   const Imagehome = () =>{ 
//     let path = `/`; 
//     navigatehome(path);
//   }
  // const { user, isAuthenticated, isLoading ,logout} = useAuth0();
//     return (<div>
//         <Box bg='#1A202C' w='100%' p={6} color='white'>
//         <HStack spacing='24px'>
//   <Box _hover={{cursor:"pointer"}} w='90px' h='40px' bg=''>
//     <img  onClick={Imagehome}  src="https://www.linkpicture.com/q/FashionCliq.png" alt="logo" />
//   </Box>
//   <Box w='40px' h='40px' bg=''>
//   <Select  w={200} placeholder='Category'>
//   <option  value='option1'>Men's Fashion</option>
//   <option value='option2'>Women's Fashion</option>
//   <option value='option3'>Gadgets</option>
// </Select>
//   </Box>
//   <Box w='40px' h='40px' bg=''>
//   <Input bg="#2D3748" marginLeft='250px' w={500} fontSize="18px" placeholder='Search for Products' />
//   </Box>
//   {/* <Box w='150px' h='40px' bg=''>
//   {isAuthenticated && <p w='35px' h='40px' bg=''>{user.nickname}</p>}
//   </Box> */}
  
//     {isAuthenticated ? <Box w='35px' h='40px' bg=''><Logout/></Box>:<Box w='35px' h='40px' bg=''><Login/></Box>}
  
//   <Box w='40px' h='40px' bg=''>
//   <Admin/>
//   </Box>
//   <Box _hover={{cursor:"pointer"}}  w='40px' h='40px' bg=''>
//     <BsCartCheck onClick={Gotocart} fontSize="30px"/>
    
//   </Box>
  
  
// </HStack>
// </Box>
//     </div>)
// }
// export default Navbar
import { BsCartCheck } from "react-icons/bs";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Input,
  Heading,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { user, isAuthenticated, isLoading ,logout} = useAuth0();
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
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue('#1A202C', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Text _hover={{cursor:"pointer"}}
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}>
            <img  width="70px" onClick={Imagehome}  src="https://www.linkpicture.com/q/FashionCliq.png" alt="logo" />
          </Text>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
        <Input bg="#2D3748" marginRight={100}  w={500} fontSize="18px" placeholder='Search for Products' />
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          {/* <Button
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}>
            Sign In
          </Button> */}
          {isAuthenticated && <Heading as="h6" size='md' color="white">Welcome, {user.nickname}</Heading>}
          {isAuthenticated ? <Logout/> :<Login/>}
          <BsCartCheck _hover={{cursor:"pointer"}} color="white" onClick={Gotocart} fontSize="30px"/>
          <Admin/>
          {/* <Button
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'pink.400'}
            href={'#'}
            _hover={{
              bg: 'pink.300',
            }}>
            Sign Up
          </Button> */}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'xl'}
                fontWeight={500}
                color="white"
                //color="white"
                _hover={{
                  textDecoration: 'none',
                  color: "white",
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      
      _hover={{ bg: useColorModeValue('#1A202C', 'gray.900') }}>
      <Stack  direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Category',
    children: [
      {
        label: 'Mens Fashion',
        subLabel: 'Trending Design to inspire you',
        href: 'MenProduct',
      },
      {
        label: 'Womens Fashion',
        subLabel: 'Up-and-coming Designers',
        href: '#',
      },
      {
        label: 'Gadgets',
        subLabel: 'Up-and-coming Gadgets',
        href: '#',
      },
    ],
  },
  
];