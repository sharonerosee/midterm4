import { Text } from 'react-native';
import { Redirect } from 'expo-router';

export default function Home(){
    return <Redirect href="/(tabs)" />;
}