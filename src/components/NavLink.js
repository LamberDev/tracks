import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import Spacer from './Spacer'; 

const NavLink = ({navigation, routeName, text}) => {

    return (
        <>
            <TouchableOpacity onPress={ () => { navigation.navigate(routeName) } }>
                <Spacer>
                    <Text style={ styles.link }> {text} </Text>
                </Spacer>
            </TouchableOpacity>
        </>
    )
};

const styles = StyleSheet.create({
    link: {
        color: 'blue'
    }
});

export default withNavigation(NavLink); //Le inyectamos la navegacion