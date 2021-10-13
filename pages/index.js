import { Box, BoxProps, Center, Flex, Heading, Spacer} from '@chakra-ui/layout';
import { Image } from "@chakra-ui/react";



export default function Home() {
  return (
  <Flex justifyContent="center">
    <Box>
      <Image src='/firstImage.jpg' alt="Header Image" width="1215" height="645" opacity="0.53"/>
      <Box>
        <Heading mt={100} align="center" fontSize="40" fontFamily="SegoeUi, Segoe UI" color="#4f60b6">Includes the following</Heading>
      </Box>
    </Box>
    
  </Flex>
  )
}



