import SQLize from 'sequelize';
import mysql_config from '/home/ken/.dbab-config/dbab.json' with {type: 'json'};

let sqlize;
// @ts-ignore
sqlize = new SQLize(mysql_config.database, mysql_config.user, mysql_config.password,{
    dialect: 'mysql',
    logging: console.log,
    host: mysql_config.host,
    port: mysql_config.port
});
export { sqlize }
export { SQLize}
