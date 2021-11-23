import FilmsController from './src/controller/filmsController'
import Router from './src/core/router/router'
import FilmsService from './src/core/service/filmsService'

const router = new Router()
const service = new FilmsService()

const controller = new FilmsController(router, service);

router.setController(controller)

controller.init()