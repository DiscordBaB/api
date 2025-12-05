import {SQLize} from '../databases/db.js';
import {sequelize} from '../databases/db.js';
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
        sequelize,
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