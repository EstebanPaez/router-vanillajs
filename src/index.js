import Router from './router.js';
import routes from './routes/routes.js';

const ROUTER = new Router(routes);

window.addEventListener('hashchange', () => {
  ROUTER.loadPage();
});

window.addEventListener('load', () => {
  history.pushState({}, 'title', '/');
  location.hash = '/home';
});

document.getElementById('home').addEventListener('click', () => ROUTER.changePath('/home'));
document.getElementById('about').addEventListener('click', () => ROUTER.changePath('/about'));
document.getElementById('contact').addEventListener('click', () => ROUTER.changePath('/contact'));
