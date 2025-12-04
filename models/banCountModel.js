import {SQLize} from '../databases/db.js';
import {sqlize} from '../databases/db.js';
import { Model } from 'sequelize';
class BanCount extends Model {}
BanCount.init(
    {
        id: {
            type: SQLize.INTEGER,
            unique: true,
            allowNull: false,
            primaryKey: true
        },
        userID: {
            type: SQLize.STRING,
            unique: false,
            allowNull: false,
        },
        serverID: {
            type: SQLize.STRING,
            allowNull: false,
            unique: true,
        },
        count: {
            type: SQLize.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
    },
    {
        sqlize,
        freezeTableName: true,
        tableName: 'bancounts',
        modelName: 'BanCount',
        timestamps: true
    }
);
(async () => {
    await BanCount.sync()
})();

export default BanCount