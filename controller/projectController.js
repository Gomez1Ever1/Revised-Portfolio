const express = require("express");
const router = express.Router();
const db = require("../models");
// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    db.Project
        .findAll({
            attributes: {
                exclude: [
                    "createdAt",
                    "updatedAt"
                ]
            }
        })
        .then(function (data) {
            res.render("index", { project: data });
        });
});
module.exports = router;