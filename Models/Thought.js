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
    },

    username: {
        type: string,
        required: true,
    },
    
    reactions: [reactionSchema],

},
{
    toJSON: {
        virtuals: true,
        getters: true
    }, 
},
);

thoughtsSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('thought', ThoughtSchema);

module.exports = Thought;
