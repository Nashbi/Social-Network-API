const { model, Schema } = require('mongoose');
const mongoose = require("mongoose")


const userSchema = new Schema (

  {
    username:{ 
    type: string,
    unique: true,
    required: true,
    trimmed: true,
    },

    email: {
        type: string,
        required: true,
        unique: true, 
        match: [-/^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/]
    },

    thoughts: [ {
        type: Schema.Types.ObjectId,
        ref: "Thought",
  }],

    friends: [ {
        type: Schema.Types.ObjectId,
        ref: "User",
    }],
},
{
    toJSON: {
        virtuals: true,
        getters: true
    }, 
}
);

UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User;
