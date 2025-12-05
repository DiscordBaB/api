import SQLize from 'sequelize';
import cfg from '/home/ken/.dbab-config/dbab.json' with {type: 'json'};
let sequelize;
// @ts-ignore
sequelize = new SQLize(cfg.mysql.database, cfg.mysql.user, cfg.mysql.password,{
    dialect: 'mysql',
    logging: console.log,
    host: cfg.mysql.host,
    port: cfg.mysql.port
});
export { sequelize }
export { SQLize}
