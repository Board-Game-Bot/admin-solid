import type { JSX } from 'solid-js';
import { ChangeValue } from '@/types';

type CV = ChangeValue<string>

interface Props extends
  Omit<JSX.InputHTMLAttributes<HTMLInputElement>,
    keyof CV
  >,
  CV
{
}

export const Input = ({ onChange, value = '', ...props }: Props) => {
  // TODO: type
  const handleInput = (e: any) => {
    const value = e.target?.value;
    onChange?.(value, e);
  };

  return (
    <input name={'name'} class={'bg-#555 rounded-2 px2 py1 border-0 text-xl'} value={value} onInput={handleInput} {...props} />
  );
};