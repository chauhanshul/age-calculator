// function submitForm(){
//   document.querySelector(".form-class").submit();
// }
var daysInGivenMonth;
var day;
var month;
var year;
const now = new Date();
const month_table = [1,2,3,4,5,6,7,8,9,10,11,12];

var current_date=now.getDate();
var current_month=month_table[now.getMonth()];
var current_year=now.getFullYear();


var days;
var months;
var years;

function storeValue(event) {
  event.preventDefault();
  day = document.getElementById("day").value;
  month = document.getElementById("month").value;
  year = document.getElementById("year").value;
  daysInGivenMonth = new Date(year,month,0).getDate();
  // alert(daysInGivenMonth);
  calculate();
  display();
}

  function calculate(){
    if(current_year>=year){
    years= current_year-year;
    // alert(years);
  }
  else{
    error_year();
  }

    if (month<=12) {
      if(year=current_year&&month>current_month){
        error_month();
      }
      else {
      if(current_month>=month){
        months=current_month-month;
        // alert(months);
      }
      else if(month>=current_month){
        months= 12-(month-current_month);
        years--;
        // alert(months);
      }
      else{
        error_month();
      }
    }

      }
    else if(month>12){
      error_month();
    }
    if(day<=daysInGivenMonth){
      if (current_date>=day) {
        days = current_date-day;
        // alert(days);
      }
      else if(day>=current_date){
        days = daysInGivenMonth- (day-current_date);
        // alert(days);
        months--;
      }
      else{
        error_date();
      }
    }
    else if(day>daysInGivenMonth){
      error_date();
    }



  }

function display(){
  document.querySelector(".variable-day").innerHTML=days;
  document.querySelector(".variable-month").innerHTML=months;
  document.querySelector(".variable-year").innerHTML=years;
}
function error_date(){
  document.querySelector(".date-error").classList.add("error-text");
  document.querySelector(".error-display").classList.remove("no-display");
  document.querySelector(".error-date").classList.add("error-box");
}

function error_month(){
  document.querySelector(".month-error").classList.add("error-text");
  document.querySelector(".error-display").classList.remove("no-display");
  document.querySelector(".error-month").classList.add("error-box");
}
function error_year(){
  document.querySelector(".year-error").classList.add("error-text");
  document.querySelector(".error-display").classList.remove("no-display");
  document.querySelector(".error-year").classList.add("error-box");
}
