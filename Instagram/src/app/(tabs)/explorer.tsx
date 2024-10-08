import React, { useState } from 'react';
import {
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
  Text,
  FlatList,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import SearchContent from '~/src/components/SearchContent';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionic from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const Search = () => {
  const [image, setImage] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [searchHistory, setSearchHistory] = useState([]);

  const getData = (data: React.SetStateAction<null>) => {
    setImage(data);
  };

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  // Handle Cancel button press
  const handleCancel = () => {
    setSearchText('');
    setIsFocused(false);
    dismissKeyboard();
  };

  // Handle Search Submission
  const handleSearchSubmit = () => {
    if (searchText.trim() !== '') {
      // Add to search history only when the search is submitted
      setSearchHistory((prevHistory) => {
        return [searchText, ...prevHistory];
      });
      setSearchText(''); // Clear input after search
    }
    dismissKeyboard(); // Dismiss keyboard after submitting
  };

  // Handle changing text in the search bar
  const handleChangeText = (text: string) => {
    setSearchText(text);
  };

  // Handle selecting from search history
  const handleSelectHistory = (item: string) => {
    setSearchText(item);
    setIsFocused(true);
  };

  // Handle deleting a specific item from search history
  const handleDeleteHistoryItem = (index: number) => {
    setSearchHistory((prevHistory) =>
      prevHistory.filter((_, i) => i !== index)
    );
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
    setIsFocused(false);
  };

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        position: 'relative',
        paddingTop: 45,
      }}>
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 10,
              marginBottom: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#F0F0F0',
                paddingHorizontal: 10,
                borderRadius: 10,
                height: 40,
                flex: 1,
              }}>
              <Feather name="search" size={20} color="gray" />
              <TextInput
                value={searchText}
                onChangeText={handleChangeText}
                placeholder="Search"
                placeholderTextColor="gray"
                style={{ flex: 1, marginLeft: 10 }}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onSubmitEditing={handleSearchSubmit}
                returnKeyType="search"
              />
            </View>
            {isFocused && (
              <TouchableOpacity onPress={handleCancel} style={{ marginLeft: 10 }}>
              <Text>Cancel</Text>
              </TouchableOpacity>
            )}
          </View>

          {/* Search History */}
          {isFocused && searchHistory.length > 0 && (
            <View style={{ paddingHorizontal: 10 }}>
              <FlatList
                data={searchHistory}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingVertical: 10,
                    }}>
                    <TouchableOpacity
                      onPress={() => handleSelectHistory(item)}
                      style={{ flex: 1 }}>
                      <Text style={{ color: '#000000' }}>{item}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => handleDeleteHistoryItem(index)}>
                      <AntDesign name="close" size={20} color="gray" />
                    </TouchableOpacity>
                  </View>
                )}
              />
            </View>
          )}

          {/* Content Section */}
          {!isFocused && (
            <ScrollView showsVerticalScrollIndicator={false}>
              <SearchContent data={getData} />
              <TouchableOpacity
                style={{
                  margin: 25,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <AntDesign name="pluscircleo" style={{ fontSize: 40, opacity: 0.5 }} />
              </TouchableOpacity>
            </ScrollView>
          )}

          {/* Modal View when an image is selected */}
          {image && (
            <View
              style={{
                position: 'absolute',
                zIndex: 1,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(52,52,52,0.8)',
              }}>
              <StatusBar backgroundColor="#525252" barStyle="dark-content" />
              <View
                style={{
                  position: 'absolute',
                  top: windowHeight / 6,
                  left: windowWidth / 18,
                  backgroundColor: 'white',
                  width: '90%',
                  height: 465,
                  borderRadius: 15,
                  zIndex: 1,
                  elevation: 50,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingVertical: 10,
                    paddingHorizontal: 15,
                  }}>
                  <Image
                    source={image}
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 100,
                    }}
                  />
                  <View style={{ paddingLeft: 8 }}>
                    <Text style={{ fontSize: 12, fontWeight: '600' }}>
                      the_anonymous_guy
                    </Text>
                  </View>
                </View>
                <Image source={image} style={{ width: '100%', height: '80%' }} />
                <View
                  style={{
                    justifyContent: 'space-around',
                    width: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 8,
                  }}>
                  <Ionic name="heart-outline" style={{ fontSize: 26 }} />
                  <Ionic name="person-circle-outline" style={{ fontSize: 26 }} />
                  <Feather name="navigation" style={{ fontSize: 26 }} />
                </View>
              </View>
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Search;
