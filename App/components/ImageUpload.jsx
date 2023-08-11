import React, { useState } from 'react'
import { Button, Image, Pressable, StyleSheet, Text, View} from "react-native"
import * as ImagePicker from 'expo-image-picker';
import colors from "../constants/colors"

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
            <Pressable onPress={pickImage} style={styles.button}>
                <Text style={styles.buttonText}>{buttonText}</Text>
            </Pressable>
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        borderWidth: 3,
		borderRadius: 5,
		borderColor: colors.gris,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        padding: 7,
        width: '70%',
        color: 'white',
        backgroundColor: 'rgba(91, 90, 91, .5)',
        textAlign: 'center',
        fontWeight: 'bold',
        borderRadius: 3,
    }
})

export default ImageUpload