import { LoginFormModel } from "../Login";

export interface FormModel {
  title: string;
  onSubmit: (data: LoginFormModel) => void;
}
