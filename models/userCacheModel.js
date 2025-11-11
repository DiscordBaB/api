const { SQLize, sqlize, Model } = require('../databases/db')

class UserCache extends Model {}
UserCache.init(
    {
        id: {
            type: SQLize.STRING,
            unique: true,
            allowNull: false
        },
        createdAt: {
            type: SQLize.DATE,
            allowNull: false,
        },
        bannerURL: {
            type: SQLize.TEXT,
            allowNull: true
        },
        avatarDecorationURL: {
            type: SQLize.TEXT,
            allowNull: true
        },
        avatarURL: {
            type: SQLize.TEXT,
            allowNull: true
        },
        username: {
            type: SQLize.TEXT,
            allowNull: true
        },
        bot: {
            type: SQLize.BOOLEAN,
            allowNull: true
        },
        system: {
            type: SQLize.BOOLEAN,
            allowNull: true
        },
        nicknames: {
            type: SQLize.JSON,
            allowNull: true
        }


    },
    {
        sqlize,
        freezeTableName: true,
        tableName: 'user_cache',
        modelName: 'UserCache',
        timestamps: true
    }

);
(async () => {
    await UserCache.sync()
})();
module.exports = UserCache