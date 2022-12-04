import React from 'react'
import { Text, View, SafeAreaView, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import NavOption from '../components/NavOption'

const Home = () => {
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Text style={tw`mt-2 text-3xl ml-2`}>truckride</Text>
                <NavOption />
            </View>
        </SafeAreaView>
    )
}

export default Home
