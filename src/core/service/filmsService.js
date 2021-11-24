import { EnvData } from "../constans/envData";
import FilmModel from "../../models/filmModel";

export default class FilmsService {
  static #DefaultSearchValue = "SuperMen";
  static #Urls = {
    Main: (searchByName = FilmsService.#DefaultSearchValue) =>
      `http://www.omdbapi.com/?s=${searchByName}&apikey=${EnvData.FilmsApiKey}`,
    FilmById: (FilmId) =>
      `http://www.omdbapi.com/?i=${FilmId}&apikey=${EnvData.FilmsApiKey}`,
  };

  async getfilms() {
    try {
      const response = await fetch(FilmsService.#Urls.Main());
      if (!response.ok) {
        throw new Error('Нет данных с фильмами');
      } else {
        const data = await response.json();
        const filmModels = data.Search.map((filmData) => {
          return new FilmModel({
            Poster: filmData.Poster,
            Title: filmData.Title,
            Type: filmData.Type,
            Year: filmData.Year,
            imdbID: filmData.imdbID,
            //favorite
          });
        });
        return filmModels
      }
    } catch (e) {
      return { error: e.message };
    }
  }
}
