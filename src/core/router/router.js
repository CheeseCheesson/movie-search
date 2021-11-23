export default class Router {
  #controller
  #routes
  constructor(routes) {
    this.#controller = null;
    this.#routes = routes;
  }

  setController(controller) {
    this.#controller = controller;
  }
}