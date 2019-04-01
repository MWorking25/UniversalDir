'use strict';
const mongoose = require('mongoose'),
        Schema = mongoose.Schema,
        encrypDecrypt = require('../../config/dataSecurity'),
        fieldSchema = require('./fields.model'),
        userSchema = require('../patients/user.model'),
        adminUserSchema = require('./adminUsers.model');

        var patientSchema = new Schema(
            {
                userid:{type: Schema.Types.ObjectId, ref: 'Users'},
                fullname:{type: String,
                    get: encrypDecrypt.decryptText,
                    set: encrypDecrypt.encryptText},
                gender:{type: String,
                    get: encrypDecrypt.decryptText,
                    set: encrypDecrypt.encryptText},
                dob:{type: String,
                    get: encrypDecrypt.decryptText,
                    set: encrypDecrypt.encryptText},
                mobile :{type: String,
                    get: encrypDecrypt.decryptText,
                    set: encrypDecrypt.encryptText},
                email:{type: String,
                            get: encrypDecrypt.decryptText,
                            set: encrypDecrypt.encryptText},
                address:{type: String,
                    get: encrypDecrypt.decryptText,
                    set: encrypDecrypt.encryptText},
                occupation:{type: String,
                        get: encrypDecrypt.decryptText,
                        set: encrypDecrypt.encryptText},
                officeaddress:{type: String,
                    get: encrypDecrypt.decryptText,
                    set: encrypDecrypt.encryptText},
                clinicid:{ type: Schema.Types.ObjectId, ref: 'fieldModel' },
                cliniclocationid:{ type: Schema.Types.ObjectId, ref: 'fieldlocationModel' },
                createddate:{type:Date,default:new Date()},
                createdby:{ type: Schema.Types.ObjectId, ref: 'AdminUsers' },
            }
        )

        patientSchema.set('toJSON', { getters: true, setters: true ,virtuals: true});
        patientSchema.set('toObject', { getters: true, setters: true,virtuals: true });
        
        mongoose.model('patientModel', patientSchema);
