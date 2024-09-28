const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  city: String,
});
delete mongoose.models.User;
const User = mongoose.model("User", userSchema);

// module.exports = User;
module.exports = { User, userSchema };
