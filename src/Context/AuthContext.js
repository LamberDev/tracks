import tracker from "../api/tracker";
import createDataContext from "./createDataContext";
import { AsyncStorage as OldStroage } from "react-native";
import { AsyncStorage as NewStorage} from "@react-native-async-storage/async-storage";
import { navigate } from "../helpers/navigationRef";

const authReducer = (state, action) => {
    switch (action.type) {
        case 'clear_error_,message':
            return { ...state, errorMessage: ''};
        case 'add_error':
            return { ...state, errorMessage: action.payload};
        case 'signin': 
            return { errorMessage: '', token: action.payload }; //Registrarse y logearse devuele lo mismo asi que lo condesamos en un caso
        case 'signout':
            return { errorMessage: '', token: null} //Enviamos token null porque lo borramos
        default:
        return state;
    }
};

const clearErrorMessage = dispatch => () => {
    dispatch({ type: 'clear_error_,message'})
}

const tryLocalSignin = dispatch => { //Funcion para login automatico 

    return async () => {
        //Checkeamos si hay token guardado
        const token = await OldStroage.getItem('token');
        if (token) { //Si hay
            // Cambiamos el estado
            dispatch({ type: 'signin', payload: token})
            //Navegamos al mainFlow
            navigate('TrackList');
        }else{ //No hay token navegamos a inicio de sesion
            navigate('Signin');
        }
    }
};

const signup = (dispatch) =>  {
    return async ({ email, password}) => {
        try {
            const response = await tracker.post('/signup', { email, password });
            console.log(JSON.stringify(response));
            //Guardamos token en el almacenamiento local
            //await OldStroage.setItem("token", response.data.token);

            await OldStroage.setItem('token', response.data.token);
            

            
            //Le pasamos la accion al reducer
            dispatch({ type: 'signin', payload: response.data.token});
            // si tenemos token nevegamos al mainFlow exactamente a TrackList
            navigate('TrackList');

        } catch(err) {
            dispatch( { type: 'add_error', payload: 'Something went wrong with sign up'} );
        }
    }
}


const signin = dispatch => {
    return async ({ email, password}) => {
        try {
            const response = await tracker.post('/signin', { email, password });
            await OldStroage.setItem('token', response.data.token);
            dispatch({ type: 'signin', action: response.data.token});
            navigate('TrackList');
        }catch (err){
            console.log(err);
            dispatch({type: 'add_error', payload: 'Something went from with signin'});
        }
    }
}

const signOut = dispatch => {
    return async () => {
        await OldStroage.removeItem('token');
        dispatch({ type: 'signout '});
        navigate('loginFlow')
    }
}

export const { Provider, Context } = createDataContext(
    authReducer,
    {signup, signin, clearErrorMessage, tryLocalSignin, signOut},
    { token: null, errorMessage: '' } //Valor inicial del Estado de Authentication
)