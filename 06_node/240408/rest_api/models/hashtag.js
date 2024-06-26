const Sequelize = require("sequelize");

class Hashtag extends Sequelize.Model {
    static initiate(sequelize) {
        Hashtag.init({
            // id, title
            title: {
                type: Sequelize.STRING(20),
                allowNull: false,
                unique: true,
            }

        }, {
            sequelize,
            charset: "utf8mb4",
            collate: "utf8mb4_general_ci"
        })
    }

    static associate(db) {
        db.Hashtag.belongsToMany(db.Post, { through: 'PostHashtag' });
    }
}

module.exports = Hashtag;