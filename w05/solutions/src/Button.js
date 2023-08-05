function Button({ cols, value, onClick }) {
  return (
    <div className={`col-${3 * cols}`}>
      <button className='btn btn-primary btn-rounded' onClick={onClick}>
        {value}
      </button>
    </div>
  );
}

export default Button;
