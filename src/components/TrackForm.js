import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
import { Context as LocationContext } from '../Context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {
    const { state: { name, recording, locations },
            startRecording, 
            stopRecording, 
            changeName } = useContext(LocationContext);
    
    const [saveTrack] = useSaveTrack();
    
    
    return(
        <>
            <Spacer>
                <Input value={name} onChangeText={changeName} placeholder="Name your track"/>
            </Spacer>
            <Spacer>
                { !recording ? <Button title="Start recording" onPress={ startRecording }/> : 
                              <Button title="Stop" onPress={ stopRecording }/>}
            </Spacer>
            
            <Spacer>
                {
                !recording && locations.length ?
                <Button title="Save Recording" onPress={saveTrack}/>
                : null
                }
            </Spacer>
            
        </>)
};

export default TrackForm;