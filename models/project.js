
module.exports = function (sequelize, DataTypes) {
    var Project = sequelize.define("Project", {
        project_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        link: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image_link: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return Project;
};