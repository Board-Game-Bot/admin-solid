import { ParentProps } from 'solid-js';

interface Props extends ParentProps {
  class?: string;
}

export const FlexBox = ({ children, ...props }: Props) => {
  return (
    <div class={`flex justify-center items-center ${props.class}`}>
      {children}
    </div>
  );
};