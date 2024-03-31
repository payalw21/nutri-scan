const Input = ({ setInput }) => {
  const changeInputHandler = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="input-container">
      <form className="form-container">
        <input
          type="text"
          id="barcode-input"
          className="barcode-input"
          placeholder="Barcode"
          onChange={changeInputHandler}
        />
        {/* <button>Serach</button> */}
      </form>
    </div>
  );
};

export default Input;
