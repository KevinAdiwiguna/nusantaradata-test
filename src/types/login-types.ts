export type ResponseLogin = {
  message: string;
  code: number;
  status: boolean;
  errors?: string[];
  previousState?: {
    email: string;
    password: string;
  };
  dataProfile?: {
    uuid: string;
    email: string;
    id: number;
    clientId: string;
    idRole: number;
  };
};
