
import { UseFormRegister } from "react-hook-form";

interface FieldError {
  message?: string;
}

interface FormErrors {
  [key: string]: FieldError | undefined;
}
interface FieldInfo {
    inputType: string;
    placeholderText: string;
    name: string;
    errors: FormErrors
    labelName: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    register: UseFormRegister<any>;
    disabled?: boolean;
    isRequired?: boolean;
    defaultValue?: string;
  }

const Input: React.FC<FieldInfo> = ({
  labelName,
  inputType,
  placeholderText,
  name,
  errors,
  register,
  disabled,
  defaultValue,
  isRequired // Destructure the new prop
}) => {
   
    return (
        <div className="lg:px-3">
        <label className="text-[#2D0C3E] text-basic pl-2 mb-1">
          {labelName}
          {isRequired && <span className="text-red-500"> *</span>} {/* Show red asterisk if required */}
        </label>
        <input
          className="block outline-none placeholder:text-[#afacac] text-base py-2 pl-6 border-2 border-[#D4D4D4] rounded-md w-full"
          type={inputType}
          placeholder={placeholderText}
          defaultValue={defaultValue}
          {...register(name)}
          disabled={disabled}
        />
        {errors[name] && (
          <p className="text-red-500 text-sm mt-1">{errors[name]?.message}</p>
        )}
      </div>
    );
};

export default Input;