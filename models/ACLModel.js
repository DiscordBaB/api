import {SQLize} from '../databases/db.js';
import {sqlize} from '../databases/db.js';
import { Model } from 'sequelize';
class ACL extends Model {}
ACL.init(
    {
        id: {
            type: SQLize.INTEGER,
            unique: true,
            allowNull: false,
            primaryKey: true
        },
        key: {
            type: SQLize.STRING,
            unique: true,
            allowNull: false,
        },
        createdAt: {
            type: SQLize.DATE,
            allowNull: false,
        },
        permissions: {
            type: SQLize.JSON,
            allowNull: false,
            /*
            * {
            *   api: [true, {}],
            *   dashboard: true,
            *
            */
        }
    },
    {
        sqlize,
        freezeTableName: true,
        tableName: 'ACL',
        modelName: 'ACL',
        timestamps: true
    }

);
(async () => {
    await ACL.sync()
})();
export default ACL