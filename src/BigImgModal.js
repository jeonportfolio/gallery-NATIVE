import {  Image, Modal, Pressable, TouchableOpacity, View } from "react-native";
import { SimpleLineIcons } from '@expo/vector-icons';


const ArrowButton = ( iconName, onPress, disabled ) => {
    return (
        <TouchableOpacity disabled = {disabled} onPress = {onPress} style= {{ justifyContent: "center", paddingHorizontal:20, height: "100%"}}>
            <SimpleLineIcons
                    name={iconName}
                    size={20}
                    color= {disabled ? "transparent" : "black" }
            /> 
        </TouchableOpacity>      
    )
}

export default ({
    modalVisible ,
    onPressBackdrop, 
    selectedImage,
    onPressLeftArrow,
    onPressRightArrow
}) => {
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

                <View style = {{ flexDirection: "row", alignItems: "center"}}>
                    <Pressable>
                        {/* < 화살표 */}
                        <ArrowButton 
                                iconName="arrow-left" 
                                onPress={onPressLeftArrow}
                                disabled={!showPreviousArrow}
                        /> 
                            
                        {/* 이미지 */}
                        <Image 
                            source={{uri: selectedImage?.uri}} 
                            style={{width:280, height:280}} 
                            resizeMode="contain"
                        />

                        {/* > 화살표 */}

                            <ArrowButton 
                                iconName="arrow-right" 
                                onPress={onPressRightArrow}
                                disabled={!showNextArrow}
                            /> 
                        
                       
                    </Pressable>
                </View>
            </Pressable>
        
       </Modal> 
    ) 
}