const express = require("express");
const router = express.Router();
const db = require("../models");
// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    getProjects()
        .then(function (data) {
            const allProjects = data.map(project => {
                return new objToOwnProp(project.dataValues);
            });
            allProjects[0].className = "active";
            console.log(allProjects)
            res.render("index", { project: allProjects });
        });
});
function getProjects() {
    return new Promise((resolve, reject) => {
        db.Project
            .findAll({
                model: db.project,
                attributes: {
                    exclude: [
                        "createdAt",
                        "updatedAt"
                    ]
                }
            })
            .then(projects => {
                resolve(projects);
            }
            )
            .catch(err => { reject(err); }
            )
    })
};
var objToOwnProp = function (newModel) {
    this.project_name = newModel.project_name;
    this.link = newModel.link;
    this.image_link = newModel.image_link;
    this.className = "";
};
module.exports = router;