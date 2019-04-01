'use strict';
const mongoose = require('mongoose'),
        encrypDecrypt = require('../../config/dataSecurity'),
        Schema = mongoose.Schema;

        var userSchema = new Schema(
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
                mobile:{type: String,
                    get: encrypDecrypt.decryptText,
                    set: encrypDecrypt.encryptText},
                email:{type: String,
                    get: encrypDecrypt.decryptText,
                    set: encrypDecrypt.encryptText},
                address:{type: String,
                    get: encrypDecrypt.decryptText,
                    set: encrypDecrypt.encryptText},
                password:{type:String},
                profilepic:{type: String},
                occupation:{type: String,
                    get: encrypDecrypt.decryptText,
                    set: encrypDecrypt.encryptText},
                officeaddress:{type: String,
                     get: encrypDecrypt.decryptText,
                     set: encrypDecrypt.encryptText},
                gmailid:{type:String},
                facebookid:{type:String},
                activestatus:{type:String},
                createddate:{type:Date,default:new Date()},
                //createdby:{ type: Schema.Types.ObjectId, ref: 'Users' },
            }
        )

        userSchema.set('toJSON', { getters: true, setters: true ,virtuals: true});
        userSchema.set('toObject', { getters: true, setters: true,virtuals: true });

        mongoose.model('Users', userSchema);
