import React, { Component } from "react";
import { Text, View, ImageBackground, Image, TouchableOpacity, TextInput, SafeAreaView, Platform, StatusBar, StyleSheet } from "react-native";
import db from '../localdb1';

export default class Gta3Screen extends Component {
    constructor() {
        super();
        this.state = {
            text: '',
            atalho: [],
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground
                    source={require('../assets/gta3-bg.png')}
                    style={styles.backgroundImage}>

                    <TextInput
                        style={styles.inputBox}
                        onChangeText={text => {
                            this.setState({ text: text });
                        }}
                        value={this.state.text}
                    />
                    <TouchableOpacity
                        style={styles.goButton}
                        onPress={() => {
                            var word = this.state.text.toUpperCase();
                            db[word]
                                ? (this.setState({ atalho: db[word].atalho }))
                                : alert("a palavra não existe no banco de dados")
                        }}>
                        <Text style={styles.buttonText}> Buscar</Text>
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.atalho}> {this.state.atalho}</Text>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    inputBox: {
        marginTop: 50,
        width: '80%',
        alignSelf: 'center',
        height: 40,
        textAlign: 'center',
        borderWidth: 4,
        color: 'black',
    },
    goButton: {
        width: '50%',
        height: 55,
        alignSelf: 'center',
        padding: 10,
        margin: 10,
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold'
    },
    atalho: {
        textAlign: 'center',
        fontSize: 30,
        color: 'white',
    },
})