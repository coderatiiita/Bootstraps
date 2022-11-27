const mongoose = require("mongoose");

const USER_ROLES = require("./constants/user-roles");

const userModel = {
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  role: {
    type: String,
    default: USER_ROLES.GUEST,
  },
};

const UserSchema = mongoose.Schema(userModel, {
  timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
});

mongoose.model("user", UserSchema);
