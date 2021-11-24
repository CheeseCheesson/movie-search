export const getFilmById = (films, filmId) => {
  return films.find((filmModel) => filmModel.getimdbID() === filmId);
};

export const removeFilmById = (targetFilms, filmId) => {
  return targetFilms.filter(
    (filmModel) => filmModel.getimdbID() !== filmId
  );
}