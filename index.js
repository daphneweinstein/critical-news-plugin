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



// taken from the amazone example page:
// http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#putObject-property

var params = {
    Bucket: 'STRING_VALUE', /* required */
    Key: 'STRING_VALUE', /* required */
    ACL: 'private | public-read | public-read-write | authenticated-read | aws-exec-read | bucket-owner-read | bucket-owner-full-control',
    Body: new Buffer('...') || 'STRING_VALUE' || streamObject,
    CacheControl: 'STRING_VALUE',
    ContentDisposition: 'STRING_VALUE',
    ContentEncoding: 'STRING_VALUE',
    ContentLanguage: 'STRING_VALUE',
    ContentLength: 0,
    ContentMD5: 'STRING_VALUE',
    ContentType: 'STRING_VALUE',
    Expires: new Date || 'Wed Dec 31 1969 16:00:00 GMT-0800 (PST)' || 123456789,
    GrantFullControl: 'STRING_VALUE',
    GrantRead: 'STRING_VALUE',
    GrantReadACP: 'STRING_VALUE',
    GrantWriteACP: 'STRING_VALUE',
    Metadata: {
	someKey: 'STRING_VALUE',
	/* anotherKey: ... */
    },
    RequestPayer: 'requester',
    SSECustomerAlgorithm: 'STRING_VALUE',
    SSECustomerKey: new Buffer('...') || 'STRING_VALUE',
    SSECustomerKeyMD5: 'STRING_VALUE',
    SSEKMSKeyId: 'STRING_VALUE',
    ServerSideEncryption: 'AES256 | aws:kms',
    StorageClass: 'STANDARD | REDUCED_REDUNDANCY | STANDARD_IA',
    WebsiteRedirectLocation: 'STRING_VALUE'
};
s3.putObject(params, function(err, data) {
	if (err) console.log(err, err.stack); // an error occurred
	else     console.log(data);           // successful response
    });




exports.dummy = dummy;
