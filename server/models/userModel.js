const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    skills: {
      type: Array,
      required: true,
    },
    imgLink: {
      type: String,
      required: false,
    },


  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
