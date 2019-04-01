'use strict';
const mongoose = require('mongoose'),
        Schema = mongoose.Schema,
        fieldSchema = require('./fields.model'),
        adminUserSchema = require('./adminUsers.model');

        var fieldPaymentSchema = new Schema(
            {
                fieldid:{ type: Schema.Types.ObjectId, ref: 'fieldModel' },
                paymentplan:{ type: Schema.Types.ObjectId, ref: 'paymentPlanModel' },
                createddate:{type:Date,default:new Date()},
                createdby:{ type: Schema.Types.ObjectId, ref: 'AdminUsers' },
            }
        )

        fieldPaymentSchema.set('toJSON', { getters: true, setters: true ,virtuals: true});
        fieldPaymentSchema.set('toObject', { getters: true, setters: true,virtuals: true });
        mongoose.model('fieldPaymentModel', fieldPaymentSchema);
