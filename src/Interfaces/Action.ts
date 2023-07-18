interface Action {
    type: string;
    payload?: {
        message: string;
        iss_position: {
            latitude: string;
            longitude: string;
        };
        timestamp: number;
        isLoading: boolean;
        error: string;
    };
}

export default Action;
