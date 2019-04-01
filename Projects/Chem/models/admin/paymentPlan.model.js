'use strict';
const mongoose = require('mongoose'),
        Schema = mongoose.Schema,
        fieldSchema = require('./fields.model'),
        adminUserSchema = require('./adminUsers.model');

        var paymentPlanSchema = new Schema(
            {
                name:{ type: String},
                period:{ type: Number },
                periodLap:{ type: String },
                amount:{ type: Number },
                description:{type:String},
                createddate:{type:Date,default:new Date()},
                createdby:{ type: Schema.Types.ObjectId, ref: 'AdminUsers' },
            }
        )

        paymentPlanSchema.set('toJSON', { getters: true, setters: true ,virtuals: true});
        paymentPlanSchema.set('toObject', { getters: true, setters: true,virtuals: true });
        mongoose.model('paymentPlanModel', paymentPlanSchema);
