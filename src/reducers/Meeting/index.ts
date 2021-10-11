import { meetingActionType } from '@src/actions/Meeting';

const INITIAL_STATE = {
  roomName: '',
  initatedAt: null,
  startMeeting: false
};

const meetingReducer = (state = INITIAL_STATE, action:any) => {

  switch (action.type) {
    case meetingActionType.SET_ROOM_NAME:
      return {
        ...state,
        roomName: action.roomName, 
        initatedAt: Date.now()
      };
    case meetingActionType.RESET_ROOM_NAME: 
      return {
        ...INITIAL_STATE, 
      }
    case meetingActionType.START_MEETING: 
      return {
        ...state, 
        startMeeting: true
      }
    default:
      return state;
  }
};

export default meetingReducer