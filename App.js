import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Dimensions, FlatList, Image, Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useGallery } from './src/use-gallery';


export default function App() {
  
  const {images, imagesWidthAddButton, pickImage, deleteImage} = useGallery(); 
  
  const width = Dimensions.get('screen').width; // 3등분 해주기 위한 함수 
  const columnSize = width / 3 ;
  
  const onPressOpenGallery = () => {
      pickImage();
  };

  const onLongPressImage = (iamgeId) => deleteImage(iamgeId);

  const renderItem = ({ item: {id, uri}, index}) => {

    if(id ===- 1) {
      return ( 
        <TouchableOpacity
          onPress={onPressOpenGallery}
          style = {{
            width : columnSize, 
            height: columnSize,
            backgroundColor: "lightgrey",
            justifyContent:"center",
            alignItems: "center",
          }}>
             <Text style = {{ fontWeight: "100", fontSize: 50}}>+</Text>
         </TouchableOpacity> 
      )
    }
    
    return ( 
      <TouchableOpacity onLongPress={() => onLongPressImage(id)}>
            <Image 
              source={{uri}} 
              style= {{width: columnSize, height:columnSize} }

            />
       </TouchableOpacity> 
    );
  };
  
  return (
    <SafeAreaView style={styles.container}>
        <Button title="갤러리 열기" onPress={onPressOpenGallery}/>
        <FlatList
          data = {imagesWidthAddButton}
          renderItem={renderItem}
          numColumns={3}
        />
        
    </SafeAreaView>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:"center",
    alignItems:"center",
    marginTop: Platform.OS === "android" ? 30 : 0,
   
  },
});
