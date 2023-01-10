const routes = require("express").Router();

const myController = require("../controllers")

routes.get("/", myController.awesomeFunction)
routes.get("/father", myController.returnAnotherPerson)

module.exports = routes;