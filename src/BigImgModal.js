import {  Image, Modal, Pressable, View } from "react-native"

export default ({modalVisible ,onPressBackdrop, selectedImage }) => {
    return(
       <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}>
            <Pressable 
                onPress={onPressBackdrop} 
                style={{ 
                    flex:1, 
                    justifyContent:"center",
                    alignContent:"center",
                    backgroundColor: `rgba(255, 255, 255, 0.5)`
                    //자식컴포넌트는 제외하고 투명도 조절하기 
                }}
            > 
                <Pressable>
                    <Image 
                        source={{uri: selectedImage?.uri}} 
                        style={{width:280, height:280}} 
                        resizeMode="contain"
                    />
                </Pressable>
            </Pressable>
        
       </Modal> 
    ) 
}