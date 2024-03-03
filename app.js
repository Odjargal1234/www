// API -> tusgailan hadgalsan medeellig holbogch
// fetch() -> api ruu huselt ywuulna 
// promise -> ndd hariu irne gsn amlalt
// .then() -> promise
// response -> 200 : approved, 404,300,500 : error
// json() -> zambraagui medeellig tsegtstei gargj irne
fetch('https://fakestoreapi.com/products').then(
    response=> response.json()
).then(
    product =>{
        console.log(product);
        console.log(product[19].rating.rate);
    }
)
var input = document.getElementsByTagName('input')[0];
var country = document.querySelector(".name");
var temp = document.querySelector(".temp");
var desc = document.querySelector(".desc");
var speed = document.querySelector(".speed");
function srch(){
    var city = input.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=9ac1f5c2d6508db3c616a0d1f80a08fd`).then(
    response=>response.json()
).then(
    data => {
        console.log(data);
        console.log(data.name);
        country.innerText= data.name;
        temp.innerText= data.main.temp;
        desc.innerText= data.weather[0].description;
        speed.innerText= data.wind.speed;
        console.log(data.wind.speed);
        console.log(data.main.temp);
        console.log(data.weather[0].description);
        document.getElementsByTagName('img')[0].style.width="250px";
        document.getElementsByTagName('img')[0].style.width="250px";
        document.getElementsByTagName('img')[0].style.width="250px";
        document.getElementsByTagName('img')[0].style.width="250px";
        document.getElementsByTagName('img')[0].style.width="250px";
        switch(data.weather[0].main){
            case "Clouds":
                document.getElementsByTagName('img')[0].src="cloud.png";
                break;
            case "Rain":
                document.getElementsByTagName('img')[0].src="rain.png";
                break;
            case "mist":
                document.getElementsByTagName('img')[0].src="mist png";
                break;
            case "clear":
                document.getElementsByTagName('img')[0].src="clear.png";
                break;
            case "snow":
                document.getElementsByTagName('img')[0].src="snow.png";
                break;
        }
    }
);
}