import {  Modal, View } from "react-native"

export default ({modalVisible}) => {
    return(
       <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}>
            <View style={{ flex:1 }}> 

            </View>
        
       </Modal> 
    ) 
}