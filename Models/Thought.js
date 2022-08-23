const { model, Schema } = require('mongoose');
const mongoose = require("mongoose")


const thoughtsSchema = new Schema (
  {
    thoughtText:{ 

        type: string,
        required: true,
        minLength: 1,
        maxLength: 280,
    },

    createdAt: {
        type: Date,
      default: () => Date(),
    }
}
);

UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const User = model('Thought', UserSchema);

module.exports = User;
