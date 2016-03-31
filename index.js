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


//taken from page 
AWS.config.update({accessKeyId: 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAjgD08K/C2L8T7k1TYktB
HvWmPJl+g8Q7TlmFnGdN7+EBygrj6VE5w86lprd9CaE8V1JkcQP23d5HG8mskfuj
YkWqTcTIAOZHsscd78YLHq9nxJIy3FXjFDJX8ArQO8MD1h7aAetizIg2QNNHT6IU
u/O/ineVMSCjJd2rGz9XytGL2fS6LJch727ldO4orfR9Q0qmYHdjfr7t4s/A2LfB
V8NY4ToPrPA010faekSvxOOmHQenmSD4ALdsVSRlBS5OxP0WRVFfmNl0/FksEnl2
I7rVRhhSI7rjdS+IfL5ANNCKfhxQiRbkgDkyr24jCGa8Pb0Leia/ODoFAk1rurUl
BwIDAQAB', secretAccessKey: 'MIIEogIBAAKCAQEAjgD08K/C2L8T7k1TYktBHvWmPJl+g8Q7TlmFnGdN7+EBygrj
6VE5w86lprd9CaE8V1JkcQP23d5HG8mskfujYkWqTcTIAOZHsscd78YLHq9nxJIy
3FXjFDJX8ArQO8MD1h7aAetizIg2QNNHT6IUu/O/ineVMSCjJd2rGz9XytGL2fS6
LJch727ldO4orfR9Q0qmYHdjfr7t4s/A2LfBV8NY4ToPrPA010faekSvxOOmHQen
mSD4ALdsVSRlBS5OxP0WRVFfmNl0/FksEnl2I7rVRhhSI7rjdS+IfL5ANNCKfhxQ
iRbkgDkyr24jCGa8Pb0Leia/ODoFAk1rurUlBwIDAQABAoIBAD9ti/rJ9xVLXAKw
RVN9W6wRe1xMD2eZyge4EucGeZhw/5SYgq6fmlaswe8SvGYFv+cdJUIZzDXT6B0w
WsWmCZeGmIg+IjvMoC/poqSL6EGfhZEW4GLsdg56Yi8VFWfsNpV4mFYNJsdG/Dy+
YnbeZbaCLIcT3O7hrh3mwlvcUkGD4rDyEk7Vt8KbJWyKs2hBK1A55yldLH7XcczC
bwHVQljkrxbN8r06iPpuK6dvSg6K4XOtfGfgUR/Y8GSz5QqRgfZjyn8firZqc1h6
1U2+1ahgpqn7qDwWGZ5oLyYhH5kzaf7E55FtHwUBFs2AtbKjYptnmY4ivj9tlKvO
rbl2RGECgYEA8GFtOJRmL6HyWAM1WWiKfZeCVW81hbcKdQ/eUxNr3oHvxR4j4YIp
FlroYCKA6oAE/4JvwYDIgVDaNHJiLWg6ywDVcE9UBYie+ipmO8GwTCackj8QbyFN
gOulY8vyx/+1qT7627htdNO87x+cvvc9lbLYlK428Ln+6sH/wRO53pcCgYEAlzsY
j8e2dIaIXfpJa/Xad28Uaf7IhLEmxpFMku1NvQ3tUsoMK8cxcTCnuwI8kIcf1ogh
9aHbw9PVNJ5BKCx0xhUaaLE+KhQZ5aKk8RAGo8GCAEurZ1qPIG+nxrGdTkMolPyA
XZxrnu6bfHZG/JTR5Z6cdvTTtGnJNBKSRL4WKxECgYEA7LhVEeH6W7AU8x19vSWZ
NKMuo6nXwG2IK83LuG4ozT+SesD6vsoqYix2KK3x3Hzj7ydpnNqRGeAgcoOuMV8y
ftW8W1STvrtTK7LzaKeOUP+5MsBOE9Js+6eUARpIZTJpmFlAO358tA8MQUQVXW4n
RLOSW6DQ0/Gmm1Me5OnjIdMCfzgetf6lHhAf3HsDZjuqAGhR0EGFSuPy2XDWepQL
e82sXWVblSipwq8+XwAG1HLNsgLqga+lYOhKs9PS5lsCJFNdgW9YVrlGvFV7Bbpv
OAeMx7FUY0b3VCW1SY1yW+2u/mBLU1dptIZGBW0qdy1EDKApO+bo86b/mqq4OY9I
+vECgYEAz9l0Qbhnq8HvZbA09nHqX0ogQxxm8NkOobbfzsb5/JzLUeaQO9IeQNdj
/gCvSFpJsGsVJKDOukBM2aPoF81ZllYh3e717FqV1/RHKxQIUBIntX4Q/k/S3qr9
dy0qGGdxS4G5ZXV6xgxZEt8rILYmUNSiOCzeuqLBp+piR/VT4cM='});

// taken from the amazone example page:
// http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#putObject-property

var params = {
    Bucket: 'helloworldannelise', /* required */
    Key: 'heyman', /* required */
    ACL: 'public-read-write',
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
