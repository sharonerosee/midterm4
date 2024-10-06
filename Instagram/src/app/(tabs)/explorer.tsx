import React, { useState } from 'react';
import { TextInput, View, Text, StyleSheet, ScrollView, TouchableWithoutFeedback, Keyboard, TouchableOpacity, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function ExplorerPage() {
    const [searchText, setSearchText] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [searchHistory, setSearchHistory] = useState([]);

    // Hide keyboard when clicking outside the input
    const dismissKeyboard = () => {
        Keyboard.dismiss();
        setIsFocused(false);
    };

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
            setSearchHistory((prevHistory) => [searchText, ...prevHistory]);
            setSearchText(''); // Clear input after search
        }
        dismissKeyboard(); // Dismiss keyboard after submitting
    };

    // Handle changing text in the search bar
    const handleChangeText = (text) => {
        setSearchText(text);
    };

    // Handle selecting from search history
    const handleSelectHistory = (item) => {
        setSearchText(item); // Set the search bar text to the selected item
        setIsFocused(true);  // Keep the search bar focused for further editing
    };

    return (
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
            <View style={styles.container}>
                <View style={styles.searchContainer}>
                    {/* Search Bar */}
                    <View style={[styles.searchBar, isFocused && styles.searchBarFocused]}>
                        <Feather name="search" size={20} color="gray" style={styles.icon} />
                        <TextInput
                            value={searchText}
                            onChangeText={handleChangeText} // Handle text input change
                            placeholder="Search"
                            placeholderTextColor="gray"
                            style={styles.input}
                            onFocus={() => setIsFocused(true)}  // Activate search bar when focused
                            onBlur={() => setIsFocused(false)}  // Deactivate when blurred
                            onSubmitEditing={handleSearchSubmit} // Trigger search when pressing Enter/Submit
                            returnKeyType="search" // Show search button on keyboard
                        />
                    </View>

                    {/* Cancel Button */}
                    {isFocused && (
                        <TouchableOpacity onPress={handleCancel} style={styles.cancelButton}>
                            <Text style={styles.cancelText}>Cancel</Text>
                        </TouchableOpacity>
                    )}
                </View>

                {/* Search History - only shown when focused */}
                {isFocused && searchHistory.length > 0 && (
                    <View style={styles.historyContainer}>
                        <Text style={styles.historyTitle}>Search History</Text>
                        <FlatList
                            data={searchHistory}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => handleSelectHistory(item)}>
                                    <Text style={styles.historyItem}>{item}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                )}

                {/* Hide other content when search bar is focused */}
                {!isFocused && (
                    <View style={styles.content}>
                        <Text>This is the Explore Page</Text>
                    </View>
                )}
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 60,
        backgroundColor: 'white',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F0F0F0',
        paddingHorizontal: 10,
        borderRadius: 10,
        height: 40,
        flex: 1,
        marginRight: 10,
    },
    searchBarFocused: {
        backgroundColor: '#e0e0e0',
    },
    icon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        fontSize: 16,
    },
    cancelButton: {
        justifyContent: 'center',
    },
    cancelText: {
        color: '#007AFF',
        fontSize: 16,
    },
    historyContainer: {
        marginTop: 20,
    },
    historyTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10,
    },
    historyItem: {
        paddingVertical: 10,
        fontSize: 16,
        color: '#007AFF',
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});
