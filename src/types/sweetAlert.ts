import { SweetAlertIcon } from "sweetalert2";

export interface SweetAlertType {
  title: string;
  text: string;
  icon: SweetAlertIcon;
  showCancelButton?: boolean;
}
