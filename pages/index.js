import { Box, BoxProps, Center, Flex, Grid, GridItem, Heading, Spacer, Stack, Text } from '@chakra-ui/layout';
import { Image, Button } from "@chakra-ui/react";
import DecoImage from './components/deco';
import Nissan from './components/nissan';
import Somersby from './components/somersby';
import Ba from './components/ba';
import Volkswagen from './components/volkswagen';
import Volvo from './components/volvo';
import Sonae from './components/sonae';
import Fnac from './components/fnac';
import Fidelidade from './components/fidelidade';
import ColoredLine from './components/whiteLine';




export default function Home() {
  return (
  <Flex justifyContent="center">
    <Box>
      <Box w={[100, 200, 300]}>
        <div className="page-container-welcome">
          <Box bgColor='black' opacity='60%' height='645px' width='1215px'>
            <div className="logo">
            
              <Box ml={[4,6,8]} mt={[4,6,8]}>
                <Image src="./logo.png"/ >
                <Heading mt={16} mb={8} fontSize="60" fontFamily="Gotham-Bold" color="white">Event guest management</Heading>
                <Box w='45%'>
                  <Text fontSize="16" fontFamily="Gotham-Book" color='white'>
                    This application offers a set of tools for the main needs 
                    of your event - boosting participation, creating greater involvement
                    with your participants and communicating efficiently with your guests, 
                    employees and partners. An integrated solution, which reduces
                    communication costs and maximizes the ROI of your event. It has 
                    an extremely intuitive interface, which allows for full autonomy 
                    of processes in the creation and management of your even
                  </Text>
                  </Box>
              </Box>
      
            
          </div>
          </Box>
        </div>
        
      </Box>
      
      <Box>
        <Heading mt={20} mb={20} align="center" fontSize="40" fontFamily="SegoeUi, Segoe UI" color="#4f60b6">Includes the following</Heading>
        
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <Box w="60%">
              <Box mb={14} ml={10} w={[300, 400, 500]}>
                <Box mb={6}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="76.28" height="53.913" viewBox="0 0 76.28 53.913" mb={4}>
                    <rect id="Retângulo_37" data-name="Retângulo 37" width="74.28" height="51.913" rx="3.388" transform="translate(1 1)" fill="none" stroke="#4d63c3" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"/>
                    <line id="Linha_13" data-name="Linha 13" x2="74.28" transform="translate(1 11.108)" fill="none" stroke="#4d63c3" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"/>
                    <circle id="Elipse_1" data-name="Elipse 1" cx="0.603" cy="0.603" r="0.603" transform="translate(6.356 5.356)" fill="none" stroke="#4d63c3" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"/>
                    <circle id="Elipse_2" data-name="Elipse 2" cx="0.603" cy="0.603" r="0.603" transform="translate(11.843 5.356)" fill="none" stroke="#4d63c3" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"/>
                    <circle id="Elipse_3" data-name="Elipse 3" cx="0.603" cy="0.603" r="0.603" transform="translate(17.456 5.356)" fill="none" stroke="#4d63c3" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"/>
                  </svg>
                </Box>
                
                <Text fontSize="20" fontFamily="Gotham-Bold" color="#4F60B6" mb={4}>Promotional Web Page</Text>
                <Text fontSize="16" fontFamily="Gotham-Book">
                  Users will have at their disposal an online space, where they can select and buy entrance tickets, 
                  and get all the necessary information about the event. Access to registration and attendance confirmation 
                  will also be contemplated.
                </Text>

              </Box>            
          </Box>
          
          <Box w="60%">
            <Box mb={14} ml={10} w={[300, 400, 500]}>
              <Box mb={6}>
                <svg xmlns="http://www.w3.org/2000/svg" width="89.14" height="72.917" viewBox="0 0 89.14 72.917">
                  <path id="Caminho_1" data-name="Caminho 1" d="M675,904.023a3.849,3.849,0,0,1-3.06-1.2,4.337,4.337,0,0,1-2.96,1.2,3.606,3.606,0,0,1-3.661-3.861,4.833,4.833,0,0,1,4.48-5.021,3.194,3.194,0,0,1,2.761,1.36l.221-1.06,2.36.38L674.2,901.2a3.586,3.586,0,0,0-.059.62,1.292,1.292,0,0,0,1.46,1.261c1.42,0,2.54-1.421,2.54-4.081,0-3.7-3.38-7.122-7.881-7.122a7.942,7.942,0,1,0,.159,15.883,8.987,8.987,0,0,0,4.9-1.34l.4.64a9.8,9.8,0,0,1-5.3,1.5,8.743,8.743,0,1,1-.159-17.484c4.9,0,8.722,3.821,8.722,7.922C678.986,902.343,677.205,904.023,675,904.023Zm-4.8-6.822a2.627,2.627,0,0,0-2.4,2.821,1.781,1.781,0,0,0,1.881,1.94,2.672,2.672,0,0,0,2.38-2.88A1.781,1.781,0,0,0,670.2,897.2Z" transform="translate(-648.966 -865.458)" fill="#4f60b6"/>
                  <rect id="Retângulo_38" data-name="Retângulo 38" width="40.556" height="69.495" rx="7.33" transform="translate(1 2.422)" fill="none" stroke="#4d63c3" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"/>
                  <line id="Linha_14" data-name="Linha 14" x2="19.707" transform="translate(11.424 66.125)" fill="none" stroke="#4d63c3" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"/>
                  <path id="Caminho_91" data-name="Caminho 91" d="M733.718,866.458H703.774a3.388,3.388,0,0,0-3.388,3.388v19.648l8.188-7.178h25.144a3.388,3.388,0,0,0,3.388-3.388v-9.082A3.388,3.388,0,0,0,733.718,866.458Z" transform="translate(-648.966 -865.458)" fill="none" stroke="#4d63c3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                  <circle id="Elipse_13" data-name="Elipse 13" cx="1.588" cy="1.588" r="1.588" transform="translate(58.306 7.672)" fill="none" stroke="#4d63c3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                  <circle id="Elipse_14" data-name="Elipse 14" cx="1.588" cy="1.588" r="1.588" transform="translate(67.156 7.672)" fill="none" stroke="#4d63c3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                  <circle id="Elipse_15" data-name="Elipse 15" cx="1.588" cy="1.588" r="1.588" transform="translate(76.403 7.672)" fill="none" stroke="#4d63c3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                </svg>
              </Box>

              <Text fontSize="20" fontFamily="Gotham-Bold" color="#4F60B6" mb={4}>Email/ SMS</Text>
              <Text fontSize="16" fontFamily="Gotham-Book">
                The system allows you to promote your event and send invitations or notifications by email or SMS. It allows you to configure 
                email campaigns and pre-define times for them to be sent.
                All messages are optimized and comply with the legislation and rules of good marketing practices.
              </Text>
            </Box>
          </Box>
        </Grid>

        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <Box w="60%">
            <Box mb={14} ml={10} w={[300, 400, 500]}>
                <Box mb={6}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="76.28" height="53.913" viewBox="0 0 76.28 53.913">
                    <rect id="Retângulo_39" data-name="Retângulo 39" width="74.28" height="51.913" rx="3.388" transform="translate(1 1)" fill="none" stroke="#4d63c3" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"/>
                    <line id="Linha_17" data-name="Linha 17" x2="74.28" transform="translate(1 11.108)" fill="none" stroke="#4d63c3" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"/>
                    <circle id="Elipse_4" data-name="Elipse 4" cx="0.603" cy="0.603" r="0.603" transform="translate(6.356 5.356)" fill="none" stroke="#4d63c3" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"/>
                    <circle id="Elipse_5" data-name="Elipse 5" cx="0.603" cy="0.603" r="0.603" transform="translate(11.843 5.356)" fill="none" stroke="#4d63c3" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"/>
                    <circle id="Elipse_6" data-name="Elipse 6" cx="0.603" cy="0.603" r="0.603" transform="translate(17.456 5.356)" fill="none" stroke="#4d63c3" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"/>
                    <rect id="Retângulo_42" data-name="Retângulo 42" width="19.479" height="6.502" rx="3.251" transform="translate(28.4 39.378)" fill="none" stroke="#4d63c3" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"/>
                    <line id="Linha_24" data-name="Linha 24" x2="50.394" transform="translate(11.843 22.083)" fill="none" stroke="#4d63c3" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"/>
                    <line id="Linha_25" data-name="Linha 25" x2="37.752" transform="translate(11.843 29.487)" fill="none" stroke="#4d63c3" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"/>
                  </svg>
                </Box>

                <Text fontSize="20" fontFamily="Gotham-Bold" color="#4F60B6" mb={4}>Registration</Text>
                <Text fontSize="16" fontFamily="Gotham-Book">
                After receiving the invitation, the users will have access to the attendance confirmation form, where they can confirm/edit their details, 
                fill in the other required fields and confirm the attendance process at the event.
                </Text>
            </Box>
          </Box>

          <Box w="60%">
            <Box mb={14} ml={10} w={[300, 400, 500]}>
                <Box mb={6}> 
                  <svg xmlns="http://www.w3.org/2000/svg" width="43.416" height="66.942" viewBox="0 0 43.416 66.942">
                    <circle id="Elipse_16" data-name="Elipse 16" cx="16.504" cy="16.504" r="16.504" transform="translate(5.204 1)" fill="none" stroke="#4d63c3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                    <path id="Retângulo_43" data-name="Retângulo 43" d="M16.1,0h9.208a16.1,16.1,0,0,1,16.1,16.1V31.935a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V16.1A16.1,16.1,0,0,1,16.1,0Z" transform="translate(1 34.007)" fill="none" stroke="#4d63c3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                  </svg>
                </Box>

                <Text fontSize="20" fontFamily="Gotham-Bold" color="#4F60B6" mb={4}>Guest and attendance</Text>
                <Text fontSize="16" fontFamily="Gotham-Book">
                Contact management is essential for maintaining a relationship with guests. The ability to organize and control this
                information is the key to success for any event. The application provides several features that aim to build stronger 
                relationships leading to a more successful event.
                </Text>
              </Box>
            </Box>

        </Grid>

        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <Box w="60%">
            <Box mb={14} ml={10} w={[300, 400, 500]}>
              <Box mb={6}>
                <svg xmlns="http://www.w3.org/2000/svg" width="76.28" height="53.913" viewBox="0 0 76.28 53.913">
                  <line id="Linha_15" data-name="Linha 15" x2="2.813" y2="2.813" transform="translate(13.871 23.261)" fill="none" stroke="#4d63c3" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"/>
                  <line id="Linha_16" data-name="Linha 16" x1="4.671" y2="4.671" transform="translate(16.724 21.428)" fill="none" stroke="#4d63c3" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"/>
                  <rect id="Retângulo_40" data-name="Retângulo 40" width="74.28" height="51.913" rx="3.388" transform="translate(1 1)" fill="none" stroke="#4d63c3" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"/>
                  <line id="Linha_18" data-name="Linha 18" x2="74.28" transform="translate(1 11.108)" fill="none" stroke="#4d63c3" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"/>
                  <circle id="Elipse_7" data-name="Elipse 7" cx="0.603" cy="0.603" r="0.603" transform="translate(6.356 5.356)" fill="none" stroke="#4d63c3" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"/>
                  <circle id="Elipse_8" data-name="Elipse 8" cx="0.603" cy="0.603" r="0.603" transform="translate(11.843 5.356)" fill="none" stroke="#4d63c3" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"/>
                  <circle id="Elipse_9" data-name="Elipse 9" cx="0.603" cy="0.603" r="0.603" transform="translate(17.456 5.356)" fill="none" stroke="#4d63c3" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"/>
                  <line id="Linha_19" data-name="Linha 19" x2="35.252" transform="translate(28.853 23.763)" fill="none" stroke="#4d63c3" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"/>
                  <line id="Linha_20" data-name="Linha 20" x2="2.813" y2="2.813" transform="translate(13.871 39.252)" fill="none" stroke="#4d63c3" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"/>
                  <line id="Linha_21" data-name="Linha 21" x1="4.671" y2="4.671" transform="translate(16.724 37.419)" fill="none" stroke="#4d63c3" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"/>
                  <line id="Linha_22" data-name="Linha 22" x2="35.252" transform="translate(28.853 39.755)" fill="none" stroke="#4d63c3" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"/>
                </svg>
              </Box>

              <Text fontSize="20" fontFamily="Gotham-Bold" color="#4F60B6" mb={4}>Satisfaction questionnaires</Text>
              <Text fontSize="16" fontFamily="Gotham-Book">
              The creation and sending of questionnaires is an excellent way for you to measure the performance of your event. 
              With this tool you will be able to know the best way to accommodate to the needs of your guests and effectively 
              communicate the nature and benefits of your event.
              </Text>
            </Box>
          </Box>
          
          <Box w="60%">
            <Box mb={14} ml={10} w={[300, 400, 500]}>
              <Box mb={6}>
                <svg xmlns="http://www.w3.org/2000/svg" width="76.28" height="53.913" viewBox="0 0 76.28 53.913">
                  <rect id="Retângulo_41" data-name="Retângulo 41" width="74.28" height="51.913" rx="3.388" transform="translate(1 1)" fill="none" stroke="#4d63c3" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"/>
                  <line id="Linha_23" data-name="Linha 23" x2="74.28" transform="translate(1 11.108)" fill="none" stroke="#4d63c3" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"/>
                  <circle id="Elipse_10" data-name="Elipse 10" cx="0.603" cy="0.603" r="0.603" transform="translate(6.356 5.356)" fill="none" stroke="#4d63c3" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"/>
                  <circle id="Elipse_11" data-name="Elipse 11" cx="0.603" cy="0.603" r="0.603" transform="translate(11.843 5.356)" fill="none" stroke="#4d63c3" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"/>
                  <circle id="Elipse_12" data-name="Elipse 12" cx="0.603" cy="0.603" r="0.603" transform="translate(17.456 5.356)" fill="none" stroke="#4d63c3" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"/>
                </svg>

              </Box>

              <Text fontSize="20" fontFamily="Gotham-Bold" color="#4F60B6" mb={4}>Stats/ Analytics</Text>
              <Text fontSize="16" fontFamily="Gotham-Book">
              It features a secure data infrastructure for a detailed and real-time statistical analysis with several metrics for 
              analysis or export, to help improve strategies and provide a better quality of service to the users.
              </Text>
            </Box>
          </Box>

        </Grid>

        <Box mb={14}>
          <Heading mt={20} mb={6} align="center" fontSize="40" fontFamily="SegoeUi, Segoe UI" color="#4f60b6">Event guest management images</Heading>
          <Center>
            <Box w={[100, 200, 300]}>
              <Text fontSize={{ base: "10", md: "12", lg: "16" }} fontFamily="Gotham-Book" mb={4} align="center">
                Lorem pisum text Lorem pisum text Lorem pisum text.
              </Text>
            </Box>
          </Center>
        </Box>

        

        <Box mb={14}>
          <Heading mt={20} mb={6} align="center" fontSize="40" fontFamily="SegoeUi, Segoe UI" color="#4f60b6">Some of the brands that we’ve worked with</Heading>
          <Center>
            <Box mb={12} w={[400, 500, 600]}>
              <Text fontSize={{ base: "10", md: "12", lg: "16" }} fontFamily="Gotham-Book" mb={4} align="center">
              We have developed numerous challenging projects, all over the years.<br/>
              In our journey we had the privilege of working great brands with wonderful people.
              </Text>
            </Box>
          </Center>
          
          <Grid templateColumns="repeat(3, 0.2fr)">
            <Box w="100%">
                <Box ml={[6, 8, 12]} w={[200, 300, 400]}>
                  <Fidelidade/>
                </Box>          
              </Box>  

              <Box w="100%">
                  <Box w={[200, 300, 400]}>
                    <Fnac/>
                  </Box>          
              </Box>

              <Box w="100%">
                <Box w={[200, 300, 400]}>
                  <Sonae/>
                </Box>          
              </Box>
          </Grid>
          
          <Grid templateColumns="repeat(3, 0.2fr)">
            <Box w="100%">
                <Box ml={[6, 8, 12]} w={[200, 300, 400]}>
                  <Volvo/>
                </Box>          
              </Box>  

              <Box w="100%">
                  <Box w={[200, 300, 400]}>
                     <Volkswagen/>
                  </Box>          
              </Box>

              <Box w="100%">
                <Box w={[200, 300, 400]}>
                  <Ba/>
                </Box>          
              </Box>
          </Grid>

          <Grid templateColumns="repeat(3, 0.2fr)">
            <Box w="100%">
              <Box ml={[6, 8, 12]} w={[200, 300, 400]}>
                <Somersby/>
              </Box>          
            </Box>  

            <Box w="100%">
              <Box w={[200, 300, 400]}>
                <Nissan/>
              </Box>          
            </Box>

            <Box w="100%">
              <Box w={[200, 300, 400]}>
                <DecoImage/>
              </Box>          
            </Box>
          </Grid>
          
        </Box>

        <Box bg="#EAEAEA" w="100%" p={4}>
          <Heading mt={20} mb={6} align="center" fontSize="40" fontFamily="SegoeUi, Segoe UI" color="#4f60b6">CAN'T FIND WHAT YOU ARE LOOKING FOR?</Heading>
          <Center>
            <Box mb={12} w={[300, 400, 500]}>
              <Text fontSize={{ base: "10", md: "12", lg: "16" }} fontFamily="Gotham-Book" mb={4} align="center">
              No problem. Custom-Made Is the best way to go! <br/> Just tell us what you need! We love challenges and great ideas.
              </Text>
            </Box>
          </Center>

          <Box mb={16}>
            <Center>
              <a href='https://www.spic.pt'>
                <Button borderRadius="40px" height="48px" width="200px" bgColor="#4F60B6">Talk to us</Button>
              </a>
            </Center>  
          </Box>  
        </Box>

        <Box bg="#4F60B6" w={[20, 100, 1250]} p={4}>
          <Grid templateColumns="repeat(5, 1fr)" gap={4}>
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              <Box w={[20, 100, 200]} mt={10} ml={5}>
                   <Image src="./logo.png"/>
              </Box>

              <Box w={[20, 100, 200]} mt={10}>
                <a href='https://www.spic.pt'><Text fontSize='13.38' color='white'>www.spic.pt</Text></a><br/>
                <Text fontSize='13.38' color='white'>+351 289 358 326<br/><a href="mailto:test@email.com">info@spic.pt</a></Text>
              </Box>
            </Grid>
              
              <GridItem colStart={4} colEnd={6}>
                <Box mt={10}>
                <Text color='white' fontSize='13.38'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Phasellus condimentum volutpat lorem a sagittis.
                </Text>
                </Box>
                <Box mt={14}>
                  <Button borderRadius="40px" height="48px" width="200px" bgColor="white">
                    <Box mr={4}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="25.818" height="16.207" viewBox="0 0 25.818 16.207">
                        <path id="Caminho_92" data-name="Caminho 92" d="M1.29,0H23.528a1.29,1.29,0,0,1,1.29,1.29V13.917a1.29,1.29,0,0,1-1.29,1.29H1.29A1.29,1.29,0,0,1,0,13.916V1.29A1.29,1.29,0,0,1,1.29,0Z" transform="translate(0.5 0.5)" fill="none" stroke="#4f60ba" strokeLinecap="round" strokeWidth="1"/>
                        <line id="Linha_2" data-name="Linha 2" x2="3.199" transform="translate(6.967 13.555)" fill="none" stroke="#4f60ba" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1"/>
                        <line id="Linha_3" data-name="Linha 3" x2="2.011" transform="translate(5.413 11.27)" fill="none" stroke="#4f60ba" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1"/>
                        <line id="Linha_4" data-name="Linha 4" x2="5.485" transform="translate(10.167 11.27)" fill="none" stroke="#4f60ba" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1"/>
                        <line id="Linha_5" data-name="Linha 5" x2="3.629" transform="translate(17.845 11.27)" fill="none" stroke="#4f60ba" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1"/>
                        <line id="Linha_6" data-name="Linha 6" x2="6.947" transform="translate(12.909 13.555)" fill="none" stroke="#4f60ba" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1"/>
                      </svg>
                    </Box>
                    <Text color='#4f60b6' fontFamily='Gotham-Book'> Talk to us</Text>
                  </Button>
                </Box>
              </GridItem>
              
              
          </Grid>
          <Box mt={25} mb={6}>
              <ColoredLine color="white"/>
          </Box>
          <Text color="white" fontSize='13.38' fontFamily='Gotham-Book'>@2021 Brand activation by SPIC. All rigths reserved</Text>
        </Box>

      </Box>
      
    </Box> 
  </Flex>
  )
}
