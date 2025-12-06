import { Sequelize } from '../databases/db.js'
import { sequelize } from '../databases/db.js';
import { Model } from 'sequelize';

class Bans extends Model {

}

Bans.init(
    {
        id: {
            type: Sequelize.INTEGER,
            unique: true,
            allowNull: false,
            primaryKey: true
        },
        userID: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        },
        serverID: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        createdAt: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        expiresAt: {
            type: Sequelize.DATE,
            allowNull: true // If null, a ban is permanent
        }
    },
    {
        sequelize,
        freezeTableName: true,
        tableName: 'Bans',
        modelName: 'Bans',
        timestamps: true
    }
);
(async () => {
    await Bans.sync()
})();
export default Bans