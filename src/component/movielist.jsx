import React, {useState} from "react"
import {Box, Text,Image, Card, CardBody, Input, Button} from "@chakra-ui/react"
import star from "../assets/star.svg"
import { movieData } from "./data"
import { useDisclosure } from "@chakra-ui/react"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'


function Movie(){

    const [selectedMovie, setSelectedMovie] = useState(null)

    const { isOpen, onOpen, onClose } = useDisclosure()
    const openModal = (data) => {
        console.log(data.id)
        setSelectedMovie(data)
        
        onOpen()
    }
    return(
        <Box  m="2rem 0">
           
                <Text color="#7B6EF6" fontWeight="600">All Movies</Text>
            <Box display="flex" gap="1rem" flexWrap="wrap" alignItems="stretch" width="100%" m="1rem 0">
                    {
                        movieData.map((data) => {
                            return(
                                <Card bg="#20283E" size="sm" width="fit-content" flex="1 1 auto" textAlign="center" onClick={()=>openModal(data)}>
                                <CardBody color="#fff" margin="auto">
                                    <Image src={data.image} width="10rem" />
                                    <Box>
                                        <Text fontSize="1rem" fontWeight="500">{data.title}</Text>
                                        <Text>{data.genre}</Text>
                                        <Box display="flex" alignItems="center" m="auto" p="auto" gap="8px" textAlign="center">
                                            <Image  src={star}/>
                                            <Text>{data.rating}</Text>
                                        </Box>

                                    </Box>
                                </CardBody>
                                </Card>
                            )
                        })
                    }
            
            </Box>

            <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    
                    <ModalCloseButton />
                    <ModalBody>
                        <Box display="flex" gap="2rem" alignItems="center" p="1rem" m="1rem 0">
                            <Image src={selectedMovie?.image} width={{base:"5rem", sm:"5rem", lg:"10rem"}}/>
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
            </>
        </Box>
    )
}

export default Movie