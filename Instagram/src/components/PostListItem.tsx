import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import posts from '~/assets/data/posts.json';
import { AntDesign, Ionicons, Feather } from '@expo/vector-icons';



export default function PostListItem({post, item}) {
    // const [like, setLike] = useState(item.isLike);
    return (
        <View className='bg-white'>
            {/* Header */}
            <View className='p-3 flex-row items-center gap-2'>
                <Image
                    source={{ uri: post.user.image_url }}
                    className='w-12 aspect-square rounded-full'
                />
                <Text className='font-semibold'>{post.user.username}</Text>
            </View>
            <Image
                source={{ uri: post.image_url }}
                className='w-full aspect-[4/3]'
            />

            {/* Icons */}
            <View className='flex-row gap-3 p-3'>
                <AntDesign name="hearto" size={20} />
                {/* <TouchableOpacity onPress={() => setLike(!like)} style={{ padding: 10 }}>
                    <AntDesign
                        name={like ? 'heart' : 'hearto'}
                        style={{ color: like ? 'red' : 'white', fontSize: 20 }}
                    />
                    <Text style={{ color: 'white' }}>{item.likes}</Text>
                </TouchableOpacity> */}
                <Ionicons name='chatbubble-outline' size={20} />
                <Feather name='send' size={20} />

                <Feather name='bookmark' size={20} className='ml-auto' />
            </View>
        </View>
    );
}