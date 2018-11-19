const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema ({
    googleId: String,
    userName: String,
	comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
	posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }]
});

mongoose.model("users", userSchema);