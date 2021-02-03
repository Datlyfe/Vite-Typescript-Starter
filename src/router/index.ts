import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes';

const router = createRouter({
  history: createWebHistory(),
  routes: import.meta.hot ? [] : routes
});

if (import.meta.hot) {
  let removeRoutes = [] as any;

  for (let route of routes) {
    removeRoutes.push(router.addRoute(route));
  }

  import.meta.hot!.accept('./routes.ts', ({ routes }) => {
    for (let removeRoute of removeRoutes) removeRoute();
    removeRoutes = [];
    for (let route of routes) {
      removeRoutes.push(router.addRoute(route));
    }
    router.replace('');
  });
}

export default router;
