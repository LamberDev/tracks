import createDataContext from "./createDataContext";

const locationReducer = (state, action) => {
    switch (action.type) {
        case 'start_recording':
            return { ...state, recording: true}
        case 'stop_recording':
            return { ...state, recording: false}
        case 'add_current_location':
            return { ... state, currentLocation: action.payload }; // Cambiamos la localizacion
        case 'add_location':
            return { ... state, locations: [...state.locations, action.payload]}
        case 'change_name': 
            return { ... state, name: action.payload}
        default:
            return state;
    }
}

const startRecording = (dispatch) => {
    return () => {
        dispatch({ type: 'start_recording'});
    }
}

const stopRecording = (dispatch) => {
    return () => {
        dispatch({ type: 'stop_recording'});
    }
}

const changeName = (dispatch) => {
    return (name) => {
        dispatch({ type: 'change_name', payload: name});
    }
}

const addLocation = (dispatch) => {
    return (location, recording) => { //Recibo una localizacion
        dispatch({ type: 'add_current_location', payload: location}); // Notifico del que cambio que quiero hacer al reducer

        if (recording) {
            dispatch({ type: 'add_location', payload: location}); // Si estamos grabando notificamos al estado para guardar la localizacion
        }
    }
}

export const { Context, Provider } = createDataContext( 
    locationReducer, 
    { startRecording, stopRecording, addLocation }, 
    { name: '',recording: false, locations: [], currentLocation: null} );