import { Schema, model, models } from "mongoose";

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "Email already exists"],
      match: [/.+\@.+\..+/, "Please enter a valid email address"], // Regex for email validation
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    fullName: {
      type: String,
      required: [true, "Fullname is required"],
    },
    phoneNumber: {
      type: String,
      required: [true, "Phone number is required"],
    },
    billingAddress: {
      type: String,
      required: [true, "Address is required"],
    },
    resetToken: {
      type: String,
      required: false,
      unique: true,
    },
    resetTokenExpiry: {
      type: Date,
      required: false,
    },
  },
  { timestamps: true }
);

const User = models.User || model("User", userSchema);
export default User;
