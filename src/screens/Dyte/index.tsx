import React from "react";
import { DyteMeeting } from "@dytesdk/mobile";
import {startMeeting, resetRoomName} from '@src/actions/Meeting'
import  { store } from '@src/store'
import { Dimensions, TouchableOpacity, Text } from "react-native";


const Dyte = () => {
//get roomName from redux store 
const meetingRef = React.useRef(null);


const onMeetingInit = (meeting:any) => {
    meetingRef.current = meeting;
    meeting.on(meeting.Events.meetingEnded, () => {
        store.dispatch(resetRoomName())
    });
};
return (
    <>
    <DyteMeeting
        onInit={onMeetingInit}
        clientId={`orgId`}
        meetingConfig={{
            roomName: `roomName`,
            authToken: `authToken`
        }}
        uiConfig={{
            dimensions: {
                height: Dimensions.get('window').height*0.90, 
                width: Dimensions.get('window').width
            }
        }}
    />
    <TouchableOpacity style={{
            height: Dimensions.get('window').height*0.1,
            width: Dimensions.get('window').width, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            backgroundColor: '#054DFF'
        }}
    onPress={() => store.dispatch(resetRoomName())}
    >
        <Text style={{color: 'white'}}> Reset Meeting</Text>
    </TouchableOpacity>
    </>
)
}

export default Dyte