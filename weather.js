class WEATHER{
    constructor(){
        this.API_KEY='f1398d09eff269d2db62132848cc8b7b';
    }

    async getWeather(city,country){
        const weatherResponse= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${this.API_KEY}`);

        const weatherData= await weatherResponse.json();

        return weatherData;
    }
}