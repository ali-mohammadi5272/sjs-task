interface FormDataType {
  username: string;
  password: string;
}

interface LoginResponseType {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: "female" | "male";
  image: string;
  accessToken: string;
  refreshToken: string;
}

export type { FormDataType, LoginResponseType };
