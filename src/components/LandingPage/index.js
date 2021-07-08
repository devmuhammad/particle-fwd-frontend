import React from 'react';
import { getAllCars } from '../../services/api'
import {
    VStack,
    HStack,
    Box,
    Heading,
    Text,
    Badge,
    Image,
} from '@chakra-ui/react';

const LandingPage = () => {
    const [allCars, setCars] = React.useState();

    React.useEffect(() => {
        getCars();
    }, [])

    const getCars = () => {
        getAllCars().then(resp => resp.data)
            .then((res) => {
                setCars(res)

            })
    }

    return (
        <VStack spacing={8}>
            <Heading as="h1"
                size="xl">
                {allCars && allCars.title}</Heading>
            <Text fontSize="lg" noOfLines={4} px={8}>{allCars && allCars.htmlDescription}</Text>
            <HStack spacing={8} px={8} flexWrap={'wrap'} justifyContent="center" gridGap="20px">
                {allCars && allCars.images.map((carImg) => {
                    return (
                        <Box 
                        // key={carImg.uri}
                            maxW="sm"
                            borderWidth="1px"
                            borderRadius="lg"
                            overflow="hidden"
                            ms="0 !important"
                            display="flex"
                            cursor="pointer"
                            flexDir="column"
                            alignItems="center">
                            <Image src={carImg.uri.concat('_2.jpg')} />

                            
                                <Box flexDir="column" 
                                    display="flex"
                                    p="6" 
                                    alignItems="baseline">
                                    <Box d="flex" alignItems="baseline" >
                                        <Badge borderRadius="full" px="2" colorScheme="teal">
                                            New
                                        </Badge> 
                                        <Box
                                            color="gray.500"
                                            fontWeight="semibold"
                                            letterSpacing="wide"
                                            fontSize="xs"
                                            textTransform="uppercase"
                                            ml="2"
                                        >
                                            {allCars.price.net} NET &bull; {allCars.price.gross} GROSS
                                            
                                            
                                        </Box> 
                                    </Box>
                                    <br />
                                    {/* <Box
                                        fontWeight="semibold"
                                        as="h4"
                                        lineHeight="tight"
                                        textAlign="left"
                                    >
                                        {allCars.segment}
                                        
                                    </Box><br /> */}
                                    <Box>
                                        {allCars.category}
                                    </Box>
                                </Box>
                        </Box>
                    )
                })
                }
            </HStack>

            {/*

        <Box d="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < property.rating ? "teal.500" : "gray.300"}
              />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {property.reviewCount} reviews
          </Box>
        </Box>
      </Box>
    </Box> */}
        </VStack>
    )
}

export default LandingPage;