export const meetingActionType = {
    SET_ROOM_NAME: '@MEETING/SET_ROOM_NAME',
    RESET_ROOM_NAME: '@MEETING/RESET_ROOM_NAME',
    START_MEETING:  '@MEETING/START_MEETING',
  };


  export function setRoomName(roomName:string) {
    console.log("ROom Name:", roomName)
    return {
      type: meetingActionType.SET_ROOM_NAME,
      roomName: roomName
    };
  }

  export function resetRoomName() {
    return {
      type: meetingActionType.RESET_ROOM_NAME
    }
  }

  export function startMeeting() {
    return {
      type: meetingActionType.START_MEETING
    }
  }