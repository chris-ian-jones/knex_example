const db = require('./db-config.js')

// db.select('*').from('users')
// shortcut for above
db('users')
// resolves to an array of users

db('users').where({ id: 3 })
// resolves to an array containing any users that match the where

db('users').insert({ name: 'chris', age: 32 })
// resolves to an array containing the id of the new user

db('users').where({ id: 5 }).update({ age: 77 })
// resolves to the count of records updated

db('users').where({ id: 5 }).del()