const { routesController } = require("../app");
const BilletController = require("../app/controllers/billet");
const { MemberController } = require("../app/controllers/member");

// all routes goes here
const router = require("express").Router();

routesController(router,new MemberController(),baseurl='/member');
routesController(router,new BilletController(),baseurl='/billet');
module.exports = router