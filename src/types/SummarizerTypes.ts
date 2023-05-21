import { IconType } from 'react-icons';

export type ArticleType = {
  url: string;
  summary: string;
};

export type RegisterFormDataTypes = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type LoginFormDataTypes = {
  email: string;
  password: string;
};

export type NavButtonType = {
  btnText: string;
  link: string;
  Icon: IconType;
  onClick?: () => void;
};
