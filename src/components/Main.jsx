/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Globe from 'react-globe.gl';
import Typewriter from 'typewriter-effect';
import Spinner from 'react-bootstrap/Spinner';
import { Fragment } from 'react';


const Main = ({ state }) => {
    let typewriterMessages = ["Discover the current location of the ISS", "Discover the number of astronauts on board"]
    let typewriterMessagesLength = []

    typewriterMessages.forEach((message) => {
        let messageLength = message.split(' ').slice(1).join(' ').length
        typewriterMessagesLength.push(messageLength)
    });

    const gData = [{
        lat: Number(state.issLocation.latitude),
        lng: Number(state.issLocation.longitude),
        maxR: 10,
        propagationSpeed: 5,
        repeatPeriod: 1000
    }];
    let numISSAstronauts = [];
    if (state.astronauts && state.astronauts.people && state.astronauts.people.length > 0) {
        numISSAstronauts = state.astronauts.people.filter(astronaut => {
            if (astronaut.craft.toLowerCase() === 'iss') {
                return astronaut;
            }
        });
    }

    return (
        <main className='text-white d-flex flex-column align-items-center justify-content-center'>
            {state.isLoading && <Spinner animation="grow" />}
            {state.error.length > 0 ? <h3 className='text-danger'>{state.error}</h3> : <Fragment>
                <div className='d-flex align-items-center justify-content-center'>
                    <Globe
                        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg" // Replace with the path to your globe texture image
                        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
                        showGraticules={true}
                        ringsData={gData}
                        ringColor={() => {
                            return "#FF0000"
                        }}
                        ringMaxRadius={3}
                    />
                </div>
                <div className='text-white d-flex justify-content-center my-4 p-2 align-items-center'>

                    <h3>
                        <Typewriter
                            options={{
                                loop: true,
                                delay: 30,
                                autoStart: true
                            }}

                            onInit={(typewriter) => {
                                typewriter.typeString('Discover the current location of the ISS')
                                    .changeDeleteSpeed(7)
                                    .pauseFor(2500)
                                    .deleteChars(typewriterMessagesLength[0])
                                    .typeString('the number of astronauts on board')
                                    .changeDeleteSpeed(7)
                                    .pauseFor(2500)
                                    .deleteChars(typewriterMessagesLength[1])
                                    .start();
                            }}

                        />
                    </h3>
                </div>
                <div>
                    <h4>There are {state.astronauts ? state.astronauts.number : 'some'} astronauts in space right now, {state.astronauts ? numISSAstronauts.length : 'some number'} of whom are aboard the ISS</h4>
                    <ul className='list-group p-4'>
                        {numISSAstronauts.map((issAstronaut) => {
                            return <li key={crypto.randomUUID()} className='list-group-item text-center bg-black text-white'>{issAstronaut.name}</li>
                        })}
                    </ul>
                </div>
            </Fragment>}

        </main>
    )
}
export default Main