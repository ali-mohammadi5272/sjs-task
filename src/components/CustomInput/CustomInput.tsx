import { CustomInputPropsType } from "./customInput.type";

const CustomInput: React.FC<CustomInputPropsType> = ({
  id,
  labelClassName,
  label,
  type,
  inputClassName,
  minLength,
  required,
  onChange,
}) => {
  return (
    <div>
      <label htmlFor={id} className={`block text-gray-600 ${labelClassName}`}>
        {label}
      </label>
      <input
        type={type ? type : "text"}
        id={id}
        className={`block w-full bg-gray-50 p-2 text-xl border-2 border-transparent rounded-md outline-none valid:border-green-600 valid:text-green-500 invalid:border-red-600 invalid:text-red-500 ${inputClassName}`}
        minLength={minLength}
        required={required}
        onChange={onChange}
      />
    </div>
  );
};

export default CustomInput;
