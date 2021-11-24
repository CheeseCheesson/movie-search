import { FilmsView } from "../../views/FilmsView";

export default class Router {
  #controller;
  #routes;
  #root;
  constructor(routes, root) {
    this.#controller = null;
    this.#routes = routes;
    this.#root = root;
  }

  setController(controller) {
    this.#controller = controller;
  }
  getRoutInfo() {
    const { location } = window;
    const { hash } = location;
    const sliceHash = hash.slice(1);

    return {
      routeName: sliceHash, // без slice было #main
    };
  }

  #hashChange() {
    //! this будет ссылаться на window поэтому это функцию надо прибиндить
    // потому что в addEventListener this это объект преред точкой
    // т.е. в нашем случае в   init() это  window.
    const routInfo = this.getRoutInfo();
    //^ чтобы url совпадали с хешами наших роутеров (  Main: 'main')
    const TargetView = this.#routes[routInfo.routeName] || FilmsView;
    if (TargetView) {
      this.#root.innerHTML = "";
      const paramsForRender = this.#controller.getViewParams(routInfo.routeName = 'main')
      const targetView = new TargetView(this.#root);
      targetView.render(...paramsForRender);
    }
  }

  init() {
    window.addEventListener("hashchange", this.#hashChange.bind(this));
    this.#hashChange()
  }
}
