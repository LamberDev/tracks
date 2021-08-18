import createDataContext from "./createDataContext";
import tracker from "../api/tracker";

const trackReducer = (state, action) => {
    switch (action.type) {
        case 'fetch_tracks':
            return action.payload
    
        default:
            return state;
    }
}

const fetchTracks = dispatch => async () => {
    console.log('ejecutando');
    try {
        const response = await tracker.get('/tracks');
        dispatch({ type: 'fetch_tracks', payload: response.data});
    } catch (err) {
        console.log(err.msg);
    }
    
};

const createTrack = dispatch => async (name, locations) => {
    await tracker.post('/tracks', { name, locations });
};

export const { Provider, Context} = createDataContext(
    trackReducer,
    { fetchTracks, createTrack },
    []
)