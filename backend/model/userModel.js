import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userScheme = mongoose.Schema(
 {
  email: {
   type: String,
   required: true,
   unique: true,
  },
  password: {
   type: String,
   required: true,
  },
  isVerified: {
   type: Boolean,
   default: false,
  }
 },
 { timestamps: true }
);

userScheme.methods.matchPassword = async function (enteredPassword) {
 return await bcrypt.compare(enteredPassword, this.password);
};

userScheme.pre("save", async function (next) {
 if (!this.isModified("password")) {
  next();
 }

 const salt = await bcrypt.genSalt(10);
 this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userScheme);

export default User;
