const connection = require("./connection");
const knex = require("knex");

function getTeam(testDb) {
  const db = testDb || connection;
  return db("team").select();
}

module.exports = {
  getTeam
};
