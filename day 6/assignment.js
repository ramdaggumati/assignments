//craete a XHR Object
var request = new XMLHttpRequest()
//open a request or initate request
request.open("GET","https://restcountries.com/v3.1/all")
//triger the request
request.send()
//server response
request.onload = function(){
    var result =  JSON.parse(request.response) 
    console.log(result);
    //Get all the countries from Asia continent /region using Filter function
    var region = result.filter((ele) => ele.region === "Asia");
    var region = region.map((ele)=>ele.name.common)
    console.log(region)
    // Get all the countries with a population of less than 2 lakhs using Filter function
    var pop_limit= result.filter((ele) => ele.population < 2000000);
    var  pop_limit= pop_limit.map((ele) => ele.name.common);
    console.log(pop_limit);
    // Print the following details name, capital, flag, using forEach function
    result.forEach((country) => {
        console.log("Name: " + country.name.common);
        console.log("Capital: " + country.capital);
        console.log("Flag: " + country.flags.png);
    });
    // Print the total population of countries using reduce function
    var pop =  result.reduce((accumulator , currentValue )=> accumulator+currentValue.population,0)
    console.log(pop)
    // Print the country that uses US dollars as currency.
    var dollarcountry = result.filter((ele)=> ele.currencies && ele.currencies.USD);
    var country = dollarcountry.map((ele)=> ele.name.common);
    console.log(country);

}