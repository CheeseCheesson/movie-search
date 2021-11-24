import { EnvData } from "../constans/envData";
import FilmModel from "../../models/filmModel";
import { storageKeys } from "../../core/constans/storageKeys";
import {getFilmById, removeFilmById} from '../helpers/films'

export default class FilmsService {
  static #DefaultSearchValue = "SuperMen";
  static #Urls = {
    Main: (searchByName = FilmsService.#DefaultSearchValue) =>
      `http://www.omdbapi.com/?s=${searchByName}&apikey=${EnvData.FilmsApiKey}`,
    FilmById: (FilmId) =>
      `http://www.omdbapi.com/?i=${FilmId}&apikey=${EnvData.FilmsApiKey}`,
  };

  //^ доступ к localstorage, который позволит нам сохранять данные в сессиии можно посмотреть во вкладке Application
  #storage;
  constructor() {
    this.#storage = window.localStorage;
  }

  async getfilms() {
    try {
      const response = await fetch(FilmsService.#Urls.Main());
      if (!response.ok) {
        throw new Error("Нет данных с фильмами");
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
        return filmModels;
      }
    } catch (e) {
      return { error: e.message };
    }
  }
  getFavoriteFilms() {
    return new Promise((resolve) => {
      const localStorageData = this.#storage.getItem(storageKeys.Favorites);
      const favoriteFilms = JSON.parse(localStorageData) || [];
      resolve(favoriteFilms);
    });
  }

  //! сохраняем данные в localstorage
  saveFilms(favorites = []) {
    // эту функцию используют для добавления данных в БД
    return new Promise((resolve) => {
      const stringifyFavoriteFilms = JSON.stringify(favorites);
      this.#storage.setItem(storageKeys.Favorites, stringifyFavoriteFilms);
      resolve();
    });
  }

  async addFilmToFavorits(allFilms, favorites, filmId) {
    const targetFilm = getFilmById(allFilms, filmId);
    if (targetFilm) {
      targetFilm.setIsFavorit(true);
      const finalFavoritesFilms = favorites.concat(targetFilm);
      await this.saveFilms(finalFavoritesFilms);
    }
  }

  async removeFilmFromFavorites(allFilms, favorites, filmId) {
    const targetFilm = getFilmById(allFilms, filmId);
    if (targetFilm) {
      targetFilm.setIsFavorit(false);
      const finalFavoritesFilms = removeFilmById(favorites, filmId)
      await this.saveFilms(finalFavoritesFilms);
    }
  }
}
