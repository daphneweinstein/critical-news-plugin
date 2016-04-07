
var self = require("sdk/self");
var URL = require('sdk/url').URL;
var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
//var thing = 'document.body.innerHTML = "<h1>localhost:5000</h1>";'
var button = buttons.ActionButton({
  id: "mozilla-link",
  label: "Visit Mozilla",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onClick: handleClick
});

function handleClick(state) {
  //http://stackoverflow.com/questions/11594576/getting-current-browser-url-in-firefox-addon
var idea = URL(tabs.activeTab.url);
  // console.log(idea);
tabs.open( "localhost:5000/" + idea);
}
//ZOMGsocool
function dummy(text, callback) {
  callback(text);
}

exports.dummy = dummy;