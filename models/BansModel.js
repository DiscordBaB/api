import { SQLize, sqlize } from '../databases/db';
import { Model } from 'sequelize';

class Bans extends Model {

}

Bans.init(
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
        serverID: {
            type: SQLize.STRING,
            allowNull: false,
        },
        createdAt: {
            type: SQLize.DATE,
            allowNull: false,
        },
        expiresAt: {
            type: SQLize.DATE,
            allowNull: true // If null, a ban is permanent
        }
    },
    {
        sqlize,
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