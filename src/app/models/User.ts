import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },

  email: { type: String, required: true },
  password: { type: String },
  image: {
    type: String,
    default: 'https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png',
  },
  isAdmin: { type: Boolean, default: false },
  followers: { type: Number, default: 0 },
  currentPlan: { type: String },
  dateExpiry: { type: Date },
});

// export const User = mongoose.model("User", userSchema);
export const User = mongoose.models?.User || mongoose.model('User', userSchema);
