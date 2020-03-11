import React from "react"
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps"

function Map() {
  return (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 45.524818, lng: -122.678032 }}
    >
      <Marker position={{ lat: 45.524818, lng: -122.678032 }} />
    </GoogleMap>
  )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

const MancepsMap = () => {
  return (
    <div
      style={{
        width: "25vw",
        height: "40vh",
        margin: "40px auto",
      }}
    >
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.GATSBY_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>
  )
}

export default MancepsMap
