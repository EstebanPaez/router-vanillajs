import Router from './router.js';
import routes from './routes/routes.js';

const router = new Router(routes);

window.addEventListener('hashchange', () => {
  router.loadPage();
});

window.addEventListener('load', () => {
  router.changePath(`/${router.getPageName()}`);
  router.loadPage();
});

document.getElementById('home').addEventListener('click', () => router.changePath('/home'));
document.getElementById('about').addEventListener('click', () => router.changePath('/about'));
document.getElementById('contact').addEventListener('click', () => router.changePath('/contact'));
