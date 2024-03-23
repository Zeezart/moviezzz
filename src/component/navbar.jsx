import React from "react"
import {Box, Text,Image} from "@chakra-ui/react"
import logo from "../assets/logo.svg"

function Navbar(){
    return(
        <Box display="flex" justifyContent="space-between" alignItems="center" p={{sm: "3rem 3rem", md:"3rem 6rem", lg:"3rem 6rem"}}>
            <Image src={logo}/>
            <Box display="flex" gap="2rem">
                <Text color="#A8AEBF" fontSize="1rem"pb="0.5rem" borderBottom="3px solid #7B6EF6">Home</Text>
            </Box>
        </Box>
    )
}

export default Navbar