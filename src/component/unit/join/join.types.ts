import { ChangeEvent } from "react";
import {
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IFormValues {
  pw: string;
  pwCheck?: string | null | undefined;
}

export interface IJoinPresenter {
  email: string;
  name: string;
  active: boolean;
  duplicate: boolean;
  status: boolean;
  visible: boolean;
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickVisible: () => void;
  emailCheck: () => void;
  onClickStart: (data: IFormValues) => void;

  register: UseFormRegister<IFormValues>;
  handleSubmit: UseFormHandleSubmit<IFormValues>;
  formState: FormState<IFormValues>;

  onClickMoveToPage: (path: string) => () => void;
}
