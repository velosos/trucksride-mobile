import React from 'react'
import { Text, View, SafeAreaView, Image } from 'react-native'
import { Icon } from 'react-native-elements';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import tw from 'tailwind-react-native-classnames'
import NavOption from '../components/NavOption'
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
import NavFavourites from '../components/NavFavourites';
import { selectOrigin } from '../slices/navSlice';
import { optionsData, favData } from '../store'


const Home = () => {

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin)

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
        <NavOption
          navigation={navigation}
          origin={origin}
          data={optionsData}
        />
        <Text style={tw`text-center py-5 text-xl`}>Last rides</Text>
        <NavFavourites data={favData} />
      </View>
    </SafeAreaView>
  )
}

export default Home
