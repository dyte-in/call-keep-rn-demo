import { StyleSheet, Dimensions } from "react-native";


const {width, height} = Dimensions.get('window')
export default StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center'
    }, 
    text: {
        fontSize: 24, 
        paddingHorizontal: 10
    }
})