'use strict';
const mongoose = require('mongoose'),
        encrypDecrypt = require('../../config/dataSecurity'),
        fieldSchema = require('./fields.model'),
        Schema = mongoose.Schema;

        var adminUserSchema = new Schema(
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
                profilepic:{type: String},
                fields:[
                    {
                        fieldid:{ type: Schema.Types.ObjectId, ref: 'fieldModel' },
                        role:{type:String},
                        qualification:[
                                        {
                                            degree:{type: String,
                                                get: encrypDecrypt.decryptText,
                                                set: encrypDecrypt.encryptText},
                                            scancopy:[{type: String,
                                                get: encrypDecrypt.decryptText,
                                                set: encrypDecrypt.encryptText}]
                                        }
                                      ],
                    }
                ],
                activestatus:{type:String},
                createddate:{type:Date,default:new Date()},
                createdby:{ type: Schema.Types.ObjectId, ref: 'AdminUsers' },
            }
        )

        adminUserSchema.set('toJSON', { getters: true, setters: true ,virtuals: true});
        adminUserSchema.set('toObject', { getters: true, setters: true,virtuals: true });

        mongoose.model('AdminUsers', adminUserSchema);
