const routes = {
  home: {
    path: '/home',
    template: `
      <h1>Bienvenido a mi SPA</h1>
      <p>Este es el home</p>`,
  },
  contact: {
    path: '/contact',
    template: `
      <h1>Información de contacto</h1>
      <ul>
        <li><a href="#/about/page">Pagina web</a></li>
        <li>Numero de teléfono: +57 3007772560</li>
        <li>Email: cepb27@gmail.com</li>
      </ul>`,
  },
  about: {
    path: '/about',
    template: `<h1>Soy Camilo Paez, Desarrollador web</h1>`,
  },
  page: {
    path: '/about/page',
    template: `
      <h1>SubPagina de prueba</h1>
      <p>Hola!!</p>`,
  },
  error: {
    path: '/error404',
    template: `<h1>Esta pagina no existe</h1>`,
  },
};

export default routes;
