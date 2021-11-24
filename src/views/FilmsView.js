import View from "./View";
import { Routes } from "../core/constans/routes"
import {renderFilmComponent} from '../core/components/filmComponent'


export class FilmsView extends View {
  static #Text = {
    SeeFavoritFilms: 'See favorite films',
    allFilms: 'All Filmes'
  }
  #renderSeeFavoritButton(){
    const containerSeeButton = document.createElement('div')
    containerSeeButton.className = 'link-button film-cards-container__links-block'
    
    const seeFavoritesButton = document.createElement('a')
    seeFavoritesButton.className = 'link-button film-cards-container__link-button'
    seeFavoritesButton.textContent = FilmsView.#Text.SeeFavoritFilms
    seeFavoritesButton.href = `#${Routes.Favorites}`
    containerSeeButton.append(seeFavoritesButton)

    return containerSeeButton
  }
  render(filmModels = []) {
    const container = document.createElement('div');
    container.className = 'films-container'

    const titleHTML = document.createElement('h1')
    titleHTML.className = 'film-cards-container__title'
    titleHTML.textContent = FilmsView.#Text.allFilms

    const containerSeeButtonItem = this.#renderSeeFavoritButton()

    const filmsContainer = document.createElement('div')
    filmsContainer.className = 'film-cards-container'
    
    //* отрисовка фильмов 
    filmModels.forEach(filmModel => {
      const filmHTML = renderFilmComponent({filmModel: filmModel})
      filmsContainer.append(filmHTML)
    })
    container.append(titleHTML, containerSeeButtonItem, filmsContainer)
    this.getRoot().append(container);
  }
}