const apikey="3067259701e947f7593d9d00caf2ae84";
const card=document.querySelector(".card");
document.querySelector(".weatherForm").addEventListener("submit", async event=>{
    event.preventDefault();
    await fetchData();
})
async function fetchData(){
    const cityName=document.getElementById("inputBox").value.toLowerCase();
    if(cityName){
    try{
        const wetherData=await getWetherData(cityName);
        displayWether(wetherData);
    }
    catch(error){
        console.error(error);
        displayError("Could not Fetch wether Data");
    }}
    else{
        displayError("Please enter a city");
    }
}
async function getWetherData(city){
const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
const response= await fetch(apiUrl);
if(!response.ok){
    throw new Error("Could not fetch the Data");
}
return await response.json();
}

function displayWether(data){
const{ name: city,main:{temp,humidity},weather:[{description,id}]}=data;
document.querySelector(".cityDisplay").textContent=city;
document.querySelector(".tempDisplay").textContent=`${Math.round(temp)}°C`;
document.querySelector(".humidityDisplay").textContent=`${humidity}%`;
document.querySelector(".descDisplay").textContent=description;
card.classList.remove("hot","cold","rainy");
if(temp>28)card.classList.add("hot");
else if(temp<15) card.classList.add("cold");
else if(id>=200&& id<600){
    card.classList.add("rainy");
}
const emojiDisplay=document.querySelector(".wetherEmoji");

if (id >= 200 && id < 300) emojiDisplay.textContent = "⛈️";      
else if (id >= 300 && id < 600) emojiDisplay.textContent = "🌧️"; 
else if (id >= 600 && id < 700) emojiDisplay.textContent = "❄️"; 
else if (id === 800) emojiDisplay.textContent = "☀️";            
else emojiDisplay.textContent = "☁️";
document.querySelector(".errorDisplay").style.display="none";
}
function displayError(message){
const errorDisplay=document.querySelector(".errorDisplay");
errorDisplay.textContent=message;
errorDisplay.style.display="block";
}