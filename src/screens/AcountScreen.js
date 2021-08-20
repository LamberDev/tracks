import React,{useContext} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { Context as AuthContext } from '../Context/AuthContext';
import Spacer from '../components/Spacer';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons'; 

const AcountScreen = () => {

    const { signOut } = useContext(AuthContext);
    return (
        //Safe Area iew es un contenedor que se utiliza mucho para IOS ya que si no hay ningun elemento cubriendo esa parte de arriba de la pantalla
        // como los headers o el tab bar o un toolbar el contenido se colapsa por el ntch entonces con este elemento agrega un espacio a todos los dispositivos
        <SafeAreaView forceInset={{ top: 'always'}}> 
            <Text style={ {fontSize: 46} }>Acount Screen</Text>
        <Spacer>
           <Button
                title="Sign Out"
                onPress={signOut}
           />
        </Spacer>
        </SafeAreaView>
    );
}
AcountScreen.navigationOptions = {
    title: 'Account',
    tabBarIcon: <Feather name="settings" size={24} color="black" />
}
const styles = StyleSheet.create({
});

export default AcountScreen;
