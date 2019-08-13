exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("team")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("team").insert([
        {
          id: 1,
          name: "Harry Candlish",
          project_name: "Hey Day",
          expertise: "Design",
          contact: "hcnd90@gmail.com",
          email: "hcnd90@gmail.com",
          experience: 1551598786956,
          description: "happy",
          code: "React",
          hash: "",
          image: "/"
        }
      ]);
    });
};
