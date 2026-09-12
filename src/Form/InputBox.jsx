function InputBox({
  type,
  labelFor,
  title,
  onChange,
  name,
  value,
  placeHolder,
}) {
  return (
    <div className="input-box">
      <label htmlFor={labelFor}>{title}</label>
      <input
        value={value}
        onChange={(e) => {
          onChange(e, name);
          // console.log(`${name} : ${e.target.value}`)
        }}
        type={type}
        id={labelFor}
        name={name}
        placeholder={placeHolder}
        required
      />
    </div>
  );
}

export default InputBox;
