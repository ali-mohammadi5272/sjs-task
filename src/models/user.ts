import { Gender } from "../enums/gender.enum";
import { Role } from "../enums/role.enum";

interface CoordinateType {
  lat: number;
  lng: number;
}

interface AddressType {
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  coordinates: CoordinateType;
  country: string;
}

interface HairType {
  color: string;
  type: string;
}

interface BankCardType {
  cardExpire: Date;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
}

interface CompanyType {
  department: string;
  name: string;
  title: string;
  address: AddressType;
}

interface CryptoType {
  coin: string;
  wallet: string;
  network: string;
}

interface UserType {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: Gender;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: HairType;
  ip: string;
  address: AddressType;
  macAddress: string;
  university: string;
  bank: BankCardType;
  company: CompanyType;
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: CryptoType;
  role: Role;
}

export type { UserType };
