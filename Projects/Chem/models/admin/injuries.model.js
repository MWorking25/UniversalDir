'use strict';
const mongoose = require('mongoose'),
        Schema = mongoose.Schema,
        encrypDecrypt = require('../../config/dataSecurity'),
        fieldSchema = require('./fields.model'),
        adminUserSchema = require('./adminUsers.model');

        var prescriptionSchema = new Schema({
            name:{ type: Schema.Types.ObjectId, ref: 'medicineModel' },
            doas:{type: String,
                get: encrypDecrypt.decryptText,
                set: encrypDecrypt.encryptText},
            period:{type: Number},    
            periodlap:{type: String},
            timescheduleperday:[],    
        })

        prescriptionSchema.set('toJSON', { getters: true, setters: true ,virtuals: true});
        prescriptionSchema.set('toObject', { getters: true, setters: true,virtuals: true });
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
                createdby:{ type: Schema.Types.ObjectId, ref: 'AdminUsers' },
            }
        );

        injurySchema.set('toJSON', { getters: true, setters: true ,virtuals: true});
        injurySchema.set('toObject', { getters: true, setters: true,virtuals: true });
        
        mongoose.model('injuryModal', injurySchema);
