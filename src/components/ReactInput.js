const ReactInput = ({
  type,
  name,
  placeholder,
  inputClassName,
  reactInputClassName,
  onChange,
  onClick,
  value,
  min,
}) => {
  return (
    <div className={`react-input ${reactInputClassName}`}>
      <div className="innerInput">
        <input
          className={`form-control ${inputClassName}`}
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          onClick={onClick}
          value={value}
          min={min}
        />
      </div>
    </div>
  );
};

export default ReactInput;
