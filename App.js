import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Dimensions, FlatList, Image, Modal, Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useGallery } from './src/use-gallery';
import MyDropDownPicker from './src/MyDropDownPicker';
import TextInputModal from './src/TextInputModal';


export default function App() {
  
  const { 
      imagesWidthAddButton, 
      pickImage, 
      deleteImage,
      selectedAlbum,
      modalVisible,
      openModal,
      closeModal,
  } = useGallery(); 
  
  const width = Dimensions.get('screen').width; // 3등분 해주기 위한 함수 
  const columnSize = width / 3 ;
  
  const onPressOpenGallery = () => {
      pickImage();
  };

  const onLongPressImage = (iamgeId) => deleteImage(iamgeId);
  
  const onPressAddAlbum = () => {
      openModal();
  };

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
        {/* 앨범 추가 Dropdown */}
        <MyDropDownPicker selectedAlbumTitle= {selectedAlbum.title} onPressAddAlbum={onPressAddAlbum}/>
        
        {/* 앨범 추가하는 TextInput */}
        <TextInputModal
          modalVisible={modalVisible}
        />
        
        {/* 이미지 리스트 */}
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

    backgroundColor: '#fff',
    marginTop: Platform.OS === "android" ? 30 : 0,
   
  },
});
