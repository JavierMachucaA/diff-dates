const moment = require('moment');

/*let date = moment().format('DD-MM-YYYY');*/
let a = moment([2018, 9, 1]).diff(moment([2020, 0, 1]), 'months', true)
console.log(a); 

/*console.log(date);
console.log(dateMonthAsWord);*/