interface CustomButtonPropsType {
  title: string | React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type?: "button" | "reset" | "submit";
}

export type { CustomButtonPropsType };
