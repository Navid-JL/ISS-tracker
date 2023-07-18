interface State {
    IssLocation: {
        message: string;
        iss_position: {
            latitude: string;
            longitude: string;
        };
        timestamp: number;
    };
    isLoading: boolean;
    error: string;
}

export default State;
