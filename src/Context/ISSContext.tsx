import { createContext, useEffect, useReducer } from "react";
import Props from "../Interfaces/Props";
import Action from "../Interfaces/Action";
import State from "../Interfaces/State";
import { LOADED, LOADING, REJECTED } from "../Constants/ActionTypes";

const initialState: State = {
    IssLocation: {
        message: "",
        iss_position: {
            latitude: "",
            longitude: "",
        },
        timestamp: 0,
    },
    isLoading: false,
    error: "",
};

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case LOADING:
            return { ...state, isLoading: true };
        case LOADED:
            if (action.payload) {
                return { ...state, IssLocation: action.payload, isLoading: false };
            }
        case REJECTED:
            if (action.payload) {
                return { ...state, isLoading: false, error: action.payload.error };
            }
        default:
            return state;
    }
}

const ISSContext = createContext<{ state: State; dispatch: React.Dispatch<Action> }>({
    state: initialState,
    dispatch: (action: Action) => null,
});

const ISSProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <ISSContext.Provider value={{ state, dispatch }}>{children}</ISSContext.Provider>;
};

export { ISSContext, ISSProvider };
