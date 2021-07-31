import React from 'react';
import { View ,StyleSheet } from 'react-native';
/**
 * Componenente que vamos a utilizar para agregar cierto estilo a los componentes que envolvamos con el o para dar espacio entre componenetes
 */
const Spacer = ({ children }) => {
    return (
        <View style={ styles.spacer }>
            { children }
        </View>
    );
};

const styles = StyleSheet.create({
    spacer: {
        margin: 10
    }
});

export default Spacer;