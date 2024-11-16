import { createContext } from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect } from "react";

export const PlaceContext = createContext(null);

function PlaceProvider({ children }) {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    fetch("/places.json")
      .then((res) => res.json())
      .then((data) => setPlaces(data));
  }, []);



  const placesInfo = {
    places,
    setPlaces,
  };
  return (
    <PlaceContext.Provider value={placesInfo}>
        {children}
    </PlaceContext.Provider>
  );
}

PlaceProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlaceProvider;