class WeatherAPI {
	constructor() {
		this.API_KEY = '47270a29d4a4425f9f985327231901';
	}

	async getWeatherByCountry(country) {
		const response = await fetch(
			`http://api.weatherapi.com/v1/forecast.json?key=${this.API_KEY}&q=${country}&days=6`
		);
		const data = await response.json();
		return data;
	}
}

export default WeatherAPI;
