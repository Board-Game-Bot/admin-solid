import { UserInfoType } from '@/types';
import { API } from '@/requests';

interface LoginAccountReq {
  id: string;
  passwd: string;
}

interface LoginAccountRes {
  user: UserInfoType;
  jwt: string;
}

export const LoginAccount = async (params: LoginAccountReq): Promise<LoginAccountRes> => {
  return await API.post('/auth/login', params);
};