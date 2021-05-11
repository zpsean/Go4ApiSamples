// the reserved word "funcParams" is to pass value from caller

var param = funcParams;

//

function addDaysF(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

// Date.prototype.addDays = function(days) {
//     var date = new Date(this.valueOf());
//     date.setDate(date.getDate() + days);
//     return date;
// }

function curDateTime(offSet) {
       // var d = new Date();
       // d.addDays(2)

       var dt = new Date();
       var d = addDaysF(dt, offSet);

       var year = d.getFullYear();
       var month = d.getMonth() + 1;
       var date = d.getDate();
       var day = d.getDay();
       var curDateTime = year;
       if (month > 9)
          curDateTime = curDateTime + "-" + month;
       else
          curDateTime = curDateTime + "-0" + month;
       if (date > 9)
          curDateTime = curDateTime + "-"  + date;
       else
          curDateTime = curDateTime + "-0" + date;
       return curDateTime;
 }


var offSet = 0

if (param.length > 0) {
  offSet = parseInt(param)
}

curDateTime(offSet);
