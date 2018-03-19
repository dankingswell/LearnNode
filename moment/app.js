// moment npm init
// npm install moment, use --save 
// after to save reference to package .json
// npm install without name will use package .json to install all dependancies

// --save-dev will create a dev only dependancy
// npm update will update all packages that have been allowed to changes
// ^ allows for minor updates  ~ patches only. in package .Json
// nodemon stops having to reset node when making changes.


var moment = require('moment');
console.log(typeof moment());