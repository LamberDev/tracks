import React, {useContext, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context as AuthContext } from '../Context/AuthContext';
import { NavigationsEvents }  from 'react-navigation';

const SigninScreen = ({navigation}) => {

    const { state, signin, clearErrorMessage} = useContext(AuthContext);

    useEffect( () => {
        //Nos creamos un listener en el navigatio para que cuando aparezca la pantalla llame a la funcion de borrar error
        const listener = navigation.addListener('willFocus', () => {
            clearErrorMessage();
        });
      
        return () => { //Quitamos el listener cuando el componenete se destruye
            listener.remove();
        }
    },[navigation]); //El use effect reacciona cuando cambia el valor de navigation


    return (
        <View style={styles.container}>
            {/* <NavigationsEvents
                onWillFocus={clearErrorMessage}
            /> */}
            <AuthForm
                headerText="Sign in to Your Account"
                errorMessage={state.errorMessage}
                onSubmit={ signin }
                submitButtonText="Sign in"
            />

            <NavLink
                text="Dont have an account? Sign up instead"
                routeName="Signup"
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

export default SigninScreen;
