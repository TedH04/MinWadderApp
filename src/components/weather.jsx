import React, {useState} from 'react';
import WeatherAPI from './WeatherAPI';
import WeatherData from './WeatherData';
import './weather.css';

function WeatherApp() {
	const [weatherData, setWeatherData] = useState(null);
	const [country, setCountry] = useState('stockholm');

	const weatherAPI = new WeatherAPI('47270a29d4a4425f9f985327231901');

	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = await weatherAPI.getWeatherByCountry(country);
		setWeatherData(new WeatherData(data));

		if (data.current.temp_c > 25) {
			document.body.style.background = '#da8625';
			document.body.style.transition = '1s';
		} else if (data.current.temp_c > 15) {
			document.body.style.background = '#ecc344';
			document.body.style.transition = '1s';
		} else {
			document.body.style.background = '#48b8e2';
			document.body.style.transition = '1s';
		}
	};

	return (
		<div className='weatherDiv'>
			<form onSubmit={handleSubmit}>
				<input
					className='textInput'
					type='text'
					placeholder='Enter a country'
					value={country}
					onChange={(e) => setCountry(e.target.value)}
				/>
				<button type='submit' className='submitButton'>
					Submit
				</button>
			</form>
			{weatherData && (
				<div className='forecastDiv'>
					<h2>Vädret i {weatherData.location}</h2>
					<p>
						Temperatur: {weatherData.temperature}°C
						<img src={weatherData.weatherCond} alt='' />
					</p>

					<h3>två dagar framöver</h3>
					<p>
						Date: {weatherData.forecastdate}
						<br />
						Info: {weatherData.forecastInfo}
						<br />
						Avg Temp: {weatherData.forecast}
						<br />
						Low: {weatherData.forecastmin}
						<br />
						High: {weatherData.forecastmax}
						<br />
						<img src={weatherData.forecastIcon} alt='' />
					</p>
					<p>
						Date: {weatherData.forecastdate2}
						<br />
						Info: {weatherData.forecast2Info}
						<br />
						Avg Temp: {weatherData.forecast2}
						<br />
						Low: {weatherData.forecast2min}
						<br />
						High: {weatherData.forecast2max}
						<br />
						<img src={weatherData.forecast2Icon} alt='' />
					</p>
				</div>
			)}
		</div>
	);
}
export default WeatherApp;
console.log(WeatherApp);
