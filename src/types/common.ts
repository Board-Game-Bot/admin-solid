export type MaybePromise<T> = Promise<T> | T;

export interface ChangeValue<T, E = any> {
  value?: T;
  onChange?: (value: T, e?: E) => void;
}