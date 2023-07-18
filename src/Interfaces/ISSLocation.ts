import IGeoLocation from "./IGeoLocation";

interface ISSLocation {
    message: string;
    iss_position: IGeoLocation;
    timestamp: number;
}

export default ISSLocation;
