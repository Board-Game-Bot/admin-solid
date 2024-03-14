import { ParentProps } from 'solid-js';

interface Props extends ParentProps {
  class?: string;
}

export const ScreenLayout = ({ children, ...props }: Props) => {
  return (
    <div class={`w-screen h-screen flex justify-center items-center ${props.class}`}>
      {children}
    </div>
  );
};