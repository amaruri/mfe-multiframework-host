import { createApp, defineAsyncComponent } from 'vue';

export function renderVueApp (app: HTMLElement) {
  const AsyncComponent = defineAsyncComponent(() => import('vue_mfe/App'));
  app.innerHTML = '<div id="vue-app"></div>'
  const vueApp = createApp(AsyncComponent);
  vueApp.mount('#vue-app');
}