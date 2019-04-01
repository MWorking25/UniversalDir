'use strict';
const mongoose = require('mongoose'),
        Schema = mongoose.Schema,
        adminUserSchema = require('./adminUsers.model');

        var fieldLocations = new Schema({
            timing:{type:Date},
            address:{type:String},
            contacts:[{numbers:{type:Number}}],
            emails:[{ids:{type:Number}}],
            lattitude:{type:Number},
            longitude:{type:Number},
            activestatus:{type:String}
        })

        var fieldSchema = new Schema(
            {
                name:{type:String},
                locations:[fieldLocations],
                website:{type:String},
                activestatus:{type:String},
                createddate:{type:Date,default:new Date()},
                createdby:{ type: Schema.Types.ObjectId, ref: 'AdminUsers' },
            }
        )

        fieldLocations.set('toJSON', { getters: true, setters: true ,virtuals: true});
        fieldLocations.set('toObject', { getters: true, setters: true,virtuals: true });
        fieldSchema.set('toJSON', { getters: true, setters: true ,virtuals: true});
        fieldSchema.set('toObject', { getters: true, setters: true,virtuals: true });
        mongoose.model('fieldlocationModel', fieldLocations);
        mongoose.model('fieldModel', fieldSchema);
      
