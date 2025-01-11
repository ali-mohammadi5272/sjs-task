interface CustomInputPropsType {
  id: string;
  labelClassName?: string;
  label: string | React.ReactNode;
  type?: "text" | "number" | "email" | "password" | "search";
  inputClassName?: string;
  minLength?: number;
  required?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export type { CustomInputPropsType };
