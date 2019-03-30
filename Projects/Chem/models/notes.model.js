'use strict';
const mongoose = require('mongoose'),
        Schema = mongoose.Schema;
        const userSchema = require('./user.model'),
        usersModel = mongoose.model('Users');

        var commentsSchema = new Schema(
            {
                user:{ type: Schema.Types.ObjectId, ref: 'usersModel' },
                comment:{type:String},
                commentDate:{type:Date,default:new Date()},
            }
        );

        var checklistSchema = new Schema(
            {
               item:{type:String},
               isdone:{type:Number},
               createddate:{type:Date,default:new Date()},
            }
        );

        var notesSchema = new Schema(
            {
                title:{type:String},
                description:{type:String},
                labels:[],
                duedate:{type:Date},
                attachements:[],
                checklist:[checklistSchema],
                comments:[commentsSchema],
                createddate:{type:Date,default:new Date()},
                cardstatus:{type:String},
                createdby:{ type: Schema.Types.ObjectId, ref: 'usersModel' },
            }
        )


        mongoose.model('Notes', notesSchema);
