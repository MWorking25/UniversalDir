'use strict';
const mongoose = require('mongoose'),
        Schema = mongoose.Schema;
        
        const userSchema = require('./patients/user.model'),
                adminUserSchema = require('./admin/adminUsers.model');

        var commentsSchema = new Schema(
            {
                user:{ type: Schema.Types.ObjectId, ref: 'Users' },
                comment:{type:String},
                commentDate:{type:Date,default:new Date()},
            }
        );

        commentsSchema.set('toJSON', { getters: true, setters: true ,virtuals: true});
        commentsSchema.set('toObject', { getters: true, setters: true,virtuals: true });

        var checklistSchema = new Schema(
            {
               item:{type:String},
               isdone:{type:Number},
               createddate:{type:Date,default:new Date()},
            }
        );


        checklistSchema.set('toJSON', { getters: true, setters: true ,virtuals: true});
        checklistSchema.set('toObject', { getters: true, setters: true,virtuals: true });

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
                createdby:{ type: Schema.Types.ObjectId, ref: 'Users' },
                createdbyadmin:{ type: Schema.Types.ObjectId, ref: 'AdminUsers' },
            }
        );

        notesSchema.set('toJSON', { getters: true, setters: true ,virtuals: true});
        notesSchema.set('toObject', { getters: true, setters: true,virtuals: true });

        mongoose.model('Notes', notesSchema);
