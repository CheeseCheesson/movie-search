export default class FilmsController {
  #router
  #service
  constructor(router, service) {
    this.router = router
    this.#service = service
  }

  async init() {
    const films = await this.#service.getfilms()
    // this.#router.renderPage(films)
    films.forEach(film => {console.log(film.getTitle())})
  }
}