import View from "./View";
import { Routes } from "../core/constans/routes";
import { renderFilmComponent } from "../core/components/filmComponent";

export class FavoritesView extends View {
  static #Text = {
    title: "Your Favorites filme",
    seeAllFilmsButtonText: "See All Films",
  };
  render(favoriteFilmModels = []) {
    const container = document.createElement("div");
    container.className = "favorite-container";
    container.textContent = FavoritesView.#Text.title;

    const titleHTML = document.createElement("h1");
    titleHTML.className = "film-cards-container__title";
    titleHTML.textContent = FavoritesView.#Text.title;

    const linksBlock = document.createElement("div");
    linksBlock.className = "film-cards-container__links-block";
    const allFilmsLink = document.createElement("a");
    allFilmsLink.className = "link-button film-cards-container__link-button";
    allFilmsLink.textContent = FavoritesView.#Text.seeAllFilmsButtonText;
    allFilmsLink.href = `#${Routes.Main}`;
    linksBlock.append(allFilmsLink);

    //! для всех избранных фильмов.
    const filmsContainer = document.createElement("div");
    filmsContainer.className = "film-cards-container";

    favoriteFilmModels.forEach((filmModel) => {
      const filmHTML = renderFilmComponent({
        filmModel,
        handleFavoriteButtonClick: this.getHandleFavoriteButtonClick(),
      });
      filmsContainer.append(filmHTML);
    });

    container.append(titleHTML, linksBlock, filmsContainer);

    this.getRoot().append(container);
  }
}
