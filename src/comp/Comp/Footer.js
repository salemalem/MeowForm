import React from 'react';
import {Box , Text , Flex , useMediaQuery } from '@chakra-ui/react';
import {Link} from "react-router-dom";

function Footer(props) {
    const [check] = useMediaQuery("(min-width: 1025px)")
    return (
        <Box backgroundColor="#000" >
         <Box padding="5%" >

             <Box>
               <Text 
               align="center"
               fontSize="3xl"
               bgGradient="linear(to-l, #ec9f05 ,#ff4e00)"
               bgClip="text"
               fontWeight="extrabold">
                   Meow Forms <Text color="#fff"> 🐱</Text>
               </Text>
               <Flex margin="2%"  color="#fff" align="center" ml={check ?"39%":"6%"}>

                   
                  <Box ml="4%">

                   <a href="https://buymeacoffee.com/tewarig" target="_blank">
                       Help me keep Meow Form Free ☕ 
                   </a>
                  </Box>
                
               </Flex>
               <Flex margin="2%"  color="#fff" align="center" ml={check ?"44%":"33%"}>

               <Box ml="4%">

                  <a href="https://twitter.com/tewarig" target="_blank">
                  🐦 @oyeTewari
                  </a>
              </Box>
              </Flex>
               <Flex>

                   
               </Flex>
             </Box>

         </Box>
            
        </Box>
    );
}

export default Footer;