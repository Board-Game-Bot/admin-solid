import { JSX, splitProps } from 'solid-js';

interface Props extends JSX.HTMLAttributes<HTMLButtonElement> {
}

export const Button = (props: Props) => {
  const [propsButton, otherProps] = splitProps(props, ['class']);
  return (
    <button class={`border-0 px3 py1 rounded-1 text-16px bg-#444 cursor-pointer ${propsButton.class ?? ''}`} {...otherProps} />
  );
};