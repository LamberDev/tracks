import createDataContext from "./createDataContext";
import tracker from "../api/tracker";

const trackReducer = (state, action) => {
    switch (action.type) {
        case value:
            
            break;
    
        default:
            return state;
    }
}

const fetchTracks = dispatch => () => {

}

const createTrack = dispatch => (name, locations) => {
    console.log(name, locations.length);
}

export const { Provider, Context} = createDataContext(
    trackReducer,
    { fetchTracks, createTrack },
    []
)