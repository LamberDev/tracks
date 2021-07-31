import React, {useState, useContext} from 'react';
import { StyleSheet} from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import { View } from 'react-native'
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../Context/AuthContext';

const SignupScreen = ( { navigation } ) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { state, signup } = useContext(AuthContext);

    return (
        <View style={ styles.container }>
            <Spacer>
                <Text h3> Sign Up For Tracker</Text>
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

            <Spacer>
                <Button 
                    title="Sign Up"
                    onPress={ () => { signup({email, password}) }}
                />
            </Spacer>
            
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
