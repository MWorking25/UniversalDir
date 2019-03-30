'use strict';
const mongoose = require('mongoose'),
        Schema = mongoose.Schema,
        fieldSchema = require('./fields.model'),
        userSchema = require('./user.model');

        var fieldPaymentSchema = new Schema(
            {
                fieldid:{ type: Schema.Types.ObjectId, ref: 'fieldModel' },
                paymentplan:{ type: Schema.Types.ObjectId, ref: 'paymentPlanModel' },
                createddate:{type:Date,default:new Date()},
                createdby:{ type: Schema.Types.ObjectId, ref: 'Users' },
            }
        )


        mongoose.model('fieldPaymentModel', fieldPaymentSchema);
