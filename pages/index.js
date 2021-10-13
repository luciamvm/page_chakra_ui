import { Box, BoxProps, Center, Flex, Grid, Heading, Spacer} from '@chakra-ui/layout';
import { Image } from "@chakra-ui/react";



export default function Home() {
  return (
  <Flex justifyContent="center">
    <Box>
      <Image src='/firstImage.jpg' alt="Header Image" width="1215" height="645" opacity="0.53"/>
      <Box>
        <Heading mt={100} align="center" fontSize="40" fontFamily="SegoeUi, Segoe UI" color="#4f60b6">Includes the following</Heading>
        <Grid templateColumns="repeat(2, 1fr)">
          <Box w="50%" text="i'm a text">
            <text>I'm a text</text>
          </Box>
          
          <Box w="50%" text="i'm a text">
            <text>I'm a text</text>
          </Box>
            

        </Grid>
      </Box>
      
    </Box>
    
  </Flex>
  )
}



