class UI{

    displayWeather(weather,outputWeather,code){
        const output=document.getElementById('displayWeather');
        output.innerHTML=`
            <h1 class="text-center">Current Weather <i class="fas fa-cloud-sun"></i> </h1>
            <div class="row mt-3">
                <div class="col-sm-6">
                    <div class="text-center">
                        <div id="weather-img">

                        </div>
                        <h1 class="display-1">${Math.floor((weather.main.temp)-273)}<sup>o</sup>C</h1>
                        <span>${outputWeather} / ${weather.wind.speed} km/h <i class="fas fa-wind"></i></span>
                    </div>
                </div>
                <div class="col-sm-6 text-center mt-4">
                    <h4 class="my-4">Humidity  <i class="fas fa-tint"></i> : ${weather.main.humidity}%</h4>
                    <h4 class="mb-4">Pressure  <i class="fas fa-tachometer-alt"></i> : ${weather.main.pressure} mmHg</h4>
                    <h4 class="mb-4">Temp Max  <i class="fas fa-thermometer-full"></i> : ${Math.floor((weather.main.temp_max)-273)}<sup>o</sup>C</h4>
                    <h4 class="mb-4">Temp Min  <i class="fas fa-thermometer-empty"></i> : ${(Math.floor(weather.main.temp_min)-273)}<sup>o</sup>C</h4>
                </div>
            </div>
        `;

        // background video
        const clearday=['01d','02d'];
        const clearnight=['01n','02n'];
        const rain=['09d','09n','10d','10n'];
        const thunder=['11d','11n'];
        const fog=['50d','50n'];
        const snow=['13d','13n'];
        const cloud=['03d','03n','04d','04n'];

        const background=document.getElementById('background');

        clearday.forEach((current)=>{
            if(code.indexOf(current)!==-1){
                document.getElementById('weather-img').innerHTML=`<img src="images/sunny.png">`;
                background.style.background="url('gifs/clear.gif')";
                background.style.backgroundRepeat="no-repeat";
                background.style.backgroundSize="cover";
                
            }
        })
        clearnight.forEach((current)=>{
            if(code.indexOf(current)!==-1){
                document.getElementById('weather-img').innerHTML=`<img src="images/moon.png">`;
                background.style.background="url('gifs/night.gif')";
                background.style.backgroundRepeat="no-repeat";
                background.style.backgroundSize="cover";
                
            }
        })

        rain.forEach((current)=>{
            if(code.indexOf(current)!==-1){
                document.getElementById('weather-img').innerHTML=`<img src="images/rain.png">`;
                background.style.background="url('gifs/rain.gif')";
                background.style.backgroundRepeat="no-repeat";
                background.style.backgroundSize="cover";
                
            }
        })

        thunder.forEach((current)=>{
            if(code.indexOf(current)!==-1){
                document.getElementById('weather-img').innerHTML=`<img src="images/storm.png">`;
                background.style.background="url('gifs/rain.gif')";
                background.style.backgroundRepeat="no-repeat";
                background.style.backgroundSize="cover";
                
            }
        })

        fog.forEach((current)=>{
            if(code.indexOf(current)!==-1){
                document.getElementById('weather-img').innerHTML=`<img src="images/wind.png">`;
                background.style.background="url('gifs/fog.gif')";
                background.style.backgroundRepeat="no-repeat";
                background.style.backgroundSize="cover";
                
            }
        })

        snow.forEach((current)=>{
            if(code.indexOf(current)!==-1){
                document.getElementById('weather-img').innerHTML=`<img src="images/snowflake.png">`;
                background.style.background="url('gifs/snow.gif')";
                background.style.backgroundRepeat="no-repeat";
                background.style.backgroundSize="cover";
                
            }
        })

        cloud.forEach((current)=>{
            if(code.indexOf(current)!==-1){
                document.getElementById('weather-img').innerHTML=`<img src="images/clouds.png">`;
                background.style.background="url('gifs/cloud.gif')";
                background.style.backgroundRepeat="no-repeat";
                background.style.backgroundSize="cover";
                
            }
        })
        

    }


    alert(msg,classes){
        // create div
        const alertDiv=document.createElement('div');
        
        // add classes
        alertDiv.className=classes;

        // add text node
        alertDiv.innerHTML=`<i class="fas fa-exclamation-triangle mr-2"></i>${msg}`;

        // insert
        document.querySelector('.content').appendChild(alertDiv);

        // set time out
        setTimeout(()=>{
            document.querySelector('.alert').remove();
        },2000);
    }
}
