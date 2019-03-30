const express = require('express');
const ChemRouter = express.Router();
const authUser = require('./security/UserAuth');
const userCtrl = require('./controllers/users.controller'),
      patientCtrl = require('./controllers/patients.controller'),
      noteCtrl = require('./controllers/notes.controller');

        noteCtrl.get('/SaveNote',function(req,res){
            authUser(req, res);noteCtrl.SaveNote(req,res);
        })
        ChemRouter.get('/list',function(req,res){
            userCtrl.ListUsers(req,res);
        })
        
        ChemRouter.get('/listSalespersons',function(req,res){
            userCtrl.listSalespersons(req,res);
        })

        ChemRouter.post('/Authenticate',function(req,res){
            userCtrl.AuthenticateUser(req,res);
        })
		
		ChemRouter.get('/ListPizzas/',function(req,res){
            userCtrl.ListPizzas(req,res);
        })
		
		ChemRouter.get('/getselectedPizza/:id',function(req,res){
            userCtrl.getselectedPizza(req,res);
        })
		
		ChemRouter.get('/ListToppings/',function(req,res){
            authUser(req, res);userCtrl.ListToppings(req,res);
        })

        module.exports = ChemRouter;
