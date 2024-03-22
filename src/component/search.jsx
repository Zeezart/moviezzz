import React , {useState}from "react"
import {Box, Text,Image, Input, Button, Divider, useDisclosure} from "@chakra-ui/react"
import { movieData } from "./data";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'



function Search(){

  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = movieData.filter(item =>
    item.title.toLowerCase()[0] && item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };


  const [selectedMovie, setSelectedMovie] = useState(null)

  const { isOpen, onOpen, onClose } = useDisclosure()
  const openModal = (data) => {
      console.log(data.id)
      setSelectedMovie(data)
      
      onOpen()
  }

  const handleSearch = () => {
    return(filteredData)
  }
    return(
      <Box>

        <Box width={{sm:"100%", md:"80%", lg:"80%"}} m="2rem 0" display="flex" gap="1rem" alignItems="stretch">
            <Input 
              
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <Button bg="#7B6EF6"
              width={{ md: "8rem", lg: "9.6rem" }}
              fontSize={{ md: "0.625rem", lg: "0.875rem" }}
              fontWeight="500" color="#fff" onClick={handleSearch}>Search</Button>
                        
        
        </Box>
       {searchTerm === "" ? null : <Box boxShadow="md" bg="#fff" mb="2rem" p="2rem">
          <Box display="flex" justifyContent="space-between" alignItems="center">
          <Text>Search Results</Text>
          <Text fontSize="0.8rem" color="#d3d3d3" cursor="pointer" onClick={()=> setSearchTerm("")}>Close</Text>
          </Box>
          {filteredData.map((data)=>{
            return(
                <>
                <Box display="flex" gap="2rem" alignItems="center" p="1rem" m="1rem 0"  _hover={{bg:"#f0f0f0"}} onClick={()=>openModal(data)}>
                  <Image src={data.image} width="3rem"/>
                  <Box>
                    <Text fontWeight="bold">{data.title}</Text>
                    <Text>{data.genre}</Text>
                  </Box>
                </Box>
                  <Divider w="95%" m="auto" opacity="40%"/>
                </>
              )
          })}
        </Box>}

        <>
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
            </>
        
      </Box>
    )
}

export default Search