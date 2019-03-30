'use strict';
const mongoose = require('mongoose'),
        encrypDecrypt = require('../config/dataSecurity'),
        Schema = mongoose.Schema;

        var userSchema = new Schema(
            {
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
                createddate:{type:Date,default:new Date()},
                createdby:{ type: Schema.Types.ObjectId, ref: 'usersModel' },
            }
        )


        mongoose.model('Users', userSchema);
