import React from "react"
import { useDisclosure } from "@chakra-ui/react"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Box, Image, Text
  } from '@chakra-ui/react'

function Modall({selectedMovie, onOpen}){
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    
                    <ModalCloseButton />
                    <ModalBody>
                        <Box display="flex" gap="2rem" alignItems="center" p="1rem" m="1rem 0">
                            <Image src={selectedMovie?.image} width="10rem"/>
                            <Box>
                                <Text fontWeight="bold">{selectedMovie?.title}</Text>
                                <Text fontSize="0.7rem" color="#e1e1e1">{selectedMovie?.genre}</Text>
                                <Text m="1rem 0" fontSize="0.7rem">{selectedMovie?.description}</Text>
                                <Text fontSize="0.7rem">Duration: {selectedMovie?.duration}</Text>
                                <Text fontSize="0.7rem">Rating: {selectedMovie?.rating}/10</Text>
                                <Text fontSize="0.7rem">Starring: {selectedMovie?.starring[0]} and {selectedMovie?.starring[1]}</Text>
                            </Box>
                        </Box>
                    </ModalBody>
            
                   
                </ModalContent>
            </Modal>
    )

}

export default Modall