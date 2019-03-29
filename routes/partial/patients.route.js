const express = require('express');
const patientRouter = express.Router();

const patientsCtrl = require('../../controllers/patients.controller');

        patientRouter.get('/list',function(req,res){
            patientsCtrl.ListTestimonials(req,res);
        })
        patientRouter.get('/listPatients',function(req,res){
            patientsCtrl.ListPatients(req,res);
        })

        module.exports = patientRouter;
