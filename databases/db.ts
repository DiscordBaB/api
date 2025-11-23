import SQLize = require('sequelize');
import { MySqlDialect } from "@sequelize/mysql"
const mysql_config = require('/home/ken/.dbab-config/dbab.json').mysql

let sqlize: any;
// @ts-ignore
sqlize = new SQLize(mysql_config.database, mysql_config.user, mysql_config.password,{
    dialect: MySqlDialect,
    logging: console.log,
    host: mysql_config.host,
    port: mysql_config.port
});
module.exports = {sqlize, SQLize}

export { SQLize, sqlize };
