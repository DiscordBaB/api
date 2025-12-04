import {sqlize} from '../databases/db.js';
import {SQLize} from '../databases/db.js';
import { Model } from 'sequelize';
class Appeal extends Model {}
Appeal.init(
    {
        id: {
            type: SQLize.INTEGER,
            unique: true,
            allowNull: false,
            primaryKey: true
        },
        userID: {
            type: SQLize.STRING,
            unique: true,
            allowNull: false
        },
        reason: {
            type: SQLize.TEXT,
            allowNull: false,
        },
        disclaimer: {
            type: SQLize.INTEGER,
            allowNull: false,
        },
        createdAt: {
            type: SQLize.DATE,
            allowNull: false,
        },
        serverID: {
            type: SQLize.STRING,
            allowNull: false
        }
    },
    {
        sqlize,
        freezeTableName: true,
        tableName: 'appeals',
        modelName: 'Appeal',
        timestamps: true
    }

);
(async () => {
    await Appeal.sync()
})();
export default Appeal