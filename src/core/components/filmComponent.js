
import InFavoritesImage from '../../assets/icons/heart-outlined.png'
import notIsFavoritesImage from '../../assets/icons/heart.png'
import filmDefaultImg from '../../assets/image_default/film_default.jpg'

export const renderFilmComponent = ({
  filmModel,
  handleFavoriteButtonClick
}) => {
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

    actionButton.addEventListener('click', async () => {
      if(handleFavoriteButtonClick){
        await handleFavoriteButtonClick(filmModel.getIsFavorit(), filmModel.getimdbID())
      }
    })

    container.append(titleHTML, imageHTML, yearHTML, actionButton)
  
    return container
}