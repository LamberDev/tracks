
import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, FlatList, TouchableOpacity  } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as TrackContext } from '../Context/TrackContext';
import { ListItem } from 'react-native-elements';

const TrackListScreen = ({ navigation }) => {

    const { state, fetchTracks } = useContext(TrackContext);
    
    return (
            <>
            {/* Navigation Events es una etiqueta que no genera estilo pero nos sirve para captar eventos de la navegacion
                En este caso lo utilizamos para captar cuando la pantalla se va a mostrar y llamaos a una fucnion que nos trae desde la api todos los
                Tracks */}
            <NavigationEvents onWillFocus={ fetchTracks }/> 
                <FlatList
                    data={state}
                    keyExtractor={ item => item._id}
                    renderItem={ ({ item }) => {
 
                        return <TouchableOpacity onPress={ () =>  navigation.navigate('TrackDetail', { _id: item._id })  }>
                            {/* List Item es un elemento de react native elements que nos da algo de estilo a las listas 
                                List itemm content se mete detro tod el contenido
                                Lst item title es para meter el titulo de cada elemento
                                Chevron es una flechita que invita a pulsarse*/}
                                    <ListItem> 
                                        <ListItem.Content>
                                            <ListItem.Title> 
                                                {item.name}
                                            </ListItem.Title>
                                        </ListItem.Content>
                                        <ListItem.Chevron />
                                    </ListItem>
                                </TouchableOpacity>
                    } }
                />
            </>
    );
}

TrackListScreen.navigationOptions = {
    title: 'Tracks'
};


const styles = StyleSheet.create({
    
});

export default TrackListScreen;
