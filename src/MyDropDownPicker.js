import { Text, TouchableOpacity, View } from "react-native"
import { SimpleLineIcons } from '@expo/vector-icons';
const headerHeight = 50;



export default ({ 
    isDropdownOpen,
     onPressHeader,
     selectedAlbum,
     onPressAddAlbum ,
     albums,
     onPressAlbum,
     onLongPressAlbum
       
    }) => {
    return (
       <View> 
        <TouchableOpacity 
            activeOpacity = {1}
            onPress = {onPressHeader}
            style= {{ 
             height: headerHeight,
             alignContent: "center",
             justifyContent:"center",
             flexDirection:"row",
        }}>
            <Text style={{ fontWeight: "bold" }}>{selectedAlbum.Title}</Text>
            <SimpleLineIcons
                name={isDropdownOpen ? "arrow-down" : "arrow-up"}
                size={12}
                color= "black"
                style = {{ marginLeft : 8}}
            />
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
            {isDropdownOpen && (
                <View 
                    style = {{ 
                        position: "absolute",
                        top: headerHeight,                        
                        width: "100%" , 
                        borderTopColor: "grey",
                        borderTopWidth: 1,
                        borderBottomColor: "grey",
                        borderBottomWidth: 1,
                    }}>
                    {albums.map((album, index) => {
                        const isSelectedAlbum = album.id === selectedAlbumTitle.id;
                        
                        return (
                            <TouchableOpacity 
                                key={`album-${index}`}
                                style= {{
                                    paddingVertical: 12,
                                    width: "100%",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor:"#fff"
                                }}
                                onPress={() => onPressAlbum(album)} 
                                onLongPress = {() => onLongPressAlbum()}
                                > 
                                 <Text style= {{fontWeight: isSelectedAlbum ? "bold" : undefined }}>{albums.title}</Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            )}

        </TouchableOpacity>
    </View>
    );
};