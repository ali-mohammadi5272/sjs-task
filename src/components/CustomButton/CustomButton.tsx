import { memo } from "react";
import { CustomButtonPropsType } from "./customButton.type";

const CustomButton: React.FC<CustomButtonPropsType> = ({
  title,
  className,
  type,
  onClick,
}): React.ReactNode => {
  return (
    <button
      className={`w-full text-center text-xl py-2 rounded-md font-bold ${className}`}
      onClick={onClick}
      type={type ? type : "button"}
    >
      {title}
    </button>
  );
};

export default memo(CustomButton);
