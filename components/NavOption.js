import React from 'react'
import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames'

const NavOption = ({ navigation, origin, data }) => {

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
