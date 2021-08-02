import createDataContext from "./createDataContext";

const locationReducer = (state, action) => {
    switch (action.type) {
        case 'add_location':
            return { ... state, currentLocation: action.payload }; // Cambiamos la localizacion
        default:
            return state;
    }
}

const startRecording = (dispatch) => {
    return () => {

    }
}

const stopRecording = (dispatch) => {
    return () => {

    }
}

const addLocation = (dispatch) => {
    return (location) => { //Recibo una localizacion
        dispatch({ type: 'add_current_location', payload: location}); // Notifico del que cambio que quiero hacer al reducer
    }
}

export const { Context, Provider } = createDataContext( 
    locationReducer, 
    { startRecording, stopRecording, addLocation }, 
    { recording: false, locations: [], currentLocation: null} );