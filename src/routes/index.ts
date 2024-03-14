import { RouteDefinition } from '@solidjs/router';
import { lazy } from 'solid-js';

export const ROUTES: RouteDefinition[] = [
  {
    path: '/',
    component: lazy(() => import('@/pages/index.tsx')),
  },
  {
    path: '/game',
    component: lazy(() => import('@/pages/games/index.tsx')),
  },
];