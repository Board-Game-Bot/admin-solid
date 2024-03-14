import { useLocalStorage } from '@/hooks';

export const TokenStore = useLocalStorage<string>('jwt');