import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      requred: [true, "Please add a name"],
    },
    email: {
      type: String,
      requred: [true, "Please add an email"],
      unique: true,
    },
    password: {
      type: String,
      requred: [true, "Please add a password"],
    },
    isAdmin: {
      type: Boolean,
      requred: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
