// *********************************************************************************
// excursion-api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the excursions
  app.get("/api/excursion", function(req, res) {
    var query = {};
    if (req.query.login_id) {
      query.LoginId = req.query.login_id;
    }
    db.Excursion.findAll({
      where: query
    }).then(function(dbExcursion) {
      res.json(dbExcursion);
    });
  });

  // Get route for retrieving a single excursion
  app.get("/api/excursion/:id", function(req, res) {
    db.Excursion.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbExcursion) {
      console.log(dbExcursion);
      res.json(dbExcursion);
    });
  });

  // POST route for saving a new excursion
  app.post("/api/excursion", function(req, res) {
    db.Excursion.create(req.body).then(function(dbExcursion) {
      res.json(dbExcursion);
    });
  });

  // DELETE route for deleting excursion
  app.delete("/api/excursion/:id", function(req, res) {
    db.Excursion.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbExcursion) {
      res.json(dbExcursion);
    });
  });

  // PUT route for updating excursion
  app.put("/api/excursion", function(req, res) {
    db.Excursion.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbExcursion) {
      res.json(dbExcursion);
    });
  });
};
