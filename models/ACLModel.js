import {Sequelize} from '../databases/db.js';
import {sequelize} from '../databases/db.js';
import { Model } from 'sequelize';
class ACL extends Model {}
ACL.init(
    {
        id: {
            type: Sequelize.INTEGER,
            unique: true,
            allowNull: false,
            primaryKey: true
        },
        key: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false,
        },
        createdAt: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        permissions: {
            type: Sequelize.JSON,
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