const db = require('../db')

const create = () => {
    return db.query(`CREATE TABLE IF NOT EXISTS job (
        id int(11) unsigned NOT NULL AUTO_INCREMENT,
        title varchar(255) DEFAULT NULL,
        salary decimal(10,2) DEFAULT 0,
        PRIMARY KEY (id)
    )`)
}

const init = () => {
    return db.query(`TRUNCATE TABLE job`)
}

const all = () => {
	return db.query(`SELECT * FROM job`)
}

const count = () => {
	return db.query(`SELECT COUNT(*) count FROM job`)
}

const insert = (data) => {
    return db.query("INSERT INTO job (title, salary) VALUES (?)", [[data.title,data.salary]])
}

const update = (data) => {
    return db.query("UPDATE job SET ? WHERE id=?", [data,data.id])
}

const remove = (id) => {
    return db.query("DELETE FROM job WHERE id=?", [id])
}

module.exports = {
    create, init, all, count, insert, update, remove
}