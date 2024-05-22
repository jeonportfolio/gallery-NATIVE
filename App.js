import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

export default function App() {
  const [image, setImage] = useState(null);
   
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  
  
  
  
  const onPressOpenGallery = () => {
      pickImage(
        
      );
  }
  
  return (
    <View style={styles.container}>
        <Button title="갤러리 열기" onPress={onPressOpenGallery}/>
        <Image source={{uri: image}} /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:"center",
    alignItems:"center",
   
  },
});
