import { Routes } from "../core/constans/routes";

export default class FilmsController {
  #router;
  #service;
  #allFilms;
  #favoriteFilms;
  #film;

  constructor(router, service) {
    this.#router = router;
    this.#service = service;
    this.#allFilms = [];
    this.#favoriteFilms = [];
    this.#film = [];
  }

  async getViewParams(routeName) {
    let paramsForRender = [];
    this.#allFilms = await this.#service.getfilms();
    if (routeName === Routes.Main) {
      paramsForRender = [this.#allFilms];
    } else if (routeName === Routes.Favorites) {
      this.#favoriteFilms = await this.#service.getFavoriteFilms();
      paramsForRender = [this.#favoriteFilms];
    } else if (routeName === Routes.Film) {
      paramsForRender = [this.#film];
    }
    paramsForRender;
    return paramsForRender;
  }

  // внутри будем использовать функции из сервиса, они асинхронные
  async handleFavoriteButtonClick(isFavorite, filmId) {
    if (isFavorite) {
      await this.#service.removeFilmFromFavorites(
        this.#allFilms,
        this.#favoriteFilms,
        filmId
      );
    } else {
      await this.#service.addFilmToFavorits(
        this.#allFilms,
        this.#favoriteFilms,
        filmId
      );
    }
  }

  async init() {
    this.#router.init();
  }
}
