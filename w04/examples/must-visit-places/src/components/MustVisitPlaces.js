import './MustVisitPlaces.css';
import AddPlaceForm from './AddPlaceForm';
import Place from './Place';
import { useState } from 'react';

function MustVisitPlaces({ places }) {
  const [existingPlaces, setExistingPlaces] = useState(places);
  const placeList = existingPlaces.map( name => <Place onDeleteClick={deletePlace} key={name} placeName={name} />);

  // handle the deletion of a place
  // in React, we should not update an array directly
  // but create a new one and assign it to a state
  function deletePlace(placeName) {
    const newPlaces = existingPlaces.filter(
      (place) => (place !== placeName)
    );
    setExistingPlaces(newPlaces);
  }

  function addPlace(placeName) {
    const newPlaces = [...existingPlaces, placeName];
    setExistingPlaces(newPlaces);
  }

  return (
    <div>
      <AddPlaceForm onAddClick={addPlace} />
      {placeList}
    </div>
  );
}

export default MustVisitPlaces;