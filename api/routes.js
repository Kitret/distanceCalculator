"use strict";

const controllers = require("./controller");
var require=require("./controller");
module.exports=(app) => {
    app.route("/about").get(controllers.about);
    app.route("/distance/:zipcode1/:zipcode2").get(controllers.get_distance);
}