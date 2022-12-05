import React from 'react'
import { Icon } from 'react-native-elements';
import { Text, View, SafeAreaView, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import NavOption from '../components/NavOption'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
import NavFavourites from '../components/NavFavourites';

const Home = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <View style={tw`flex flex-row `}>
          <Icon
            name='navigate-circle-outline'
            type='ionicon'
            color='pink'
            size={44}
          />
          <Text style={tw`mt-4 mb-2 text-3xl ml-2`}>truck
            <Text style={tw`mt-2 text-3xl ml-2 text-pink-400`}>ride</Text>
          </Text>
        </View>
        <GooglePlacesAutocomplete
          placeholder='Where From?'
          styles={{
            container: {
              flex: 0
            },
            textInput: {
              fontSize: 18
            },
          }}
          onPress={(data, details = null) => {
            dispatch(setOrigin({
              location: details.geometry.location,
              description: data.description
            }))
            dispatch(setDestination(null))
          }}
          fetchDetails={true}
          returnKeyType={'search'}
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en'
          }}
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}
        />
        <NavOption />
        <NavFavourites />
      </View>
    </SafeAreaView>
  )
}

export default Home
