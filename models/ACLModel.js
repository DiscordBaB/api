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
        updatedAt: {
            type: Sequelize.DATE,
            allowNNull: false
        },
        permissions: {
            type: Sequelize.JSON,
            allowNull: false,
            /**
            *   {
            *     "api":{
            *       "global":true,
            *         "paths":{
            *           "acl":{
            *             "perms":{
            *               "can_add":true
            *             }
            *           },
            *           "appeals":{
            *             "perms":{
            *               "can_add":true
            *             }
            *           },
            *           "bans":{
            *            "perms":{
            *              "can_add_3rd_party":true
            *            }
            *          },
            *          "bc":{
            *            "perms":{
            *              "can_add":true
            *            }
            *          },
            *          "cache":{
            *            "perms":{
            *              "can_add_standalone":true
            *            }
            *          }
            *        }
            *      },
            *      "dashboard":true
            *    }
            *
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