import { capitalize } from 'lodash-es';
import { DeleteGame } from '../../api';
import { Game } from '@/types';

interface Props {
  game: Game;
  onChange?: () => void;
}

export const GameCard = ({ game, onChange }: Props) => {

  const handleDelete = async () => {
    await DeleteGame({ id: game.id });
    onChange?.();
  };

  return (
    <div class={'flex justify-between items-center px5 py2 gap4 bg-#333 rounded-2'}>
      <div class={'flex items-center gap-4'}>
        <div class={'text-10 w-fit h-fit'}>
          {game.icon}
        </div>
        <div>
          <div class={'text-2xl'}>
            {capitalize(game.id)}
          </div>
          <div class={'text-16px text-#999'}>
            {game.npmPackage}@{game.version}
          </div>
        </div>
      </div>
      <div class={'i-mdi-delete text-red text-2xl cursor-pointer'} onClick={handleDelete} />
    </div>
  );
};