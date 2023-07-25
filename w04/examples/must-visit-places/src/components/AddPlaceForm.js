function AddPlaceForm({ onAddClick }) {
  function handleAdd(e) {
    e.preventDefault();
    onAddClick(document.querySelector('#nextPlace').value);
  }

  return (
    <form>
      <label htmlFor="nextPlace">Places to visit</label>&nbsp;&nbsp;
      <input type="text" id="nextPlace" palceholder="Next place..." />&nbsp;&nbsp;
      <button onClick={handleAdd}>Add</button>
    </form>
  );
}

export default AddPlaceForm;