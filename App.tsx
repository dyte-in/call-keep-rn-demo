import React, { useEffect } from 'react'
import {AppState} from 'react-native'
import { connect, Provider } from 'react-redux';
import  { store, persistor } from './src/store'
import {Dyte, Home} from '@src/screens'
import messaging from '@react-native-firebase/messaging';
import { Loading } from '@src/components/sections';
import { PersistGate } from 'redux-persist/integration/react'
import {setAppState} from "@src/actions/App"
import callkeepOptions from '@src/util/callkeep';
import RNCallKeep from 'react-native-callkeep';


//@ts-ignore
const RenderComponent = ({ meeting, settings }) => {
  const {isInBackground} = settings
  const {roomName, startMeeting} = meeting
  const startDytetMeeting = (roomName && startMeeting && (!isInBackground) ? true : false)

  React.useEffect(() => {
    const firebaseSetup = async () => {
        try {
            await messaging().requestPermission();
            let permissions = await messaging().hasPermission()
            if (!permissions) {
              console.warn("Dyte: Does not have required permissions")
            }
        } catch (err) {
            console.log('Dyte: error with Permissions')
        }
    }
    firebaseSetup()
    RNCallKeep.setup(callkeepOptions);
  }, [])

  useEffect(() => {
    AppState.addEventListener('change', () => {
      const isAppInBackground = !!AppState.currentState.match(/inactive|background/);
        store.dispatch(setAppState(isAppInBackground));
    });  
  }, []);

 return startDytetMeeting ? <Dyte /> : <Home />
};

//@ts-ignore
const mapStateToProps = ({meeting, settings}) => ({meeting, settings});

const RenderMainAppComponent = connect(mapStateToProps, {})(RenderComponent);

export default function App() {
  return (
    <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <RenderMainAppComponent />
        </PersistGate>
    </Provider>
  );
}