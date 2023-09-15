import React from 'react';

import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import { CssBaseline, Grid } from '@material-ui/core';
import { getPlacesData } from './api';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {

  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [type, setType] = useState('restaurants')
  const [rating, setRating] = useState('')
  const [filteredPlaces, setFilteredPlces] = useState([])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude })
    })
  }, [])

  useEffect(() => {
    const filteredPlaces = places.filter((place) => place.rating > rating)
    setFilteredPlces(filteredPlaces)
  }, [rating])

  useEffect(() => {
    if (bounds.sw && bounds.ne) {
      setIsLoading(true)
      if (bounds) {
        getPlacesData(type, bounds.sw, bounds.ne)
          .then((data) => {
            if(data) {
              const filteredData = data.filter((place) => place.name && place.num_reviews > 0 )
              setPlaces(filteredData);
              setFilteredPlces([])
              setIsLoading(false)
            }
          })
      }
    }
  }, [type, bounds])
  return (
    <>
      <CssBaseline />
      <Header setCoordinates={setCoordinates} />
      <Grid container spacing={3} style={{ width: '100%', flexWrap: 'nowrap', margin: 0, padding: 0 }}>
        <Grid item xs={12} md={4}>
          <List
            places={filteredPlaces.length ? filteredPlaces : places}
            isLoading={isLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={filteredPlaces.length ? filteredPlaces : places}
          />
        </Grid>
      </Grid>

    </>
  );
}

export default App;
