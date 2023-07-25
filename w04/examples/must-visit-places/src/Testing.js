function Child({ onClick, value }) {
  return (
    <p onClick={onClick}>{value}</p>
  );
}

function Parent() {
  function f1() {
    console.log('first function');
  }

  function f2() {
    console.log('second function');
  }

  return (
    <>
      <Child value="Will call f1" onClick={f1} />
      <Child value="Will call f2" onClick={f2} />
    </>
  );
}

function Testing() {
  return (
    <Parent />
  );
}

export default Testing;