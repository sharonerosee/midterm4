import { Text, Pressable } from 'react-native';

type ButtonProps = {
    title: string;
    onPress?: () => void;
};

export default function Button({ title, onPress }: ButtonProps) {
    return (
        <Pressable
            onPress={onPress}
            style={{ backgroundColor: '#3B82F6', width: '100%', padding: 16, alignItems: 'center', borderRadius: 10 }}>
            <Text style={{ color: 'white', fontWeight: '600' }}>{title}</Text>
        </Pressable>
    );
}