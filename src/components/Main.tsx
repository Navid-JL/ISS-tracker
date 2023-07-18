import { Box, Flex, Grid, useMediaQuery } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import Typewriter from "typewriter-effect";
import { ISSContext } from "../Context/ISSContext";
import axios from "axios";
import { API_URI } from "../Constants/ISSAPI";
import { LOADED, LOADING, REJECTED } from "../Constants/ActionTypes";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import Globe from "react-globe.gl";

const Main = () => {
    const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
    const { state, dispatch } = useContext(ISSContext);

    const fetchISSLocation = async () => {
        try {
            const response = await axios.get(API_URI);
            const data = await response.data;
            // Do something with the data here
            return data;
        } catch (error) {
            return error;
        }
    };

    useEffect(() => {
        const timeoutId = setInterval(() => {
            console.log("ISS");

            dispatch({ type: LOADING });
            fetchISSLocation()
                .then((data) => {
                    dispatch({ type: LOADED, payload: data });
                })
                .catch((error) => {
                    dispatch({ type: REJECTED, payload: error.message });
                });
        }, 5000);

        return () => {
            clearInterval(timeoutId);
        };
    }, [state]);

    return (
        <main>
            <Grid
                h="100vh"
                templateRows="1fr auto 1fr"
                templateColumns="1fr"
                justifyContent="center"
                alignItems="center"
                // background="black"
                // color="white"
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
                <Flex justifyContent="center">
                    <Globe
                        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
                        showGraticules={true}
                        width={900}
                        height={700}
                        showAtmosphere={true}
                        ringsData={[
                            {
                                lat: Number(state.IssLocation.iss_position.latitude),
                                lng: Number(state.IssLocation.iss_position.longitude),
                            },
                        ]}
                        ringAltitude={0}
                        ringMaxRadius={2}
                        ringColor={() => "#FF0000"}
                        ringResolution={30}
                    />
                </Flex>
                <div>Astronauts</div>
                {/* <Grid templateRows="1fr" templateColumns="1fr 2fr" gap="4"></Grid> */}
            </Grid>
        </main>
    );
};
export default Main;
