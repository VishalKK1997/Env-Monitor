import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import React from "react";

const libraries = ["places"];
const mapContainerStyle = {
  width: "65vw",
  height: "70vh",
  borderRadius: "10px",
};
const center = {
  lat: 23.522431430261793,
  lng: 87.31047119682235,
};

const RouteRecommend = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (loadError) return "Error loading Maps";
  if (!isLoaded) return "Loading Google Maps...";

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      ></GoogleMap>
    </div>
  );
};

export default RouteRecommend;
