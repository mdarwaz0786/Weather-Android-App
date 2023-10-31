import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

export default function SearchBar({ fetchWeatherData }) {
    const [cityName, setCityName] = useState('');

    return (
        <View style={styles.searchBar}>
            <TextInput onChangeText={(text) => setCityName(text)} value={cityName} placeholder='Enter City name' />
            <EvilIcons name="search" size={28} color="black" onPress={() => fetchWeatherData(cityName)} />
        </View>
    );
};

const styles = StyleSheet.create({
    searchBar: {
        marginTop: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: Dimensions.get('screen').width - 20,
        borderWidth: 1.5,
        paddingVertical: 10,
        borderRadius: 25,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        backgroundColor: 'lightgray',
        borderColor: 'lightgray'
    },
});