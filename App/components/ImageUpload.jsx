import React, { useState } from 'react'
import { Button, Image, View} from "react-native"
import * as ImagePicker from 'expo-image-picker';

const ImageUpload = ({ buttonText }) => {
    const [image, setImage] = useState(null);
    const pickImage = async () => {
        // No se necesitan permisos para acceder a la galería
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [3, 4],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <View>
            <Button title={buttonText} onPress={pickImage} />
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        </View>
    )
}

export default ImageUpload