const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema(
  {
    FirstName: String,
    LastName: String,
    Email: String,
    UserName: String,
    Phone: Number,
    Address: String,
    Password: String,
    ConfirmPassword: String,
    isFavorite: {
      type: Boolean,
      default: false
    }
  },
  {
    collection: "contact"
  }
);

module.exports = mongoose.model("Contact", ContactSchema);
