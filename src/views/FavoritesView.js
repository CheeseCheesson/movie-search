import View from "./View";
import { Routes } from "../core/constans/routes"

export class FavoritesView extends View {
  static #Text = {
    title: 'Your Favorites filme',
    seeAllFilmsButtonText: 'See All Films'
  }
  render(favoriteFilmModels = []) {
    const container = document.createElement('div');
    container.className = 'favorite-container';
    container.textContent = 'Favorites filme'

    const titleHTML = document.createElement('h1')
    titleHTML.className = 'film-cards-container__title'
    titleHTML.textContent = FavoritesView.#Text.title

    const linksBlock = document.createElement('div')
    linksBlock.className = 'film-cards-container__links-block'
    const allFilmsLink = document.createElement('a')
    allFilmsLink.className = 'film-cards-container__link-button'
    allFilmsLink.textContent = FavoritesView.#Text.seeAllFilmsButtonText
    allFilmsLink.href = `#${Routes.Main}`
    linksBlock.append(allFilmsLink)

    //! для всех избранных фильмов. 
    const filmsContainer = document.createElement('div')
    filmsContainer.className = 'film-cards-container'

    container.append(title.append(document.createElement('div').textContent='Привет'), linksBlock)

    this.getRoot().append(container);
  }
}