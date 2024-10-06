import { Text, View, Image, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import Button from '~/src/components/Button'

export default function ProfileScreen() {
    const [image, setImage] = useState<string | null>(null);
    const [username, setUsername] = useState('')

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <View className='p-3' style={{ flex: 1 }}>
            {/* Avatar image picker */}
            {image ? (
                <Image
                    source={{ uri: image }}
                    className='self-center'
                    style={{ width: 208, height: 208, borderRadius: 104, backgroundColor: '#94A3B8' }}
                />
            ) : (
                <View
                    className='self-center'
                    style={{ width: 208, height: 208, borderRadius: 104, backgroundColor: '#94A3B8' }} />
            )}

            <Text
                onPress={pickImage}
                className='self-center'
                style={{ color: '#3B82F6', fontWeight: '600', marginVertical: 20 }}>
                Change
            </Text>

            {/* Form */}
            <Text className='mb-2 text-gray-400 font-semibold'>Username</Text>
            <TextInput
                placeholder='Username'
                value={username}
                onChangeText={setUsername}
                className='border border-gray-300 p-3 rounded-md shadow-lg'
            />

            {/* Button */}
            <View style={{ marginTop: 'auto', width: '100%', gap: 5 }}>
                <Button title='Update Profile' />
                <Button title='Sign Out' />
            </View>
        </View>
    );
}