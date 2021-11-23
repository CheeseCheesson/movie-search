import './index.css'

import FilmsController from "./src/controller/filmsController";
import Router from "./src/core/router/router";
import FilmsService from "./src/core/service/filmsService";
import { Routes } from "./src/core/constans/routes";
import { FilmsView } from "./src/views/FilmsView";
import { FilmView } from "./src/views/FilmView";
import { FavoritesView } from "./src/views/FavoritesView";

const routes = {
  [Routes.Main]: FilmsView,
  [Routes.Favorites]: FavoritesView,
  [Routes.Film]: FilmView,
};

const root = document.getElementById("root");
const router = new Router(routes, root);
const service = new FilmsService();
const controller = new FilmsController(router, service);

router.setController(controller);

controller.init();
