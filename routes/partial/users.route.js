const express = require('express');
const userRouter = express.Router();

const userCtrl = require('../../controllers/users.controller');

        userRouter.get('/list',function(req,res){
            userCtrl.ListUsers(req,res);
        })
        
        userRouter.get('/listSalespersons',function(req,res){
            userCtrl.listSalespersons(req,res);
        })

        userRouter.post('/Authenticate',function(req,res){
            userCtrl.AuthenticateUser(req,res);
        })
		
		userRouter.get('/ListPizzas/',function(req,res){
            userCtrl.ListPizzas(req,res);
        })
		
		userRouter.get('/getselectedPizza/:id',function(req,res){
            userCtrl.getselectedPizza(req,res);
        })
		
		userRouter.get('/ListToppings/',function(req,res){
            userCtrl.ListToppings(req,res);
        })

        module.exports = userRouter;
