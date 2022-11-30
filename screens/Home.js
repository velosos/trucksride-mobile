import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames'

const Home = () => {
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image
                    style={{
                        width: 100,
                        height: 100,
                        resizeMode: "contain"
                    }}
                    source={{
                        uri: 'https://cdn-icons-png.flaticon.com/512/181/181799.png',
                    }} />
            </View>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({})