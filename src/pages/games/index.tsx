import { For, onMount } from 'solid-js';
import { CreateGame, ListGames } from './api';
import { GameCard, AddGameForm } from './components';
import { ScreenLayout } from '@/components';
import { useSignal } from '@/hooks';
import { Game } from '@/types';

export default function GamePage() {
  const games = useSignal<Game[]>([]);

  const handleLoadGames = async () => {
    const { items } = await ListGames();
    games.s(items);
  };

  onMount(handleLoadGames);

  const handleSubmit = async (data: Record<string, any>) => {
    try {
      await CreateGame(data as Game);
      handleLoadGames();
    }
    catch (e) {
      console.log(e);
    }
  };

  return (
    <ScreenLayout>
      <div class={'flex items-center gap-5'}>
        <div>
          {games.v().length > 0 ?
            <div class={'flex flex-col gap-3'}>
              <For each={games.v()}>
                {(game) =>
                  <GameCard game={game} onChange={handleLoadGames} />
                }
              </For>
            </div>
            :
            <div class={'text-4xl'}>
              没有游戏
            </div>
          }
        </div>
        <div>
          <AddGameForm onSubmit={handleSubmit} />
        </div>
      </div>
    </ScreenLayout>
  );
}