import { For, onMount } from 'solid-js';
import { camelCase } from 'lodash-es';
import { CreateGame, ListGames } from './api';
import { GameCard } from './components';
import { ScreenLayout, Button, Input } from '@/components';
import { useSignal } from '@/hooks';
import { Game } from '@/types';

export default function GamePage() {
  const games = useSignal<Game[]>([]);

  const handleLoadGames = async () => {
    const { items } = await ListGames();
    games.s(items);
  };

  onMount(handleLoadGames);

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    const data = [...formData.entries()].reduce((map, entry) => {
      const key = camelCase(entry[0]);
      const value = entry[1];
      map[key] = value;
      return map;
    }, {} as Record<string, any>);

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
          <form class={'flex flex-col gap-2 bg-#333 px10 py3 rounded-2'} onSubmit={handleSubmit}>
            <label for="id">id</label>
            <Input name={'id'} />
            <label for="description">description</label>
            <Input name={'description'} />
            <label for="icon">icon</label>
            <Input name={'icon'}/>
            <label for="player-count">player count</label>
            <Input name={'player-count'}/>
            <label for="npm-package">npm package</label>
            <Input name={'npm-package'}/>
            <label for="version">version</label>
            <Input name={'version'} />
            <label for="url">url</label>
            <Input name={'url'} />
            <Button class={'mt4 flex justify-center items-center gap-4 text-2xl bg-#333 px3 py2 rounded-2'}>
                +
              <div>添加游戏</div>
            </Button>
          </form>
        </div>
      </div>
    </ScreenLayout>
  );
}