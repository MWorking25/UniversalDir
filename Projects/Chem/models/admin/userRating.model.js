'use strict';
const mongoose = require('mongoose'),
        encrypDecrypt = require('../../config/dataSecurity'),
        fieldSchema = require('./fields.model'),
        userSchema = require('../patients/user.model'),
        adminUserSchema = require('./adminUsers.model'),
        Schema = mongoose.Schema;

        var adminUserSchema = new Schema(
            {
                userid:{ type: Schema.Types.ObjectId, ref: 'Users' },
                adminuser:{ type: Schema.Types.ObjectId, ref: 'AdminUsers' },
                rating:{type:Number},
                comment:[{type:String}],
                createddate:{type:Date,default:new Date()},
            }
        )

        adminUserSchema.set('toJSON', { getters: true, setters: true ,virtuals: true});
        adminUserSchema.set('toObject', { getters: true, setters: true,virtuals: true });

        mongoose.model('AdminUsers', adminUserSchema);

