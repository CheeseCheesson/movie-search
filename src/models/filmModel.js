export default class FilmModel {
  #poster;
  #title;
  #type;
  #year;
  #imdbID;
  #isFavorite;


  constructor(filmData) {
    this.#poster = filmData?.Poster;
    this.#title = filmData?.Title;
    this.#type = filmData?.Type;
    this.#year = filmData?.Year;
    this.#imdbID = filmData?.imdbID;
    this.#isFavorite = filmData.isFavorite;
  }
  getPoster() {
    return this.#poster;
  }
  getTitle() {
    return this.#title;
  }

  getType() {
    return this.#type;
  }

  getYear() {
    return this.#year;
  }

  getimdbID() {
    return this.#imdbID;
  }

  getIsFavorit(){
    return this.#isFavorite;
  }

  setIsFavorit(isFavorite){
    return this.#isFavorite = isFavorite
  }
}


//filmData:{
// Poster: "N/A"
// Title: "The D.C. Sniper's Wife: A Barbara Kopple Film"
// Type: "movie"
// Year: "2008"
// imdbID: "tt1328612"
//  #isFavorite: true/false
// }
