import { createElement, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';

export function renderReactApp (app: HTMLElement) {
  const LazyComponent = createElement(lazy(() => import('react_mfe/App')));
  const SuspeseWrapper = createElement(Suspense, { fallback: 'loading...', children: LazyComponent });
  app.innerHTML = '<div id="react-app"></div>'
  const reactApp = createRoot(document.getElementById('react-app')!);
  reactApp.render(SuspeseWrapper);
}