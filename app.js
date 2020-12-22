// Object for TIME class
const time= new TIME();

// Object for WEATHER class
const weather= new WEATHER();

// Object for UI class
const ui= new UI();

// global variables
const city=document.getElementById('city'),
      country=document.getElementById('country'),
      slider=document.getElementById('slider'),
      background=document.getElementById('background'),
      displayWeather=document.getElementById('displayWeather'),
      place=document.getElementById('place'),
      time1=document.getElementById('time');


document.getElementById('search').addEventListener('click',(e)=>{

    // getting values of inputs
    const cityName=city.value;
    const countryName=country.value;

    // check for empty
    if(cityName!=='' && countryName!=='')
    {   

        // getting time
        time.getTime(cityName,countryName)
            .then(timeData=>{
                    time1.textContent = (timeData.datetime).slice(11,16);
            })

        // getting weather
        weather.getWeather(cityName,countryName)
            .then(weatherData=>{
                // enable output div
                slider.style.display='none';
                background.style.display='block';
                displayWeather.style.display='block';
                // displaying place
                place.innerText=`${cityName.toUpperCase()} , ${countryName.toUpperCase()}`;
                weatherData.weather.forEach((current)=>{
                    outputImgCode=current.icon;
                    outputWeather=current.description;
                })
                ui.displayWeather(weatherData,outputWeather,outputImgCode);
            })
            .catch(()=>{
                slider.style.display='block';
                city.value='';
                country.value='';
                place.innerText='';
                displayWeather.style.display='none';
                ui.alert('Invalid City or Country.','alert alert-warning');
            })
        
    }else{
        ui.alert('Please fill all the fields.','alert alert-warning');
    }
    

    e.preventDefault();
})


document.getElementById('clear').addEventListener('click',(e)=>{

    slider.style.display='none';
    city.value='';
    country.value='';
    background.style.display='none';
    background.style.background='';
    displayWeather.innerHTML='';
    place.innerText='';
    time1.innerText='';
    displayWeather.style.display='none';
    

    e.preventDefault();
})