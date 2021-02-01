const { model, Schema } = require("mongoose");

const kidSchema = new Schema({
  firstname: String,
  lastname: String,
  sexe: String,
  father: String,
  mother: String,
  adress: String,
  birthcity: String,
  birthdate: String,
  cin: String,
  createdAt: String,
  firstvac: {
    Date: String,
    Done: {
      type: Boolean,
      default: false,
    },
  },
  secondvac: {
    Date: String,
    Done: {
      type: Boolean,
      default: false,
    },
  },
  thirdvac: {
    Date: String,
    Done: {
      type: Boolean,
      default: false,
    },
  },
  fourthvac: {
    Date: String,
    Done: {
      type: Boolean,
      default: false,
    },
  },
  fifthvac: {
    Date: String,
    Done: {
      type: Boolean,
      default: false,
    },
  },
});

module.exports = model("Kid", kidSchema);
