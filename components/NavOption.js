import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import { Icon } from 'react-native-elements';
import { useSelector } from 'react-redux';
import tw from 'tailwind-react-native-classnames'
import { selectOrigin } from '../slices/navSlice';


const data = [
  {
    id: "450",
    title: "Simulate freight",
    image: "http://atlas-content-cdn.pixelsquid.com/stock-images/delivery-truck-box-Av8vKM7-600.jpg",
    screen: "RouteMapScreen",
  },
  {
    id: "550",
    title: "Ride historic",
    image: "https://www.pngmart.com/files/11/Blank-Package-PNG-Image.png",
    screen: "HistoryScreen"
  },
];

const NavOption = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin)

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          style={tw`p-2 pl-6 pb-8 pt-4 m-2 mt-8 w-40 border-2 border-gray-200 rounded	`}
          disabled={!origin}
        >
          <View style={tw`${!origin
            && item.title !== "Ride historic"
            && "opacity-20"}`}>
            <Image
              style={{ width: 120, height: 120, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
            <Text style={tw`mt-2`}>{item.title}</Text>
            <Icon
              style={tw`p-2 bg-pink-400 rounded-full w-10 mt-4`}
              name="arrowright"
              color="white"
              type="antdesign"
            />
          </View>
        </TouchableOpacity>
      )
      }
    />
  )
}

export default NavOption
