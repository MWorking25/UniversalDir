'use strict';
const mongoose = require('mongoose'),
        Schema = mongoose.Schema,
        encrypDecrypt = require('../config/dataSecurity'),
        fieldSchema = require('./fields.model'),
        userSchema = require('./user.model');

        var prescriptionSchema = new Schema({
            name:{ type: Schema.Types.ObjectId, ref: 'medicineModel' },
            doas:{type: String,
                get: encrypDecrypt.decryptText,
                set: encrypDecrypt.encryptText},
            period:{type: Number},    
            periodlap:{type: String},
            timescheduleperday:[],    
        })

        mongoose.model('prescriptionModal', prescriptionSchema);

        var injurySchema = new Schema(
            {
                name:{type: String,
                    get: encrypDecrypt.decryptText,
                    set: encrypDecrypt.encryptText},
                description:{type: String,
                    get: encrypDecrypt.decryptText,
                    set: encrypDecrypt.encryptText},
                prescription:[prescriptionSchema],
                clinicid:{ type: Schema.Types.ObjectId, ref: 'fieldModel' },
                createddate:{type:Date,default:new Date()},
                createdby:{ type: Schema.Types.ObjectId, ref: 'Users' },
            }
        )


        
        mongoose.model('injuryModal', injurySchema);
