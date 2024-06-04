import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Dimensions, FlatList, Image, Modal, Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useGallery } from './src/use-gallery';
import MyDropDownPicker from './src/MyDropDownPicker';
import TextInputModal from './src/TextInputModal';
import BigImgModal from './src/BigImgModal';


export default function App() {
  
  const { 
      imagesWidthAddButton, 
      pickImage, 
      deleteImage,
      selectedAlbum,
      modalVisible,
      openModal,
      closeModal,
      albumTitle,
      setAlbumTitle,
      addAlbum,
      resetAlbumTitle,
      isDropdownOpen,
      openDropDown,
      closeDropDown,
      albums,
      selectAlbum,
      deleteAlbum
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

  const onSubmitEditing = () => {
    if(!albumTitle) return;
   
    //1. 앨범에 타이틀 추가 
    addAlbum();
    //2. 모달 닫기 & TextInput의 Value 초기화 
    closeModal();
    resetAlbumTitle();
  }

  const onPressBackdrop = () => {
    closeModal();

  }

  const onPressHeader= () => {
    if( isDropdownOpen){
      closeDropDown();
    } else {
      openDropDown();
    }
  };

  const onPressAlbum = (album) => {
        selectAlbum(album);
        closeDropDown();
  };

  const onLongPressAlbum = (albumId) => {
      deleteAlbum(albumId);
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
        <MyDropDownPicker 
            onPressHeader={onPressHeader}
            selectedAlbumTitle= {selectedAlbum.title} 
            onPressAddAlbum={onPressAddAlbum}
            isDropdownOpen={isDropdownOpen}
            albums = {albums}
            onPressAlbum = {onPressAlbum}
            onLongPressAlbum = {onLongPressAlbim}
        />
        
        {/* 앨범 추가하는 TextInput */}
        <TextInputModal
          modalVisible={modalVisible}
          albumTitle={albumTitle}
          setAlbumTitle={setAlbumTitle}
          selectedAlbum={selectedAlbum}
          onSubmitEditing={onSubmitEditing}
          onPressBackdrop={onPressBackdrop}
        />
        
        {/* 이미지 리스트 */}
        <FlatList
          data = {imagesWidthAddButton}
          renderItem={renderItem}
          numColumns={3}
          style= {{ zIndex: -1}}
        />

        {/* 이미지를 크게 보는 모달  */}
        <BigImgModal
          modalVisible={bigImgModalVisible}
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
