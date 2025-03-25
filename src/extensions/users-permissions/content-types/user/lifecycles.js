const bcrypt = require("bcryptjs");

module.exports = {
  async beforeCreate(event) {
    const { data } = event.params;
    if (data.password) {
      data.password = await bcrypt.hash(data.password, 13); // Hash avec saltRounds = 13
      console.log("🔹 Nouveau hash (bcrypt 13) :", data.password);
    }
  },
  async beforeUpdate(event) {
    const { data } = event.params;
    if (data.password) {
      data.password = await bcrypt.hash(data.password, 13); // Hash avec saltRounds = 13
      console.log("🔹 Hash mis à jour (bcrypt 13) :", data.password);
    }
  }
};

