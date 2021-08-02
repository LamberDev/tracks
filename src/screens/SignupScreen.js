import React, {useContext, useEffect} from 'react';
import { View,StyleSheet, TouchableOpacity} from 'react-native';
import { Context as AuthContext } from '../Context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { NavigationsEvents } from 'react-navigation';

const SignupScreen = ( { navigation } ) => {

    
    const { state, signup, clearErrorMessage } = useContext(AuthContext); 

    useEffect( () => {
        //Nos creamos un listener en el navigatio para que cuando aparezca la pantalla llame a la funcion de borrar error
        const listener_focus = navigation.addListener('willFocus', () => {
            clearErrorMessage();
        })
        const listener_blur = navigation.addListener('willBlur', () => {
            clearErrorMessage();
        })

        return () => { //Quitamos el listener cuando el componenete se destruye
            listener_focus.remove();
            listener_blur.remove();
        }
    },[navigation]); //El use effect reacciona cuando cambia el valor de navigation

    return (
        <View style={ styles.container }>
             {/* <NavigationsEvents //Componente reacciona a cualquier accion de navegar (aparecer pantalla o desaparecer)
                onWillFocus={clearErrorMessage} //La prop onWillFocus (cuando la pantalla vaya a aparecer) Le pasamos nuestra funcion que borra el error
            /> */}
            <AuthForm 
                headerText="Sign Up on Tracker App" 
                errorMessage={ state.errorMessage } 
                onSubmit={signup} 
                submitButtonText="Sign Up"
            />
            <NavLink
                routeName="Signin"
                text="Already have an account? Sign in instead!"
            />
            
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1, // Nuestra vista ocupa todo el espacio posible
        justifyContent: 'center', // Centramos el contenido verticalmente porque el flex direction es default (column)
        marginBottom: 200 // añadimos margen para que parezca mas centrado ya que Spacer agrega espacio por arriba 
    }
});

export default SignupScreen;
