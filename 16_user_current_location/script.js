const btn = document.getElementById('btn')

async function getData(lat, long){
    const promise = await fetch(`https://api.weatherapi.com/v1/current.json?key=14442cab8be047b1a7245234240805&q=${lat},${long}&aqi=yes`);
    return promise.json()
}

async function getLocation(position){ //getting current location, latutude and longitude
    console.log(position)

    const result = await getData(position.coords.latitude, position.coords.longitude) // now fetching weather report according to current location
    console.log(result)
}

function failedToGet(){ // if not fetched , show an error msg
    console.log("There was some issue")
}

btn.addEventListener('click', async()=>{
    navigator.geolocation.getCurrentPosition(getLocation, failedToGet)  // getCurrentPosition have 2 parameters: success, error
})