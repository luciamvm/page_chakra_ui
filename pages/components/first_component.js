import { Box, Text, VStack } from "@chakra-ui/layout"


function FirstComponents({heading, svg, text}) {
    return (
        <VStack spacing={4} align='stretch' ml={[20, 0]}>
            <Box mb={6}>{svg}</Box>
            <Box ml={[100, 0]}>
                <Text fontSize={['28', '20']} fontFamily="Gotham-Bold" color="#4F60B6" mb={4}>{heading}</Text>
                <Text fontSize={['24','16']} fontFamily="Gotham-Book">{text}</Text>
            </Box>
        </VStack> 
        
    )
}

export default FirstComponents