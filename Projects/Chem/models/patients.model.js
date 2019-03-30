'use strict';
const mongoose = require('mongoose'),
        Schema = mongoose.Schema,
        encrypDecrypt = require('../config/dataSecurity'),
        fieldSchema = require('./fields.model'),
        userSchema = require('./user.model');

        var patientSchema = new Schema(
            {
                fullname:{type: String,
                    get: encrypDecrypt.decryptText,
                    set: encrypDecrypt.encryptText},
                gender:{type: String,
                    get: encrypDecrypt.decryptText,
                    set: encrypDecrypt.encryptText},
                dob:{type: String,
                    get: encrypDecrypt.decryptText,
                    set: encrypDecrypt.encryptText},
                mobile1 :{type: String,
                    get: encrypDecrypt.decryptText,
                    set: encrypDecrypt.encryptText},
                mobile2:{type: String,
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
                clinicid:{ type: Schema.Types.ObjectId, ref: 'fieldModel' },
                cliniclocationid:{ type: Schema.Types.ObjectId, ref: 'fieldlocationModel' },
                createddate:{type:Date,default:new Date()},
                createdby:{ type: Schema.Types.ObjectId, ref: 'Users' },
            }
        )


        mongoose.model('patientModel', patientSchema);
