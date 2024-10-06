import { Text, View, Image, TextInput, Pressable } from 'react-native';
import { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import Button from '~/src/components/Button'

export default function CreatePost() {
    const [caption, setCaption] = useState('');
    const [image, setImage] = useState<string | null>(null);

    useEffect(() => {
        if (!image) {
            pickImage();
        }
    }, [image])

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <View style={{ padding: 12, alignItems: 'center', flex: 1 }}>
            {/* Image picker */}
            {image ? (
                <Image
                    source={{ uri: image }}
                    style={{ width: 208, aspectRatio: 3 / 4, borderRadius: 12, backgroundColor: '#94A3B8' }}
                />
            ) : (
                <View style={{ width: 208, aspectRatio: 3 / 4, borderRadius: 12, backgroundColor: '#94A3B8' }} />
            )}

            <Text onPress={pickImage} style={{ color: '#3B82F6', fontWeight: '600', marginVertical: 20 }}>
                Change
            </Text>

            {/* TextInput for caption */}
            <TextInput
                value={caption}
                onChangeText={(newValue) => setCaption(newValue)}
                placeholder='What is on your mind'
                style={{ width: '100%', padding: 12, borderWidth: 1, borderColor: '#E5E7EB', borderRadius: 6 }} // Add border to make it stand out
            />

            {/* Button */}
            <View style={{ marginTop: 'auto', width: '100%' }}>
                <Button title='Share' />
            </View>
        </View>
    );
}
