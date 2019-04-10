'use strict';
const mongoose = require('mongoose'),
        Schema = mongoose.Schema;
const fieldSchema = require('../admin/fields.model'),
      UserSchema = require('./user.model'),
      AdminUsersSchema = require('../admin/adminUsers.model');


      var appointmentTimeSchema = new Schema({
          appdate:{type:Date},
          apptime:{type:Date},
          status:{type:String},
          comment:{type:String},
          updatedon:{type:Date,default:new Date()},
      });

      appointmentTimeSchema.set('toJSON', { getters: true, setters: true ,virtuals: true});
      appointmentTimeSchema.set('toObject', { getters: true, setters: true,virtuals: true });
        

        var appointmentSchema = new Schema(
            {
                userid:{ type: Schema.Types.ObjectId, ref: 'AdminUsers' },
                doctorid:{ type: Schema.Types.ObjectId, ref: 'AdminUsers' },
                fieldid:{ type: Schema.Types.ObjectId, ref: 'fieldModel' },
                fieldlocationid:{ type: Schema.Types.ObjectId, ref: 'fieldlocationModel' },
                appointments:[
                    appointmentTimeSchema
                ],
                visitstatus:{type:String},
                createddate:{type:Date,default:new Date()},
            }
        )

        appointmentSchema.set('toJSON', { getters: true, setters: true ,virtuals: true});
        appointmentSchema.set('toObject', { getters: true, setters: true,virtuals: true });
        
        mongoose.model('appointmentModel', appointmentSchema);
      
