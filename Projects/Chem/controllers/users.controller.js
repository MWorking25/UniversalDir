const logger = require('../config/logger'),
    mongoose = require('mongoose'),
    jwt = require('jsonwebtoken'),
    express = require('express'),
    connection = require('../config/connection'),
    crypto = require('crypto'),
    app = express();


var encryptionKey = process.env.CHEM_ENCRYPTED_KEY;

app.set('superSecret', process.env.CHEM_JWT_SECRET);

encrypt = function (text) {

    if (text === null || typeof text === 'undefined') {
        return text;
    };
    var cipher = crypto.createCipher('aes-256-cbc', encryptionKey);
    var crypted = cipher.update(text, 'utf8', 'hex');
    crypted += cipher.final('hex');

    return crypted;
};

exports.listSalespersons = function (req, res) {
    connection.Connect();
    salespersons.find({
        status: "active"
    }).exec((err, result) => {
        if (err) {
            logger.writeLogs({
                path: "users.controller/listSalespersons",
                line: "16",
                message: err
            }, 'error');
            res.send({
                status: 0,
                message: "Somthing went wrong"
            });
            connection.disconnect();
        } else {
            res.send(result);
            connection.disconnect();
        }
    });

};

exports.AuthenticateUser = function (req, res) {
    var hashedString = encrypt(req.body.password);
    connection.Connect();
    user.find({
        'practice.name': req.body.practicename,
        'practice.status': "active",
        'username': req.body.username,
        'hashedString': hashedString
    }, {
        practice: 1,
        username: 1
    }).exec((err, result) => {
        if (err) {
            logger.writeLogs({
                path: "users.controller/listSalespersons",
                line: "16",
                message: err
            }, 'error');
            res.send({
                status: 0,
                message: "Somthing went wrong"
            });
            connection.disconnect();
        } else {

            if (result.length === 1) {
                result[0].practice = result[0].practice.filter((value) => {
                    return value.name === req.body.practicename;
                });
                var tokenpayload = {
                    id: result[0]._id
                };

                var token = jwt.sign(tokenpayload, app.get('superSecret'), {
                    expiresIn: 86400 // expires in 24 hours = 86400
                });

                var lastlogintoken = jwt.sign({
                    practicename: result[0].practice[0].name,
                    username: result[0].username
                }, app.get('superSecret'), {
                    expiresIn: 86400 // expires in 24 hours = 86400
                });

             

                res.cookie('token', token, {
                    httpOnly: true
                });

                var responsePayload = {
                    token: token,
                    lastlogin: lastlogintoken,
                    practicename: result[0].practice[0].name,
                    athena_practiceid: result[0].practice[0].athena_practiceid,
                    role: result[0].practice[0].role,
                    rolename: result[0].practice[0].rolename,
                    username: result[0].username,
                }

                res.json(responsePayload);
                connection.disconnect();
            }
        }
    });

};


const responedObj = {
  "toppings": [
    {
      "id": 1,
      "name": "anchovy"
    },
    {
      "id": 2,
      "name": "bacon"
    },
    {
      "id": 3,
      "name": "basil"
    },
    {
      "id": 4,
      "name": "chili"
    },
    {
      "id": 5,
      "name": "mozzarella"
    },
    {
      "id": 6,
      "name": "mushroom"
    },
    {
      "id": 7,
      "name": "olive"
    },
    {
      "id": 8,
      "name": "onion"
    },
    {
      "id": 9,
      "name": "pepper"
    },
    {
      "id": 10,
      "name": "pepperoni"
    },
    {
      "id": 11,
      "name": "sweetcorn"
    },
    {
      "id": 12,
      "name": "tomato"
    }
  ],
  "pizzas": [
    {
		"id": 1,
      "name": "Blazin' Inferno",
      "toppings": [
        {
          "id": 10,
          "name": "pepperoni"
        },
        {
          "id": 9,
          "name": "pepper"
        },
        {
          "id": 3,
          "name": "basil"
        },
        {
          "id": 4,
          "name": "chili"
        },
        {
          "id": 7,
          "name": "olive"
        },
        {
          "id": 2,
          "name": "bacon"
        }
      ],
      
    },
    {
		"id": 2,
      "name": "Seaside Surfin'",
      "toppings": [
        {
          "id": 6,
          "name": "mushroom"
        },
        {
          "id": 7,
          "name": "olive"
        },
        {
          "id": 2,
          "name": "bacon"
        },
        {
          "id": 3,
          "name": "basil"
        },
        {
          "id": 1,
          "name": "anchovy"
        },
        {
          "id": 8,
          "name": "onion"
        },
        {
          "id": 11,
          "name": "sweetcorn"
        },
        {
          "id": 9,
          "name": "pepper"
        },
        {
          "id": 5,
          "name": "mozzarella"
        }
      ],
      
    },
    {
		"id": 3,
      "name": "Plain Ol' Pepperoni",
      "toppings": [
        {
          "id": 10,
          "name": "pepperoni"
        }
      ],
      
    }
  ]
};


exports.ListPizzas = function(req,res)
{
	res.send(responedObj.pizzas);
};

exports.ListToppings = function(req,res)
{
	res.send(responedObj.toppings);
};

exports.getselectedPizza = function(req,res)
{
	console.log(req.params);
	var result = responedObj.pizzas.filter((value)=>{
		return value.id === parseInt(req.params.id,10);
	});
	
	console.log(result);
	res.send(result);
}

