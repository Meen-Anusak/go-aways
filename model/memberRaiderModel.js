const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const memberRaiderSchema = Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    sex: {
      type: String,
      required: true,
    },
    phone_number: {
      type: String,
      required: true,
    },
    citizen_id: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

const Members = mongoose.model("raider", memberRaiderSchema);
module.exports = Members;
