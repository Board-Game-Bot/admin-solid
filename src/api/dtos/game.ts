import { CommonListRequest, CommonListResponse, OnlyIdRequest, RequestFn } from '@/api';
import { Game } from '@/api/entity';

export interface CreateGameRequest {
  Id: string;
  Description: string;
  Icon: string;
  PlayerCount: number;
  NpmPackage: string;
  Version: string;
}

export interface UpdateGameRequest {
  Id: string;
  Description?: string;
  Icon?: string;
  PlayerCount?: number;
  NpmPackage?: string;
  Version?: string;
}

export interface GameClient {
  CreateGame: RequestFn<CreateGameRequest, OnlyIdRequest>
  GetGame: RequestFn<OnlyIdRequest, Game>;
  ListGames: RequestFn<CommonListRequest, CommonListResponse<Game>>;
  UpdateGame: RequestFn<UpdateGameRequest, void>;
  DeleteGame: RequestFn<OnlyIdRequest, void>;
}
