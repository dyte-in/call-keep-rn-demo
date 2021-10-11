import React from 'react'
import {View, Text, ActivityIndicator, StatusBar} from 'react-native'

const Loading = () => {
    return (
    <View>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </View>
    )
}

export default Loading