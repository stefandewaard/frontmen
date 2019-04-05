export const ADMIN = 'admin';
export const ELSE = 'else'

export const TOKEN = 'token';

export type Roles = 'admin' | 'else';

export interface iVerify{
  msg?:'Authorized';
  err?:'Unauthorized'
}

export interface iLoginResponse{
  token:string;
  user:iUser;
}

export interface iUser {
  id: number;
  guid: string;
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  role:Roles;
}

