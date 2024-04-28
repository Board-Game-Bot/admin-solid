import { createSignal } from 'solid-js';
import { User } from '@/api/entity';

export const UserInfoStore = createSignal<User>();
