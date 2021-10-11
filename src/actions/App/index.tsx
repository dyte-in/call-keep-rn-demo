export const settingsActionsType = {
    SET_APP_STATE: '@SETTINGS/SET_APP_STATE'
  };

  
export function setAppState(isInBackground:boolean) {
    return {
      type: settingsActionsType.SET_APP_STATE,
      isInBackground
    };
}