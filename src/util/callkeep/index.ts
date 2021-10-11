import RNCallKeep from 'react-native-callkeep';
import { AppState } from 'react-native';
//@ts-ignore
import invoke from 'react-native-invoke-app'
import {startMeeting, resetRoomName} from '@src/actions/Meeting'
import  { store } from '@src/store'

export default {
    ios: {
        appName: 'RN call',
        maximumCallGroups: '1',
        maximumCallsPerCallGroup: '1',
        supportsVideo: true,
        imageName: 'inCallIcon',
      },
      android: {
        alertTitle: 'Permissions required',
        alertDescription:
          'This application needs to access your phone accounts',
        cancelButton: 'Cancel',
        okButton: 'OK',
        imageName: 'iconmask',
        foregroundService: {
          channelId: 'APP_CALL_SERVICE',
          channelName: 'Call service for the Call app',
          notificationTitle: 'DyteDemo ongoing call',
          notificationIcon: 'ic_launcher',
        },
        additionalPermissions: [],
    }
};

export const addRNCallKeepListeners = () => {
  console.log('Dyte: configure-callkeep -> Adding callkeep listeners');
  RNCallKeep.addEventListener('didDisplayIncomingCall', ({ error }) => {
    console.log('Dyte: RNCallkeep -> didDisplayIncomingCall');
    if (error) {
      console.warn("Dyte: Display Incoming call error", error);
    }
  });

  /**
   * This is triggered when the user taps the NATIVE endCall button
   */
  RNCallKeep.addEventListener('endCall', ({ callUUID }) => {
    RNCallKeep.endCall(callUUID);
    return true
  });

  /**
   * This is triggered when the user taps the NATIVE answer button
   */
  RNCallKeep.addEventListener('answerCall', ({ callUUID }) => {
    const isInBackground = !!AppState.currentState.match(/inactive|background/);
    console.log('Dyte: RNCallKeep -> AnswerCall from configureCallKeep');
    console.log(`Dyte: RNCallKeep -> inBackground: ${isInBackground}`);
    try {
      RNCallKeep.endCall(callUUID);
      store.dispatch(startMeeting());
      invoke()
    } catch (err) {
      console.log("Dyte Error Answering:", err)
      store.dispatch(resetRoomName())
    }
  });

  return true;
};
