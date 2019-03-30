'use strict';
const mongoose = require('mongoose'),
        Schema = mongoose.Schema,
        fieldSchema = require('./fields.model'),
        userSchema = require('./user.model');

        var paymentPlanSchema = new Schema(
            {
                name:{ type: String},
                period:{ type: Number },
                periodLap:{ type: String },
                amount:{ type: Number },
                description:{type:String},
                createddate:{type:Date,default:new Date()},
                createdby:{ type: Schema.Types.ObjectId, ref: 'Users' },
            }
        )


        mongoose.model('paymentPlanModel', paymentPlanSchema);
