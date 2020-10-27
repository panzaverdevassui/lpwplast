const express = require('express'); 
const morgan = require('morgan');        
const path = require('path'); 
const app = express();             
// importing routes  
const productoRoutes = require('./routes/producto'); 
// settings
app.set('port', process.env.PORT || 3500);   
app.set('view engine', 'ejs');   
app.set('views', path.join(__dirname, 'views')); 
// middlewares                                   
app.use(morgan('dev'));            
app.use(express.urlencoded({extended: false})); 
app.use(express.json());
                          
// Global Variables       
app.use((req, res, next) => {            
    next();    
  });                 
                   
  // routes            
  app.use('/', productoRoutes);              
// Public statics files
app.use(express.static(path.join(__dirname, 'public')));

// starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
  });  