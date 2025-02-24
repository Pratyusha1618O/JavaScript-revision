// https://api.weatherapi.com/v1/current.json?key=14442cab8be047b1a7245234240805&q=Kolkata&aqi=yes

const btn = document.getElementById("searchBtn")
const input = document.getElementById("cityInput")
const cityName = document.getElementById("city")
const time = document.getElementById("time")
const temp = document.getElementById("temp")

async function getData(cityName){ // takes city name, fetch reports, returns json
    const promise = await fetch(`https://api.weatherapi.com/v1/current.json?key=14442cab8be047b1a7245234240805&q=${cityName}&aqi=yes`);

    return promise.json()
}


btn.addEventListener('click', async()=>{
    const value = input.value;
    const result = await getData(value); // calling getData function, It calls API and fetch data

    cityName.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`;
    time.innerText = result.location.localtime;
    temp.innerText = result.current.temp_c;
})