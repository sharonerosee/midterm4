import {Tabs} from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabsLayout(){
    return <Tabs screenOptions={{tabBarActiveTintColor: 'black', tabBarShowLabel: false}}>
        <Tabs.Screen name='index' 
        options={{headerTitle: 'For you',
            tabBarIcon: ( {color} ) => (
                <FontAwesome name="home" size={26} color={color} />
            ),
        }}
        />

        <Tabs.Screen name='explorer' 
        options={{headerTitle: 'Explorer Page',
            tabBarIcon: ( {color} ) => (
                <FontAwesome name="search" size={26} color={color} />
            ),
        headerShown: false,
        }}
        />

        <Tabs.Screen name='new' 
        options={{headerTitle: 'Create post',
            tabBarIcon: ( {color} ) => (
                <FontAwesome name="plus-square-o" size={26} color={color} />
            ),
        }}
        />

        <Tabs.Screen name='Reels' 
        options={{headerTitle: 'Reels Video',
            tabBarIcon: ( {color} ) => (
                <FontAwesome name="video-camera" size={26} color={color} />
            ),
            headerShown: false,
        }}
        />
        <Tabs.Screen name='profile' 
        options={{headerTitle: 'Profile',
            tabBarIcon: ( {color} ) => (
                <FontAwesome name="user" size={26} color={color} />
            ),
        }}
        />
    </Tabs>
}