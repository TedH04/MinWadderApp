class WeatherData {
	constructor(data) {
		this.location = data.location.name;
		this.temperature = data.current.temp_c;
		this.forecastdate = data.forecast.forecastday[1].date;
		this.forecast = data.forecast.forecastday[1].day.avgtemp_c;
		this.forecastmin = data.forecast.forecastday[1].day.mintemp_c;
		this.forecastmax = data.forecast.forecastday[1].day.maxtemp_c;
		this.forecastIcon = data.forecast.forecastday[1].day.condition.icon;
		this.forecastInfo = data.forecast.forecastday[1].day.condition.text;
		this.forecastdate2 = data.forecast.forecastday[2].date;
		this.forecast2 = data.forecast.forecastday[2].day.avgtemp_c;
		this.forecast2min = data.forecast.forecastday[2].day.mintemp_c;
		this.forecast2max = data.forecast.forecastday[2].day.maxtemp_c;
		this.forecast2Icon = data.forecast.forecastday[2].day.condition.icon;
		this.forecast2Info = data.forecast.forecastday[2].day.condition.text;
		this.weatherCond = data.current.condition.icon;
		/*this.forecastdate3 = data.forecast.forecastday[3].date;
		this.forecast3 = data.forecast.forecastday[3].day.avgtemp_c;*/
	}
}

export default WeatherData;
