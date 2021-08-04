import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
import { Context as LocationContext } from '../Context/LocationContext';

const TrackForm = () => {
    const { state: { name, recording, locations },
            startRecording, 
            stopRecording, 
            changeName } = useContext(LocationContext);
    
    console.log(locations.lenght);
    return(
        <>
            <Spacer>
                <Input value={name} onChangeText={changeName} placeholder="Name your track"/>
            </Spacer>
            <Spacer>
                { !recording ? <Button title="Start recording" onPress={ startRecording }/> : 
                              <Button title="Stop" onPress={ stopRecording }/>}
            </Spacer>
        </>)
};

export default TrackForm;