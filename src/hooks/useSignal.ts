import { createSignal } from 'solid-js';


export const useSignal = <T>(defaultValue?: T) => {
  const [signal, setSignal] = createSignal<T>(defaultValue as T);
  return {
    v: signal,
    s: setSignal,
  };
};