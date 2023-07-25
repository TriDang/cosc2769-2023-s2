/* verson 1 - static component

function Place() {
  return (
    <div>
      <span>Place Name</span>
      <button>Delete</button>
    </div>
  );
}
*/

/* version 2 - with props

function Place({ placeName }) {
  return (
    <div>
      <span>{placeName}</span>
      <button>Delete</button>
    </div>
  );
}
*/

function Place({ placeName, onDeleteClick }) {
  function handleClick() {
    onDeleteClick(placeName);
  }

  return (
    <div>
      <span>{placeName}</span>
      &nbsp;&nbsp;<button onClick={handleClick}>Delete</button>
    </div>
  );
}

export default Place;