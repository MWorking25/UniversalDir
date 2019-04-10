'use strict';
const mongoose = require('mongoose'),
        Schema = mongoose.Schema;

        var pathalogyReportSchema = new Schema(
            {
               reportname:{type: String,
                    get: encrypDecrypt.decryptText,
                    set: encrypDecrypt.encryptText},
                description:{type: String,
                    get: encrypDecrypt.decryptText,
                    set: encrypDecrypt.encryptText},
                price:{type: String,
                    get: encrypDecrypt.decryptText,
                    set: encrypDecrypt.encryptText},
                requirements:{type: String,
                    get: encrypDecrypt.decryptText,
                    set: encrypDecrypt.encryptText},
                notes:{type: String,
                    get: encrypDecrypt.decryptText,
                    set: encrypDecrypt.encryptText}
            }
        )

        pathalogyReportSchema.set('toJSON', { getters: true, setters: true ,virtuals: true});
        pathalogyReportSchema.set('toObject', { getters: true, setters: true,virtuals: true });
        mongoose.model('pathalogyReportModel', pathalogyReportSchema);


        var pathalogySChema = new Schema(
            {
                name:{type: String,
                    get: encrypDecrypt.decryptText,
                    set: encrypDecrypt.encryptText},
                address:{type: String,
                    get: encrypDecrypt.decryptText,
                    set: encrypDecrypt.encryptText},
                price:{type: String,
                    get: encrypDecrypt.decryptText,
                    set: encrypDecrypt.encryptText},
                requirements:{type: String,
                    get: encrypDecrypt.decryptText,
                    set: encrypDecrypt.encryptText},
                notes:{type: String,
                    get: encrypDecrypt.decryptText,
                    set: encrypDecrypt.encryptText}
            }
        )

        pathalogyReportSchema.set('toJSON', { getters: true, setters: true ,virtuals: true});
        pathalogyReportSchema.set('toObject', { getters: true, setters: true,virtuals: true });
        mongoose.model('pathalogyReportModel', pathalogyReportSchema);
