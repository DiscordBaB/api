import Sequelize from 'sequelize';
import os from 'os'
home_dir = os.homedir();
import cfg from `${home_dir}/.dbab-config/dbab.json` with {type: 'json'};

// @ts-ignore
const sequelize = new Sequelize(cfg.mysql.database, cfg.mysql.user, cfg.mysql.password,{
    dialect: 'mysql',
    logging: console.log,
    host: cfg.mysql.host,
    port: cfg.mysql.port
});
export { sequelize }
export { Sequelize }
