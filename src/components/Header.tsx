import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import { GiBeamSatellite } from "react-icons/gi";

const Header = () => {
    return (
        <header>
            <Box w="100%" bg="gray.500" padding="3" color="white">
                <Container>
                    <Flex alignItems="center" verticalAlign="center" justifyContent="center">
                        <Heading as="h1" size="lg" mr="2">
                            ISS Tracker
                        </Heading>
                        <GiBeamSatellite size="24px" />
                    </Flex>
                </Container>
            </Box>
        </header>
    );
};
export default Header;
