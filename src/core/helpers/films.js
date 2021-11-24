export const getFilmById = (films, filmId) => {
  return films.find((filmModel) => filmModel.getId() === filmId);
};

export const removeFilmById = (targetFilms, filmId) => {
  return films.filter(
    (filmModel) => filmModel.getId() !== filmId
  );
}