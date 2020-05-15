var startDate = moment().subtract(10, 'days').calendar();
var day1 = moment().add(1, "days").format("MMM Do YY");
var day2 = moment().add(2, "days").format("MMM Do YY");
var day3 = moment().add(3, "days").format("MMM Do YY");
var day4 = moment().add(4, "days").format("MMM Do YY");
var day5 = moment().add(5, "days").format("MMM Do YY");
$(document).ready(function(){
    console.log("dia")
})

$("#basic-text1").on("click",function(event){
    event.preventDefault();
    var cityInput = $("input").val();
    var allcitys = [];

    allcitys = JSON.parse(localStorage.getItem("allcitys")) || [];
    allcitys.push(cityInput);
    localStorage.setItem("allcitys", JSON.stringify(allcitys));

    showWeather(cityInput);
});


function showWeather(cityInput){
 
    $("#dailyW").empty();
    $("#fiveDay").empty();
    $("#day1").empty();
    $("#day2").empty();
    $("#day3").empty();
    $("#day4").empty();
    $("#day5").empty();

var oneDay = "http://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&apikey=e816233b6bb160fb86ae3c6e5745a727" 

$.ajax({
    url: oneDay,
    method: "GET",
    }).then(function(response) {
      console.log(response)
      var iconUrl1 = "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png";
      var iconUrl2 = "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png";
      var iconUrl3 = "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png";
      var iconUrl4 = "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png";
      var iconUrl5 = "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png";
   
      


});








}
