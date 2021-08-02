import React, { useState } from 'react'
import { Text, Button, Input } from 'react-native-elements'
import { StyleSheet } from 'react-native'
import Spacer from './Spacer';

/**
 * 
 * Componente para reutilizar un formulario de login signin 
 * 
 */
const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <Spacer>
                <Text h3>{headerText}</Text>
            </Spacer>
            
            <Input
                autoCapitalize="none"
                autoCorrect={false}
                label="Email"
                value={email}
                onChangeText={setEmail} // Hacer esto es lo mismo que lo que hacemos en password
             />
            <Spacer></Spacer>
            <Input 
                label="Passord"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry // Para que salga como un password el texto
                label="Password"
                value={password}
                onChangeText={(newValue) => { setPassword(newValue) }} 
            />

            { errorMessage ? <Text style={styles.errorMessage}> {errorMessage} </Text> : null}

            <Spacer>
                <Button 
                    title={ submitButtonText }
                    onPress={ () => { onSubmit({email, password})}}
                />
            </Spacer>
        </>);
};

const styles = StyleSheet.create({
    errorMessage: {
        marginLeft: 10,
        color: 'red',
        fontSize: 16
    }
});

export default AuthForm;