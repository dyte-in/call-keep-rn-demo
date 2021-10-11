import { settingsActionsType } from '@src/actions/App';

const INITIAL_STATE = {
  isInBackground: true
};

const settingsReducer = (state = INITIAL_STATE, action:any) => {
  switch (action.type) {
    case settingsActionsType.SET_APP_STATE:
      return {
        ...state,
        isInBackground: action.isInBackground
      };
    default:
      return state;
  }
};

export default settingsReducer