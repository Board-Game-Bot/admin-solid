import { capitalize } from 'lodash-es';
import { Game } from '@/api/entity';
import { client } from '@/api';

interface Props {
  game: Game;
  onChange?: () => void;
}

export const GameCard = ({ game, onChange }: Props) => {

  const handleDelete = async () => {
    await client.DeleteGame({ Id: game.Id });
    onChange?.();
  };

  return (
    <div class={'flex justify-between items-center px5 py2 gap4 bg-#eee rounded-2'}>
      <div class={'flex items-center gap-4'}>
        <div class={'text-10 w-fit h-fit'}>
          {game.Icon}
        </div>
        <div>
          <div class={'text-2xl'}>
            {capitalize(game.Id)}
          </div>
          <div class={'text-16px text-#999'}>
            {game.NpmPackage}@{game.Version}
          </div>
        </div>
      </div>
      <div class={'i-mdi-delete text-red text-2xl cursor-pointer'} onClick={handleDelete} />
    </div>
  );
};