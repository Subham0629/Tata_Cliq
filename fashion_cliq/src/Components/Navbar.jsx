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
    HStack,
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
  import { Select } from '@chakra-ui/react'
  import { Input } from '@chakra-ui/react'
  
   function Navbar() {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Box >
        <Flex  
          bg={useColorModeValue('green', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
          <Flex 
            flex={{ base: '', md: '' }}
            ml={{ base: '' }}
            display={{ base: 'flex', md: 'none' }}>
              
            {/* <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            /> */}
          </Flex>
          <HStack spacing="20px"  >
            <Box  
              textAlign={useBreakpointValue({ base: '', md: '' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}>
                
              <img src="https://drive.google.com/file/d/1IMNK8rURSN93PPcHTHS-xzNK-cGPpT3Y/view?usp=share_link" width="1000px" alt="subh" />
              
            </Box>
           
            <Box>
          <Select   width="120px"  placeholder='Category'>
  <option value='option1'>Men's Fashion</option>
  <option value='option2'>Women's Fashion</option>
  <option value='option3'>Gadgets</option>
</Select>
          </Box>
          
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              {/* <DesktopNav />  */}
              
            </Flex>
            
          </HStack>
        
          
  
          <Flex
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
            <Button
              as={'a'}
              fontSize={'sm'}
              fontWeight={400}
              variant={'link'}
              href={'#'}>
              Sign In
            </Button>
            <Button
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'black.400'}
              href={'#'}
              _hover={{
                bg: 'pink.300',
              }}>
              Log Out
            </Button>
            <Button
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'black.400'}
              href={'#'}
              _hover={{
                bg: 'pink.300',
              }}>
              Admin
            </Button>
          </Flex>
        </Flex>
  
        {/* <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse> */}
      </Box>
    );
  }
  
  // const DesktopNav = () => {
  //   const linkColor = useColorModeValue('gray.600', 'gray.200');
  //   const linkHoverColor = useColorModeValue('gray.800', 'white');
  //   const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
  //   return (
  //     <Stack direction={'row'} spacing={4}>
  //     </Stack>
  //   );
  //};
  
  
  
  // const MobileNav = () => {
  //   return (
  //     <Stack
  //       bg={useColorModeValue('white', 'gray.800')}
  //       p={4}
  //       display={{ md: 'none' }}>
    
  //     </Stack>
  //   );
  // };
  
  export default Navbar