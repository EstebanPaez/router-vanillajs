class Router {
  constructor(routes) {
    this.routes = routes;
  }

  loadPage() {
    const pageName = this.getPageName();
    const page = this.getPage(pageName);
    this.render(page);
  }

  getPageName() {
    const hashSplit = location.hash.substring(1).split('/');
    if (hashSplit.length === 1 && hashSplit[0] === '') {
      return 'home';
    } else {
      const lastPage =
        hashSplit[hashSplit.length - 1] !== ''
          ? hashSplit[hashSplit.length - 1]
          : hashSplit[hashSplit.length - 2];

      return lastPage;
    }
  }

  getPage(pageName) {
    return this.routes[pageName] || this.routes.error;
  }

  changePath(path) {
    location.hash = `#${path}`;
  }

  render({ template }) {
    const $content = document.getElementById('content');
    $content.innerHTML = template;
  }
}

export default Router;
