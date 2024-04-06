import { createEffect, createSignal, onMount } from 'solid-js';
import { isObject } from 'lodash-es';

export const useLocalStorage = <T>(key: string) => {
  const [value, setValue] = createSignal<T>();

  onMount(() => {
    try {
      const obj = localStorage.getItem(key)!;
      setValue(JSON.parse(obj));
    }
    catch {
      const item = localStorage.getItem(key)!;
      setValue(() => item as T);
    }
  });

  createEffect(() => {
    if (isObject(value())) {
      localStorage.setItem(key, JSON.stringify(value()));
    }
    else {
      localStorage.setItem(key, '' + value());
    }
  });

  return [value, setValue];
};