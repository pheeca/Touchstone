var fs = require('fs');
const path = require('path');
const dev = require('./js/framework/main/dev');
const stackFactory = require('./js/framework/main/stackFactory');
const Module =  require('./js/framework/modelling/module');
const Entity =  require('./js/framework/modelling/entity');
const setimmediate = require("setimmediate");

// All of the Node.js APIs are available in the preload process.

global.setimmediate = setimmediate;

// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  } 
  
  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})


window.addEventListener('loadschema', function (e) { 
  window.schema = JSON.parse(fs.readFileSync(path.join(__dirname, 'storage/schema.json'), 'utf8'));
 }, false);

 
window.addEventListener('saveschema', function (e) { 
  fs.writeFileSync(path.join(__dirname, 'storage/schema.json'), JSON.stringify(window.schema,null,4));
 }, false);


 window.Dev = dev;
 window.Stack = stackFactory.resolveStack;
 window.Module = Module;
 window.Entity = Entity;
 window.screen = {};

 process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = '1';

 var _setImmediate = setImmediate;
 
process.once('loaded', function() {
  global.setImmediate = _setImmediate;
});