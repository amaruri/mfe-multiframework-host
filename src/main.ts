import './style.css'
import { renderVueApp } from './render-vue-app';
import { renderReactApp } from './render-react-app';


const app = document.getElementById('app')!;

function routing () {
  const hashRoute = window.location.hash.substring(1).replace(/\//ig, '/');
  const isReactApp = hashRoute.startsWith('/react-app');
  const isVueApp = hashRoute.startsWith('/vue-app');
  if (isReactApp) {
    renderReactApp(app);
  }
  if (isVueApp) {
    renderVueApp(app);
  }
}

routing();

window.addEventListener('popstate', routing);
