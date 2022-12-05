import React from 'react'
import { View } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Map from '../components/Map'
import NavigateCard from '../components/NavCard'
import RideOptionsCard from '../components/RideOptionsCard'
import { useSelector } from 'react-redux'
import { selectDestination, selectOrigin } from '../slices/navSlice'
import { GOOGLE_MAPS_APIKEY } from '@env';

const RouteMapScreen = () => {

  const Stack = createNativeStackNavigator()
  const origin = useSelector(selectOrigin)
  const destination = useSelector(selectDestination)

  return (
    <View>
      <View style={tw`h-1/2`}>
        <Map
          origin={origin}
          destination={destination}
          apiKey={GOOGLE_MAPS_APIKEY} />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name='NavigateCard'
            component={NavigateCard}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name='RideOptionsCard'
            component={RideOptionsCard}
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  )
}

export default RouteMapScreen
