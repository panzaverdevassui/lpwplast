const express = require('express');
const router = express.Router();

const controller = {};

controller.rubro0 = ((req, res) => {
  const id = 1;
  res.render('rubros', { id });
});

controller.rubro = ((req, res) => {
const { id } = req.params; 
res.render('rubros', { id });
});

controller.list = ( async (req, res) => {
const { id } = req.params; 
res.render('productos', { id });
});

controller.list1 = ( async (req, res) => {
const id  = '1'; 
res.render('productos', { id });  
});

controller.list2 = ( async (req, res) => {
  const { id } = req.params; 
  res.render('snippet', { id }); 
  });

controller.list3 = ( async (req, res) => {
  const id  = '1';  
  res.render('snippet', { id });  
  });

module.exports = controller;
