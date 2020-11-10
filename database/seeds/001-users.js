exports.seed = function (knex) {
  const users = [
    { username: "Christopher", password: "christopher", department: "Web Dev" },
    {
      username: "Allison",
      password: "allison",
      department: "Athletic Training",
    },
    { username: "Toby", password: "toby", department: "Ball retriver" },
    { username: "Charlie", password: "charlie", department: "Security" },
  ];

  return knex("users").insert(users);
};
