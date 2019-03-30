'use strict';
const mongoose = require('mongoose'),
        encrypDecrypt = require('../config/dataSecurity'),
        Schema = mongoose.Schema
        fieldSchema = require('./fields.model');

        var userSchema = new Schema(
            {
                fullname:{type:String},
                mobile1:{type: String,
                    get: encrypDecrypt.decryptText,
                    set: encrypDecrypt.encryptText},
                mobile2:{type: String,
                        get: encrypDecrypt.decryptText,
                        set: encrypDecrypt.encryptText},
                email:{type: String,
                    get: encrypDecrypt.decryptText,
                    set: encrypDecrypt.encryptText},
                password:{type:String},
                fields:[
                            {
                                fieldid:{ type: Schema.Types.ObjectId, ref: 'fieldModel' },
                                role:{type:String},
                                qualification:[
                                                {
                                                    degree:{type: String,
                                                        get: encrypDecrypt.decryptText,
                                                        set: encrypDecrypt.encryptText},
                                                    scancopy:{type: String,
                                                        get: encrypDecrypt.decryptText,
                                                        set: encrypDecrypt.encryptText}
                                                }
                                              ],
                            }
                        ],
                activestatus:{type:String},
                createddate:{type:Date,default:new Date()},
                createdby:{ type: Schema.Types.ObjectId, ref: 'Users' },
            }
        )


        mongoose.model('Users', userSchema);
