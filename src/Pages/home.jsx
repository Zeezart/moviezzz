import React from "react"
import {Box, Text, Heading} from "@chakra-ui/react"
import Search from "../component/search"
import Movie from "../component/movielist"

function Home(){
    return(
        <Box p={{base:"3rem", sm:"3rem 3rem 0", md:"3rem 6rem 0", lg:"3rem 6rem 0"}} >
            <Box width={{sm: "100%", lg:"40%"}}>  
                <Heading fontSize={{ sm: "2rem", md: "3rem", lg: "4rem" }}>Moviezzz</Heading>
                <Text fontSize="1rem" p="1rem 0">Get information about all you favorite movies with just one search</Text>
            </Box>

            <Search />

            <Movie />
        </Box>
    )
}

export default Home