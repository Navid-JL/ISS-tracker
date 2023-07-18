import { Flex, Grid, useMediaQuery } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";

const Main = () => {
    const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

    return (
        <main>
            <Grid
                h="100vh"
                templateRows="1fr auto 1fr"
                templateColumns="1fr"
                justifyContent="center"
                alignItems="center"
                background="black"
                color="white"
            >
                <Flex
                    justifyContent="center"
                    alignItems="center"
                    padding="3"
                    textAlign="justify"
                    fontSize={isLargerThan768 ? "4xl" : "2xl"}
                >
                    <Typewriter
                        options={{
                            loop: true,
                        }}
                        onInit={(typewriter) => {
                            typewriter.changeDelay(50);
                            typewriter
                                .typeString(
                                    "Discover the current location of the International Space Station"
                                )
                                .pauseFor(1000)
                                .deleteAll(15)
                                .typeString(
                                    "Keep up to date with the movements of the ISS in real-time"
                                )
                                .pauseFor(1000)
                                .deleteAll(15)
                                .typeString("See how many astronauts are in space right now")
                                .pauseFor(1000)
                                .deleteAll(15)

                                .start();
                        }}
                    />
                </Flex>
                <div>Map</div>
                <div>Astronauts</div>
                {/* <Grid templateRows="1fr" templateColumns="1fr 2fr" gap="4"></Grid> */}
            </Grid>
        </main>
    );
};
export default Main;
