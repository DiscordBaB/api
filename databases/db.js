const SQLize = require('sequelize')
import { MySqlDialect } from "@sequelize/mysql"
const mysql_config = require('/home/ken/.dbab-config/dbab.json').mysql

const sqlize = new SQLize({
    dialect: MySqlDialect,
    logging: console.log,
    database: mysql_config.database,
    user: mysql_config.user,
    password: mysql_config.password,
    host: mysql_config.host,
    port: mysql_config.port
});
module.exports = {sqlize, SQLize}