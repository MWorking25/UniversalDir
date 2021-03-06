'use strict';
const mongoose = require('mongoose'),
        Schema = mongoose.Schema,
        fieldSchema = require('./fields.model'),
        fieldPaymentSchema = require('./fieldPayment.model'),
        adminUserSchema = require('./adminUsers.model');

        var PaymentDetailsSchema = new Schema(
            {
                fieldid:{ type: Schema.Types.ObjectId, ref: 'fieldModel' },
                paymentid:{ type: Schema.Types.ObjectId, ref: 'fieldPaymentModel' },
                activationDate:{type:Date},
                paidAmount:{type:Number},
                pendingAmount:{type:Number},
                comment:{type:String},
                createddate:{type:Date,default:new Date()},
                createdby:{ type: Schema.Types.ObjectId, ref: 'AdminUsers' },
            }
        )

        PaymentDetailsSchema.set('toJSON', { getters: true, setters: true ,virtuals: true});
        PaymentDetailsSchema.set('toObject', { getters: true, setters: true,virtuals: true });
        mongoose.model('fieldPaymentDetailsModel', PaymentDetailsSchema);
