import { createSignal, For, onMount } from 'solid-js';
import { GameCard, AddGameForm } from './components';
import { ScreenLayout } from '@/components';
import { client } from '@/api';
import { Game } from '@/api/entity';
import { CreateGameRequest } from '@/api/dtos';

export default function GamePage() {
  const [games, setGames] = createSignal<Game[]>([]);

  const handleLoadGames = async () => {
    const { Items } = await client.ListGames({});
    setGames(Items);
  };

  onMount(handleLoadGames);

  const handleSubmit = async (data: Record<string, any>) => {
    try {
      await client.CreateGame(data as CreateGameRequest);
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
          {games().length > 0 ?
            <div class={'flex flex-col gap-3'}>
              <For each={games()}>
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