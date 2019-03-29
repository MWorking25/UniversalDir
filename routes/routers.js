const express = require('express'),
      app = express();
        
    //   Route files declaration
    const chemRoutes = require('../Projects/Chem/chem.route');

    // Accessing routes apis
    var apiChem = app.use('/Chem',chemRoutes)

    module.exports = apiChem;
