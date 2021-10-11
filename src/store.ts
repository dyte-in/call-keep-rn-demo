import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import rootReducer from '@src/reducers';
import { IState, IAction } from '@src/types/redux';
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';// defaults to localStorage for web and AsyncStorage for react-native
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig = {
  key: 'dyte-callkeep-poc',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2
}

const composeEnhancers = composeWithDevTools({
  trace: true,
  traceLimit: 25,
});

const configureStore = (initialState={}) => {
  const persistedReducer = persistReducer<any, any>(persistConfig, rootReducer)
  const store = createStore(
    persistedReducer,
    //@ts-ignore
    {},
    composeEnhancers(
      applyMiddleware(thunk as ThunkMiddleware<IState, IAction>)
    )
  )
  const persistor = persistStore(store)
  return { store, persistor };
}

export const { store, persistor } = configureStore();