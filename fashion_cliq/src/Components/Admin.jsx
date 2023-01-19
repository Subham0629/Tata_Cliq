import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input
  } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react-use-disclosure';
  import React  from "react";
function Admin() {

        const { isOpen, onOpen, onClose } = useDisclosure()
      
        const initialRef = React.useRef(null)
        const finalRef = React.useRef(null)
      
        return (
          <>
          <Button marginLeft='800px' colorScheme='blue' onClick={onOpen}>Admin</Button>
            <Modal
              initialFocusRef={initialRef}
              finalFocusRef={finalRef}
              isOpen={isOpen}
              onClose={onClose}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Admin Login</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <FormControl>
                    <FormLabel>Please enter your email address</FormLabel>
                    <Input ref={initialRef} placeholder='E-Mail Address' />
                  </FormControl>
      
                  <FormControl mt={4}>
                    <FormLabel>Please enter your Password</FormLabel>
                    <Input placeholder='Password' />
                  </FormControl>
                </ModalBody>
      
                <ModalFooter>
                  <Button colorScheme='blue' mr={3}>
                    Log in
                  </Button>
                  <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
      
}
export default Admin