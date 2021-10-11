import RNCallKeep from 'react-native-callkeep';
import callKeepOptions, { addRNCallKeepListeners } from '../callkeep';
import {AppState} from 'react-native'
import {setAppState} from "@src/actions/App"
import {setRoomName} from '@src/actions/Meeting'
import  { store } from '@src/store'
import uuid from 'react-native-uuid';

let callKeepListenersAdded;
if (!callKeepListenersAdded) {
  console.log('Dyte: Adding CallKeep Listeners...');
  callKeepListenersAdded = addRNCallKeepListeners();
}
RNCallKeep.setup(callKeepOptions);

// {"collapseKey": "com.blendtale", "data": {"room-name": "hlyavk-teuwkc"}, "from": "1043927287364", "messageId": "0:1633702953464629%12b7ec4a12b7ec4a", "notification": {"android": {}, "body": "testing new notification", "title": "New Notification"}, "sentTime": 1633702953, "ttl": 2419200}
// Example from Firebase data 
export default async (message:any) => {
  const {data} = message
  const {roomName, organisedBy, callerName} = data
  console.log(
    `Dyte: bgMessaging -> Receiving a background PUSH Notification (${message})`
  );
  try {
    RNCallKeep.registerPhoneAccount();
    RNCallKeep.registerAndroidEvents();
    RNCallKeep.setAvailable(true);
  } catch (error) {
    console.warn("Dyte:", error);
  }
  const isInBackground = !!AppState.currentState.match(/inactive|background/);
  store.dispatch(setAppState(isInBackground));
  const id = uuid.v4();
  //TODO: Load from FCM
  const organiser =  organisedBy || 'Dyte'
  const caller =   callerName || 'Rohit'
  const dyteRoomName = roomName || 'hlyavk-teuwkc'
  store.dispatch(setRoomName(dyteRoomName));
  RNCallKeep.displayIncomingCall(
    `${id}`,
    organiser,
    caller
  );
  return Promise.resolve();
};