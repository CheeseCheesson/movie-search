import View from "./View";
import { Routes } from "../core/constans/routes"
import InFavoritesImage from '../assets/icons/heart-outlined.png'
import notIsFavoritesImage from '../assets/icons/heart.png'
import filmDefaultImg from '../assets/image_default/film_default.jpg'

export class FilmsView extends View {
  static #Text = {
    SeeFavoritFilms: 'See favorite films',
    allFilms: 'All Filmes'
  }

  #renderSeeFavoritButton(){
    const containerSeeButton = document.createElement('div')
    containerSeeButton.className = 'link-button film-cards-container film-card'
    
    const seeFavoritesButton = document.createElement('a')
    seeFavoritesButton.className = 'film-cards-container__link-button'
    seeFavoritesButton.textContent = FilmsView.#Text.SeeFavoritFilms
    seeFavoritesButton.href = `#${Routes.Favorites}`
    containerSeeButton.append(seeFavoritesButton)

    return containerSeeButton
  }

  #renderFilmHTML(filmModel){
    const container = document.createElement('div')
    container.className = 'film-card'

    const titleHTML = document.createElement('span')
    titleHTML.className = 'film-card__title'
    titleHTML.textContent = filmModel.getTitle()

    const imageHTML = document.createElement('img')
    if( filmModel.getPoster() === 'N/A'){
      imageHTML.src = filmDefaultImg
    } else {
      imageHTML.src = filmModel.getPoster()
    }
    
    imageHTML.className = 'film-card__poster'
    imageHTML.alt = filmModel.getTitle()

    const yearHTML = document.createElement('span')
    yearHTML.className = 'film-card__year'
    yearHTML.textContent = filmModel.getYear()

    const actionButton = document.createElement('button')
    actionButton.className = 'film-card__button'
    const actionButtonImg = document.createElement('img')
    actionButtonImg.className = 'film-card__button-img'
    if(filmModel.getIsFavorit()){
      actionButtonImg.src = InFavoritesImage
    } else {
      actionButtonImg.src = notIsFavoritesImage
    }
    actionButton.append(actionButtonImg)

    container.append(titleHTML, imageHTML, yearHTML, actionButton)
  
    return container
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
      const filmHTML = this.#renderFilmHTML(filmModel)
      filmsContainer.append(filmHTML)
    })

    container.append(titleHTML, containerSeeButtonItem, filmsContainer)

    this.getRoot().append(container);

  
  }
}