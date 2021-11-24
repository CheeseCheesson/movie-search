import {Routes} from '../core/constans/routes'

export default class FilmsController {
  #router
  #service
  #allFilms
  #favoriteFilms
  #film

  constructor(router, service) {
    this.#router = router
    this.#service = service
    this.#allFilms = []
    this.#favoriteFilms = []
    this.#film = []
  }

  getViewParams(routeName) {
    let paramsForRender = []
    if(routeName === Routes.Main){
      paramsForRender = [this.#allFilms]
    } else if(routeName === Routes.Favorites){
      paramsForRender = [this.#favoriteFilms]
    } else if(routeName === Routes.Film){
      paramsForRender = [this.#film]
    }

    return paramsForRender
  }

  async init() {
    this.#allFilms = await this.#service.getfilms()
    // this.#router.renderPage(films)
    this.#allFilms.forEach(film => {film.getTitle()})
    this.#router.init()
  }
  
}