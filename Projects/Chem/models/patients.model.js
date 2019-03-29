'use strict';
const mongoose = require('mongoose'),
        encrypDecrypt = require('../config/dataSecurity'),
        Schema = mongoose.Schema;


function setStatusCurrent (v) {
    if(v==null){
      return 'current';
    }
    return v;
 }


 var basicinformationschema = new Schema({
    firstname: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    middlename: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    lastname: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    gender: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    dateofbirth: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    dateofdeath: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    socialsecurityno: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    employeehandedness: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    medicalrecordno: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    status: String,
    updateddate: Date,
    updatedby: String
});
basicinformationschema.set('toJSON', {
    getters: true,
    setters: true
});
basicinformationschema.set('toObject', {
    getters: true,
    setters: true
});


//basic child
var contactSchema = new Schema({
    email: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    homephone: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    cellphone: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    workphone: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    extension: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    phonenumberselect: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    phonenumberselectsecond: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    phonenumberselectthird: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    voicemailthirdradio: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    voicemailsecondradio: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    voicemailradio: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    preferredcommunication: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    preferredcommunicationother: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    status: String,
    updateddate: Date,
    updatedby: String
});
contactSchema.set('toJSON', {
    getters: true,
    setters: true
});
contactSchema.set('toObject', {
    getters: true,
    setters: true
});


var addressSchema = new Schema({
    addressline1: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    addressline2: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    city: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    state: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    zipcode: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    status: String,
    updateddate: Date,
    updatedby: String
});
addressSchema.set('toJSON', {
    getters: true,
    setters: true
});
addressSchema.set('toObject', {
    getters: true,
    setters: true
});

var demographicsSchema = new Schema({
    preferredlanguage: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    preferredlanguageother: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    ethnicity: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    ethnicityother: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    race: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    raceother: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    status: String,
    updateddate: Date,
    updatedby: String
});
demographicsSchema.set('toJSON', {
    getters: true,
    setters: true
});
demographicsSchema.set('toObject', {
    getters: true,
    setters: true
});


var occupationSchema = new Schema({
    currentoccupation: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    currentoccupationother: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    status: String,
    updateddate: Date,
    updatedby: String
});
occupationSchema.set('toJSON', {
    getters: true,
    setters: true
});
occupationSchema.set('toObject', {
    getters: true,
    setters: true
});


var emergencyContactAddressSchema = new Schema({
    addressline1: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    addressline2: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    city: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    state: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    zipcode: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    status: String,
    updateddate: Date,
    updatedby: String
});
emergencyContactAddressSchema.set('toJSON', {
    getters: true,
    setters: true
});
emergencyContactAddressSchema.set('toObject', {
    getters: true,
    setters: true
});


var emergencycontactinfoSchema = new Schema({
    relationship: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    emergencyrelationother: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    firstname: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    lastname: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    email: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    homephone: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    cellphone: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    workphone: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    extension: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    status: String,
    updateddate: Date,
    updatedby: String,
    address: [emergencyContactAddressSchema]
});
emergencycontactinfoSchema.set('toJSON', {
    getters: true,
    setters: true
});
emergencycontactinfoSchema.set('toObject', {
    getters: true,
    setters: true
});
var injuryinformationSchema = new Schema({
    injuryinformationdetail: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    dateofinjury: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    dateoflastwork: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    dateofpermanent: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    timeofinjury: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    injuryplace: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    isinjurywitnes: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    other_isinjurywitnes: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    other_injuryplace: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    firstaid: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    firstaid_measure: Object,
    other_measure_text: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    reportedemployer: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    reportedemploye: Object,
    other_reportedemploye: [], //{ type: String, get: encrypDecrypt.decryptText, set: encrypDecrypt.encryptText},
    other_measure: [],
    afterworking: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    other_afterworking: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    additionaldetail: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    status: String,
    witnes: Object,
    evaluated_prior: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    timeofpriorevaluation: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    dateofpriorevaluation: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    otherwitnes: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    reportedemployOther: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    updateddate: Date,
    updatedby: String
});
injuryinformationSchema.set('toJSON', {
    getters: true,
    setters: true
});
injuryinformationSchema.set('toObject', {
    getters: true,
    setters: true
});

var locationaddressinjurySchema = new Schema({
    location_address1: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    location_address2: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    location_city: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    location_state: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    location_zipcode: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    status: String,
    updateddate: Date,
    updatedby: String
});
locationaddressinjurySchema.set('toJSON', {
    getters: true,
    setters: true
});
locationaddressinjurySchema.set('toObject', {
    getters: true,
    setters: true
});


var acceptedbodypartsinjuredbodypartSchema = new Schema({
    bodypart: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    bodypart_mechanism: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    bodysystem: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    otherBodysystem: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    otherBodyparts: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    bodypartsides: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    Hidebdpartsides: Boolean,
    otherbodypart_mechanismshow: Boolean,
    otherbodypart_mechanismshowmodel: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    ratebodypart: {
        type: Boolean,
        default: false
    },
    dateOfRating: Date,
    ratebodyYesNoRadio: {
        type: String,
        default: 'No'
    }

});
acceptedbodypartsinjuredbodypartSchema.set('toJSON', {
    getters: true,
    setters: true
});
acceptedbodypartsinjuredbodypartSchema.set('toObject', {
    getters: true,
    setters: true
});



var injuryemployerSchema = new Schema({
    company: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    natureofbusiness: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    othernatureofbusiness: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    emp_telephone: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    emp_extension: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    emp_fax: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    status: String,
    updateddate: Date,
    updatedby: String,
});
injuryemployerSchema.set('toJSON', {
    getters: true,
    setters: true
});
injuryemployerSchema.set('toObject', {
    getters: true,
    setters: true
});




var injuryemploymentSchema = new Schema({
    status: String,
    updateddate: Date,
    updatedby: String,
    jobtitle: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    durationofemployement: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    durationtype: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    }
});
injuryemploymentSchema.set('toJSON', {
    getters: true,
    setters: true
});
injuryemploymentSchema.set('toObject', {
    getters: true,
    setters: true
});




var employeraddressSchema = new Schema({
    emp_address1: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    emp_address2: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    emp_city: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    emp_zipcode: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    emp_state: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    status: String,
    updateddate: Date,
    updatedby: String
});
employeraddressSchema.set('toJSON', {
    getters: true,
    setters: true
});
employeraddressSchema.set('toObject', {
    getters: true,
    setters: true
});



var employercontactSchema = new Schema({
    employercontact_firstname: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    employercontact_lastname: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    employercontact_telephoneno: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    employercontact_extension: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    employercontact_email: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    employercontact_fax: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    employercontact_address: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    employercontact_city: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    employercontact_state: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    employercontact_zipcode: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    status: String,
    updateddate: Date,
    updatedby: String
});
employercontactSchema.set('toJSON', {
    getters: true,
    setters: true
});
employercontactSchema.set('toObject', {
    getters: true,
    setters: true
});




var injuryinsuranceSchema = new Schema({
    insurance_claimsadministrator: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    insurance_claimsnumber: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    insurancezipcode: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    insurancecity: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    insurancestate: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    insuranceaddressline1: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    insuranceaddressline2: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    status: String,
    updateddate: Date,
    updatedby: String
});
injuryinsuranceSchema.set('toJSON', {
    getters: true,
    setters: true
});
injuryinsuranceSchema.set('toObject', {
    getters: true,
    setters: true
});


var injuryclaimsadjusterSchema = new Schema({
    claimsadjuster_firstname: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    claimsadjuster_lastname: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    claimsadjuster_telephoneno: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    claimsadjuster_extension: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    claimsadjuster_email: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    claimsadjuster_fax: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    claimsadjuster_address: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    claimsadjuster_city: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    claimsadjuster_state: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    claimsadjuster_zipcode: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    claimsadjuster_company: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    status: String,
    updateddate: Date,
    updatedby: String
});
injuryclaimsadjusterSchema.set('toJSON', {
    getters: true,
    setters: true
});
injuryclaimsadjusterSchema.set('toObject', {
    getters: true,
    setters: true
});



var injurybillreviewSchema = new Schema({
    billreview_firstname: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    billreview_lastname: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    billreview_telephoneno: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    billreview_extension: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    billreview_email: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    billreview_fax: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    billreview_address: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    billreview_city: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    billreview_state: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    billreview_zipcode: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    billreview_company: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    status: String,
    updateddate: Date,
    updatedby: String
});
injurybillreviewSchema.set('toJSON', {
    getters: true,
    setters: true
});
injurybillreviewSchema.set('toObject', {
    getters: true,
    setters: true
});



var injuryUtilizationReviewSchema = new Schema({
    utilizationreview_firstname: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    utilizationreview_lastname: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    utilizationreview_telephoneno: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    utilizationreview_extension: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    utilizationreview_email: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    utilizationreview_fax: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    utilizationreview_address: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    utilizationreview_city: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    utilizationreview_state: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    utilizationreview_zipcode: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    utilizationreview_company: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    status: String,
    updateddate: Date,
    updatedby: String
});
injuryUtilizationReviewSchema.set('toJSON', {
    getters: true,
    setters: true
});
injuryUtilizationReviewSchema.set('toObject', {
    getters: true,
    setters: true
});


var injuryapplicantattorneySchema = new Schema({
    applicantattorney_firstname: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    applicantattorney_lastname: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    applicantattorney_telephoneno: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    applicantattorney_extension: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    applicantattorney_email: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    applicantattorney_fax: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    applicantattorney_address: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    applicantattorney_city: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    applicantattorney_state: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    applicantattorney_zipcode: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    applicantattorney_company: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    status: String,
    updateddate: Date,
    updatedby: String
});
injuryapplicantattorneySchema.set('toJSON', {
    getters: true,
    setters: true
});
injuryapplicantattorneySchema.set('toObject', {
    getters: true,
    setters: true
});



var defenseattorneySchema = new Schema({
    defenseattorney_firstname: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    defenseattorney_lastname: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    defenseattorney_telephoneno: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    defenseattorney_extension: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    defenseattorney_email: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    defenseattorney_fax: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    defenseattorney_address: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    defenseattorney_city: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    defenseattorney_state: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    defenseattorney_zipcode: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    defenseattorney_company: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    status: String,
    updateddate: Date,
    updatedby: String
});
defenseattorneySchema.set('toJSON', {
    getters: true,
    setters: true
});
defenseattorneySchema.set('toObject', {
    getters: true,
    setters: true
});



var rncasemanagerSchema = new Schema({
    rncasemanager_firstname: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    rncasemanager_lastname: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    rncasemanager_telephoneno: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    rncasemanager_extension: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    rncasemanager_email: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    rncasemanager_fax: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    rncasemanager_address: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    rncasemanager_city: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    rncasemanager_state: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    rncasemanager_zipcode: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    rncasemanager_company: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    status: String,
    updateddate: Date,
    updatedby: String
});
rncasemanagerSchema.set('toJSON', {
    getters: true,
    setters: true
});
rncasemanagerSchema.set('toObject', {
    getters: true,
    setters: true
});

var providerSchema = new Schema({
    provider_firstname: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    provider_lastname: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    provider_telephoneno: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    provider_extension: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    provider_email: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    provider_company: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    status: String,
    updateddate: Date,
    updatedby: String
});
providerSchema.set('toJSON', {
    getters: true,
    setters: true
});
providerSchema.set('toObject', {
    getters: true,
    setters: true
});


var medicalhistorySchema = new Schema({
    status: {
        type: String,
        set: setStatusCurrent
    },
    updateddate: Date,
    updatedby: String,
    shgeneralpriorhealthradio: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    shgeneralhealthcontricheck: [],
    shgeneralhealthontritextother: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },

    shgeneralhealthpriorsurgeryradio: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    shgeneralhealthpriorsugeycheck: [],
    shgeneralhealthpriorsurgerytextother: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },

    shcurrentmedicationradio: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    shcurrentmedications: [],
    shcurrentmedicationsothertext: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },

    shknownallergiesNonecheck: [],
    shknownallergiescheck: [],
    shknownallergiesOthercheck: [],
    shknownallergiesOthercheckTextarea: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    shknownallergiesothertext: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },

    shpriorillnessradio: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    shgeneralreviewpriorcheck: [],
    shgeneralconstitutionalcheck: [],
    negativeshgeneralconstitutionalcheck: [],
    shgeneralreviewpriorothertext: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    shgeneraleyescheck: [],
    shgeneraleyesothertext: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    shgeneralthroatcheck: [],
    shgeneralthroatothertext: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    shgeneralcardiovascularcheck: [],
    shgeneralcardiovascularothertext: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    shgeneralrespiratorycheck: [],
    shgeneralrespiratoryothertext: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    shgeneralgastrointestinalcheck: [],
    shgeneralgastrointestinalothertext: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    shgeneralgenitourinary: [],
    shgeneralgenitourinaryothertext: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    shgeneralmusculoskeletalcheck: [],
    shgeneralmusculoskeletalothertext: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    shgeneralskincheck: [],
    shgeneralskinothertext: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    shgeneralneurologicalcheck: [],
    shgeneralneurologicalothertext: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    shgeneralpsychiatric: [],
    shgeneralpsychiatricothertext: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    shgeneralendocrinecheck: [],
    shgeneralendocrineothertext: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    shgeneralhematologicalcheck: [],
    shgeneralhematologicalothertext: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    },
    shgeneralallergiccheck: [],
    shgeneralallergicothertext: {
        type: String,
        get: encrypDecrypt.decryptText,
        set: encrypDecrypt.encryptText
    }
});
medicalhistorySchema.set('toJSON', {
    getters: true,
    setters: true
});
medicalhistorySchema.set('toObject', {
    getters: true,
    setters: true
});




var shSchema = new Schema({
    status: {
        type: String,
        set: setStatusCurrent
    },
    updateddate: Date,
    updatedby: String,
    SHrdoMaritalStatus: {
        type: String
    },
    SHrdoEmploymentStatus: {
        type: String
    },
    SHchkOccupationalHistory: [],
    chkOccupationalHistoryOtherTextarea: {
        type: String
    },
    chkCaffeineNegative: [],
    chkCaffeine: [],
    txtCaffeine: {
        type: String,
        trim: true
    },
    chkStreetDrug: [],
    txtStreetDrug: {
        type: String,
        trim: true
    },
    chkTobacco: [],
    txtTobacco: {
        type: String,
        trim: true
    },
    chkAlcohol: [],
    txtAlcohol: {
        type: String,
        trim: true
    },
    shfreedataentry: {
        type: String
    },
    SHrdoLevelOfEducation: {
        type: String
    },
    SHrdoLevelOfEducationtextA: {
        type: String
    },
    rdoSecondJobs: {
        type: String
    },
    rdoSecondJobsTextarea: {
        type: String
    },
    rdoSelfEmployment: {
        type: String
    },
    rdoSelfEmploymentTextarea: {
        type: String
    },
    rdoMilitaryService: {
        type: String
    },
    rdoMilitaryServiceTextarea: {
        type: String
    },
    chkHobbiesNone: [],
    chkHobbies: [],
    chkHobbiesOtherTextarea: {
        type: String
    }
});
shSchema.set('toJSON', {
    getters: true,
    setters: true
});
shSchema.set('toObject', {
    getters: true,
    setters: true
});




/**
 * Patient Schema
 */
var patientSchema = new Schema({
    practicename: String,
    confirmed: {
        type: Boolean,
        default: true
    },
    createdFromLandingPage: {
        type: Boolean,
        default: false
    },
    recentviews: [{
        viewedby: String,
        vieweddate: Date
    }],
    basicinformation: [basicinformationschema],
    contactinformation: [contactSchema],
    address: [addressSchema],
    demographics: [demographicsSchema],
    occupation: [occupationSchema],
    emergencycontactinfo: [emergencycontactinfoSchema],
    createddate: Date,
    createdby: String,
    updateddate: Date,
    updatedby: String,
    patientrecordno: String,
    state: String,
    injury: [{
        injurydata: {
            injuryinformation: [injuryinformationSchema],
            communication: {
                patientcommunicationcomment: String,
                admincommunicationcomment: String,
                diagnostictesting: String,
                othernotes: String
            },
            viewinformation: [{
                viewdate: Date,
                viewby: String
            }],
            locationaddressinjury: [locationaddressinjurySchema],
            acceptedbodyparts: [{
                injuredbodypart: [acceptedbodypartsinjuredbodypartSchema],
                //employeehandedness: String,
                status: String,
                updateddate: Date,
                updatedby: String
            }],

            employer: [injuryemployerSchema],
            employment: [injuryemploymentSchema],
            employeraddress: [employeraddressSchema],
            employercontact: [employercontactSchema],
            insurance: [injuryinsuranceSchema],
            claimsadjuster: [injuryclaimsadjusterSchema],
            billreview: [injurybillreviewSchema],
            utilizationreview: [injuryUtilizationReviewSchema],
            applicantattorney: [injuryapplicantattorneySchema],
            defenseattorney: [defenseattorneySchema],
            rncasemanager: [rncasemanagerSchema],
            provider: [providerSchema],
            injuryreportid: Schema.Types.ObjectId,
            createddate: String,
            createdtime: String,
            createdby: String,
            updateddate: Date,
            updatedby: String,
            athena_insurancepackageid: {
                type: Number,
                default: 0
            }, // Athena changes      
            athena_insuranceid: {
                type: Number,
                default: 0
            }, // Athena changes
        }
    }],

    medicalhistory: [medicalhistorySchema],
    sh: [shSchema],
    athena_practiceid: {
        type: Number,
        default: 0
    }, // Athena changes 
    athena_patientid: {
        type: Number,
        default: 0
    }, // Athena changes 
    athena_departmentid: {
        type: Number,
        default: 0
    } // Athena changes 		
});

mongoose.model('Patient', patientSchema);