import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    default: "Ha Noi",
  },
  phone: {
    type: String,
    default: "0123456789",
  },
  role: {
    type: String,
    default: "user",
    enum: ["user", "admin"],
  },
  refreshToken: [String],
  resetPasswordToken: {
    type: String,
  },
});

userSchema.methods.toJSON = function () {
  let obj = this.toObject();
  delete obj.password;
  delete obj.refreshToken;
  return obj;
};

export default mongoose.model("user", userSchema);
