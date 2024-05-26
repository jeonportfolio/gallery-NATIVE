import { Modal, SafeAreaView, TextInput, View } from "react-native"

export default ({modalVisible}) => {
    return(
       <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}>
            <View style={{ backgroundColor: "lightgreen"}}>
                    <SafeAreaView style= {{ position:"absolute", bottom: 0}}>   
                        <TextInput style = {{width: "100%", backgroundColor:"lightblue"}}/>
                    </SafeAreaView>
            </View>
       </Modal> 
    ) 
}