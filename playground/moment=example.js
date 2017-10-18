var moment = require('moment');

console.log(moment().format());

//January 1st 1970 12:00am => 0
//

var now = moment();
console.log('current timestamp', now.unix());

var timestamp = 1508340623;
var currentmoment = moment.unix(timestamp);

console.log('current moment', currentmoment.format());


console.log('current moment', currentmoment.format("dddd, MMMM Do YYYY, h:mm:ss a"));

console.log('current moment', currentmoment.format("MMMM Mo YYYY @ H:mm:ss A"));