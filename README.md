# React-native-callkeep POC using Dyte Sdk

## Platforms 

- [x] Android 
- [ ] iOS 


## Important libraries used 

- react-native-callkeep
- Firebase

## How to use 
- enter your firebase credentials at `/android/app/google-services.json`
- go to cloud-messaging and add `roomName, organisedBy, callerName` in Additional Options and `Custom data`
- Review and send information 

**Note:** Below are the defaults values set if you don't give roomName, organisedBy and callName

```
  const organiser =  organisedBy || 'Dyte'
  const caller =   callerName || 'Rohit'
  const dyteRoomName = roomName || 'hlyavk-teuwkc'
```

Look at bgMessaging for reference

## Testing 

### Devices 
- Samsung 
- Oneplus 
- Huwaie 
- Oppo 

### Testing 
- Recieves call when app is background 
- Recieves call when user closes app (not forced close)