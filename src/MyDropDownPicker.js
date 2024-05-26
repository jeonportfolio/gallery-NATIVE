import { Text, TouchableOpacity, View } from "react-native"

const headerHeight = 50;



export default ({selectedAlbumTitle, onPressAddAlbum}) => {
    return (
        <View style= {{ 
             height: headerHeight,
             alignContent: "center",
             justifyContent:"center",
             
        }}>
            <Text style={{ fontWeight: "bold" }}>{selectedAlbumTitle}</Text>

            <TouchableOpacity style= {{
                onPress : {onPressAddAlbum},
                position: "absolute",
                right:0,
                height: headerHeight,
                alignContent: "center",
                justifyContent:"center",
                paddingHorizontal: 10, //높이는 이미 설정 되어있기 때문에 터치범위만 키우는 것 
            }}>
                    <Text>앨범 추가 </Text>
            </TouchableOpacity>


        </View>
    )
}