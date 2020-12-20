class TIME{
    constructor(){
        this.API_KEY='00272d542443436b820f83c24dfc3ad5';
    }

    async getTime(city,country){
        const timeResponse= await fetch(`https://timezone.abstractapi.com/v1/current_time?api_key=${this.API_KEY}&location=${city},${country}`);

        const timeData= await timeResponse.json();

        return timeData;
    }
}