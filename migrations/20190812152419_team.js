exports.up = function(knex, Promise) {
  return knex.schema.createTable("team", function(table) {
    table.increments("id").primary;
    table.string("project_name");
    table.string("name");
    table.string("expertise");
    table.string("contact");
    table.string("email");
    table.string("experience");
    table.string("description");
    table.string("code");
    table.string("hash");
    table.string("image");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("team");
};
