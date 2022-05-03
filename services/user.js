const db = require('../db')

const create = () => {
    return db.query(`CREATE TABLE IF NOT EXISTS user (
        id int(11) unsigned NOT NULL AUTO_INCREMENT,
        first_name varchar(255) DEFAULT NULL,
        last_name varchar(255) DEFAULT NULL,
        PRIMARY KEY (id)
    )`)
}

const init = () => {
    return db.query(`TRUNCATE TABLE user`)
}

const all = (params = 1) => {
	return db.query(`SELECT * FROM user WHERE ?`,[ params ])
}

const count = (params = 1) => {
	return db.query(`SELECT COUNT(*) count FROM user WHERE ?`,[ params ])
}

const insert = (data) => {
    return db.query("INSERT INTO user (first_name,last_name) VALUES (?)", [[data.first_name,data.last_name]])
}

const update = (data) => {
    return db.query("UPDATE user SET ? WHERE id=?", [data,data.id])
}

const remove = (id) => {
    return db.query("DELETE FROM user WHERE id=?", [id])
}

module.exports = {
    create, init, all, count, insert, update, remove
}