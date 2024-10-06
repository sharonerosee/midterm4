import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal, FlatList, TextInput } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

// Mapping of labels to icons
const iconMapping = {
    'Accounts Center': 'shield', 
    'Saved': 'bookmark',
    'Archive': 'archive', 
    'Your activity': 'activity', 
    'Notifications': 'bell', 
    'Time management': 'clock', 
    'Insights': 'bar-chart', 
    'Scheduled content': 'calendar', 
    'Creator tools and controls': 'bar-chart-2', 
    'Meta Verified': 'check-circle', 
    'Account Privacy': 'lock', 
    'Close Friend': 'users',
    'Crossposting': 'share',
    'Blocked': 'slash', 
    'Hide story and live': 'eye-off',
    'Messages and story replied': 'message-circle', 
    'Tags and mentions': 'tag', 
    'Comments': 'message-square', 
    'Sharing and remixes': 'share-2', 
    'Restricted': 'user-x', 
    'Limit interactions': 'user-minus', 
    'Hidden Words': 'alert-triangle', 
    'Follow and invite friends': 'user-plus' 
};

export const ProfileBody = ({
    name,
    accountName,
    profileImage,
    post,
    followers,
    following,
}) => {
    const [showOptions, setShowOptions] = useState(false); // State for controlling comment modal
    const [searchTerm, setSearchTerm] = useState(''); // State for search input
    const options = [
        { id: '1', label: 'Accounts Center', description: 'Password, security, personal details, ad preferences' },
        { id: '2', label: 'Saved', description: 'Your saved posts' },
        { id: '3', label: 'Archive', description: 'View your archived posts' },
        { id: '4', label: 'Your activity', description: 'Review your activity on Instagram' },
        { id: '5', label: 'Notifications', description: 'Manage your notifications' },
        { id: '6', label: 'Time management', description: 'Track your time spent on Instagram' },
        { id: '7', label: 'Insights', description: 'Get insights into your performance' },
        { id: '8', label: 'Scheduled content', description: 'Get insights into your performance' },
        { id: '9', label: 'Creator tools and controls', description: 'Get insights into your performance' },
        { id: '10', label: 'Meta Verified', description: 'Get insights into your performance' },
        { id: '11', label: 'Account Privacy', description: 'Get insights into your performance' },
        { id: '12', label: 'Close Friend', description: 'Get insights into your performance' },
        { id: '13', label: 'Crossposting', description: 'Get insights into your performance' },
        { id: '14', label: 'Meta Verified', description: 'Get insights into your performance' },
        { id: '15', label: 'Account Privacy', description: 'Get insights into your performance' },
        { id: '16', label: 'Blocked', description: 'Get insights into your performance' },
        { id: '17', label: 'Hide story and live', description: 'Get insights into your performance' },
        { id: '18', label: 'Messages and story replied', description: 'Get insights into your performance' },
        { id: '19', label: 'Tags and mentions', description: 'Get insights into your performance' },
        { id: '20', label: 'Comments', description: 'Get insights into your performance' },
        { id: '21', label: 'Sharing and remixes', description: 'Get insights into your performance' },
        { id: '22', label: 'Restricted', description: 'Get insights into your performance' },
        { id: '23', label: 'Limit interactions', description: 'Get insights into your performance' },
        { id: '24', label: 'Hidden Words', description: 'Get insights into your performance' },
        { id: '25', label: 'Follow and invite friends', description: 'Get insights into your performance' },
    ];

    // Filter options based on search term
    const filteredOptions = options.filter(option => 
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <View>
            {accountName ? (
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingTop: 50,
                    }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                        <Text
                            style={{
                                fontSize: 23,
                                fontWeight: 'bold',
                                fontWeight: 'bold',
                            }}>
                            {accountName}
                        </Text>
                        <Feather
                            name="chevron-down"
                            style={{
                                fontSize: 20,
                                color: 'black',
                                paddingHorizontal: 5,
                                opacity: 0.7,
                            }}
                        />
                    </View>
                    {/* Modal for options */}
                    <Modal
                        visible={showOptions}
                        animationType="slide"
                        onRequestClose={() => setShowOptions(false)}
                    >
                        <View style={{ flex: 1, backgroundColor: 'black', padding: 20 }}>
                            {/* Header with Back Button and Title */}
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                                <TouchableOpacity onPress={() => setShowOptions(false)}>
                                    <Feather name="chevron-left" style={{ fontSize: 25, color: 'white', marginRight: 10 }} />
                                </TouchableOpacity>
                                <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', flex: 0.85, textAlign: 'center'}}>Settings and activity</Text>
                            </View>
                            <TextInput
                                style={{
                                    height: 40,
                                    borderColor: 'gray',
                                    borderWidth: 1,
                                    borderRadius: 5,
                                    paddingHorizontal: 10,
                                    color: 'white',
                                }}
                                placeholder="Search"
                                placeholderTextColor="gray"
                                onChangeText={setSearchTerm} // Update search term on input change
                            />
                            <FlatList
                                data={filteredOptions}
                                keyExtractor={(item) => item.id}
                                renderItem={({ item }) => (
                                    <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: 'gray', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            {/* Icon for the specific option */}
                                            <Feather name={iconMapping[item.label]} style={{ fontSize: 20, color: 'white', marginRight: 10 }} />
                                            <View style={{ flex: 1 }}>
                                                <Text style={{ color: 'white', fontWeight: 'bold' }}>{item.label}</Text>
                                                <Text style={{ color: 'gray' }}>{item.description}</Text>
                                            </View>
                                        </View>
                                        <Feather name="chevron-right" style={{ fontSize: 20, color: 'white', marginLeft: -11}} />
                                    </View>
                                )}
                            />
                        </View>
                    </Modal>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <FontAwesome name="plus-square-o"
                            style={{
                                fontSize: 25,
                                color: 'black',
                                paddingHorizontal: 15,
                                paddingTop: 4
                            }}
                        />
                        
                        {/* Added TouchableOpacity to make the menu icon clickable */}
                        <TouchableOpacity
                            style={{ padding: 10 }}
                            onPress={() => setShowOptions(true)}>
                            <Feather
                                name="menu"
                                style={{
                                    fontSize: 25,
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            ) : null}
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    paddingVertical: 20,
                }}>
                <View
                    style={{
                        alignItems: 'center',
                    }}>
                    <Image
                        source={profileImage}
                        style={{
                            resizeMode: 'cover',
                            width: 80,
                            height: 80,
                            borderRadius: 100,
                        }}
                    />
                    <Text
                        style={{
                            paddingVertical: 5,
                            fontWeight: 'bold',
                        }}>
                        {name}
                    </Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{post}</Text>
                    <Text>Posts</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{followers}</Text>
                    <Text>Followers</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{following}</Text>
                    <Text>Following</Text>
                </View>
            </View>
        </View>
    );
};

export const ProfileButtons = ({ id, name, accountName, profileImage }) => {
    const navigation = useNavigation();
    const [follow, setFollow] = useState(follow);

    return (
        <>
            {id === 0 ? (
                <View
                    style={{
                        width: '100%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                        paddingVertical: 5,
                    }}>
                    <TouchableOpacity
                        onPress={() =>
                            navigation.push('EditProfile', {
                                name: name,
                                accountName: accountName,
                                profileImage: profileImage,
                            })
                        }
                        style={{
                            width: '100%',
                        }}>
                        <View
                            style={{
                                width: '100%',
                                height: 35,
                                borderRadius: 5,
                                borderColor: '#DEDEDE',
                                borderWidth: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Text
                                style={{
                                    fontWeight: 'bold',
                                    fontSize: 14,
                                    letterSpacing: 1,
                                    opacity: 0.8,
                                }}>
                                Edit Profile
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            ) : (
                <View
                    style={{
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                    }}>
                    <TouchableOpacity
                        onPress={() => setFollow(!follow)}
                        style={{ width: '42%' }}>
                        <View
                            style={{
                                width: '100%',
                                height: 35,
                                borderRadius: 5,
                                backgroundColor: follow ? null : '#3493D9',
                                borderWidth: follow ? 1 : 0,
                                borderColor: '#DEDEDE',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Text style={{ color: follow ? 'black' : 'white' }}>
                                {follow ? 'Following' : 'Follow'}
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <View
                        style={{
                            width: '42%',
                            height: 35,
                            borderWidth: 1,
                            borderColor: '#DEDEDE',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 5,
                        }}>
                        <Text>Message</Text>
                    </View>
                    <View
                        style={{
                            width: '10%',
                            height: 35,
                            borderWidth: 1,
                            borderColor: '#DEDEDE',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 5,
                        }}>
                        <Feather
                            name="chevron-down"
                            style={{ fontSize: 20, color: 'black' }}
                        />
                    </View>
                </View>
            )}
        </>
    );
};