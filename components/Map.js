import React, { useRef, useEffect } from 'react'
import MapView from 'react-native-maps'
import { Marker } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import tw from 'tailwind-react-native-classnames'

const Map = ({ origin, destination, apiKey }) => {

  const mapRef = useRef(null)

  useEffect(() => {
    if (!origin || !destination) return;
    mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 }
    })
  }, [origin, destination])

  return (
    <MapView
      ref={mapRef}
      style={tw`flex-1`}
      mapType='mutedStandard'
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={apiKey}
          strokeWidth={3}
          strokeColor="hotpink"
          onReady={result => {
            console.log(`Distance: ${result.distance} km`)
            console.log(`Duration: ${result.duration} min.`)
          }}
        />
      )}
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Origin"
          description={origin.description}
          identifier="origin"
        />
      )}
      {destination?.location && (
        <Marker
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          title="Destination"
          description={destination.description}
          identifier="destination"
        />
      )}
    </MapView>
  )
}

export default Map
