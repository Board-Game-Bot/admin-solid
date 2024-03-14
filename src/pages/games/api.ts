import { Game } from '@/types/game.ts';
import { API } from '@/requests';

interface ListGamesRes {
  items: Game[];
}

export const ListGames = async (): Promise<ListGamesRes> => {
  return await API.post('/game/list');
};

interface CreateGameRes {
  id: string;
}

export const CreateGame = async (params: Game): Promise<CreateGameRes> => {
  return await API.post('/game/create', params);
};

export const DeleteGame = async (params: Pick<Game, 'id'>): Promise<void> => {
  return await API.post('/game/delete', params);
};