

// This based heavily on code from:
// https://developer.mozilla.org/en-US/Add-ons/SDK/Tutorials/Adding_a_Button_to_the_Toolbar
// which is just their demo for building a one-click app. Most of that code lingers around in this file;
// we essentially just changed the images and are redirecting to a different webpage

var self = require("sdk/self");
var URL = require('sdk/url').URL;
var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
//var thing = 'document.body.innerHTML = "<h1>localhost:5000</h1>";'
var button = buttons.ActionButton({
  id: "criticalnews-link",
  label: "Visit Critical NewsBot",
  icon: {
    "16": "./icon16two.png",
    "32": "./icon32.png",
    "64": "./icon64.png"
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