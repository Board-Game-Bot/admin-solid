import { createEffect, onMount } from 'solid-js';
import { isObject } from 'lodash-es';
import { useSignal } from '@/hooks/useSignal.ts';

export const useLocalStorage = <T>(key: string, defaultValue?: T) => {
  const signal = useSignal<T>(defaultValue);

  onMount(() => {
    try {
      const obj = localStorage.getItem(key)!;
      signal.s(JSON.parse(obj));
    }
    catch {
      const item = localStorage.getItem(key)!;
      signal.s(() => item as T);
    }
  });

  createEffect(() => {
    if (isObject(signal.v())) {
      localStorage.setItem(key, JSON.stringify(signal.v()));
    }
    else {
      localStorage.setItem(key, '' + signal.v());
    }
  });

  return signal;
};