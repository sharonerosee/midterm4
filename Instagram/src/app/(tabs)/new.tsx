import { Text, View, Image, TextInput, Pressable } from 'react-native';
import { useState } from 'react';

export default function CreatePost() {
    const [caption, setCaption] = useState('');

    return (
        <View style={{ padding: 12, alignItems: 'center', flex: 1 }}>
            {/* Image picker */}
            <Image
                source={{
                    uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg'
                }}
                style={{ width: 208, aspectRatio: 3 / 4, borderRadius: 12, backgroundColor: '#94A3B8' }} // bg-slate-300 equivalent
            />

            <Text onPress={() => { }} style={{ color: '#3B82F6', fontWeight: '600', marginVertical: 20 }}>
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
                <Pressable style={{ backgroundColor: '#3B82F6', width: '100%', padding: 16, alignItems: 'center', borderRadius: 10 }}>
                    <Text style={{ color: 'white', fontWeight: '600' }}>Share</Text>
                </Pressable>
            </View>
        </View>
    );
}
