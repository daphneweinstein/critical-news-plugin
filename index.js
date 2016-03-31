
var self = require("sdk/self");

var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");

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
  tabs.open("http://www.mozilla.org/");
}
//ZOMGsocool
function dummy(text, callback) {
  callback(text);
}

exports.dummy = dummy;


(function() {
    // Create an nsILocalFile for the Node executable
    var file = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsILocalFile);  
    file.initWithPath("/components/node");

    // Check for Node executable
    if (!file.exists()) {
        // Node executable is missing
        return;
    };

    // Create an nsIProcess to manage the Node executable
    var process = Components.classes["@mozilla.org/process/util;1"].createInstance(Components.interfaces.nsIProcess);
    process.init(file);
})();