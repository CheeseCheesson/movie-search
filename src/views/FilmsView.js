import View from "./View";
import { Routes } from "../core/constans/routes"

export class FilmsView extends View {

  #renderSeeFavoritButton(){
    const containerSeeButton = document.createElement('div')
    containerSeeButton.className = 'link-button film-cards-container film-card'
    
    const seeFavoritesButton = document.createElement('a')
    seeFavoritesButton.className = 'film-cards-container__link-button'
    seeFavoritesButton.textContent = 'See favorite films'
    seeFavoritesButton.href = `#${Routes.Favorites}`
    containerSeeButton.append(seeFavoritesButton)

    return containerSeeButton
  }

  render() {
    const container = document.createElement('div');
    container.className = 'films-container'

    const titleHTML = document.createElement('h1')
    titleHTML.className = 'film-cards-container__title'
    titleHTML.textContent = 'All Filmes'

    const containerSeeButtonItem = this.#renderSeeFavoritButton()

    const filmsContainer = document.createElement('div')
    filmsContainer.className = 'film-cards-containe'

    container.append(titleHTML, containerSeeButtonItem, filmsContainer)

    this.getRoot().append(container);
  }
}