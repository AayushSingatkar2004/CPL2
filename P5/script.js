const getWeather = async (city)=> {
	cityName.innerHTML = city
	fetch('http://api.weatherapi.com/v1/current.json?key=937527c5d974481882573851242906&q=' + city)
		.then(response => response.json())
		.then((response) => {

			console.log(response)

			// Get references to the HTML elements
			const cloud = document.getElementById("cloud");
			const feelslike_c = document.getElementById("feelslike_c");
			const humidity = document.getElementById("humidity");
			const pressure_in = document.getElementById("pressure_in");
			const temp_c = document.getElementById("temp_c");
			const uv = document.getElementById("uv");
			const wind_degree = document.getElementById("wind_degree");
			const wind_dir = document.getElementById("wind_dir");
			const wind_kph = document.getElementById("wind_kph");
			const weatherIcon = document.getElementById("weather-icon")

// console.log(weatherIcon.src)
// weatherIcon.src="images/clouds.png"
			cloud.innerHTML = response.current.cloud;
			feelslike_c.innerHTML = response.current.feelslike_c + " °C";
			humidity.innerHTML = response.current.humidity + " %";
			pressure_in.innerHTML = response.current.pressure_in;
			temp_c.innerHTML = response.current.temp_c + " °C";
			uv.innerHTML = response.current.uv;
			wind_degree.innerHTML = response.current.wind_degree + " °";
			wind_dir.innerHTML = response.current.wind_dir;
			wind_kph.innerHTML = response.current.wind_kph + " Kph";

let x =response.current.condition.text == "Patchy rain nearby"
console.log(x)

			if(response.current.condition.text == "Clear"){
				weatherIcon.src = "images/clear.png";
				// console.log(weatherIcon.src="images/clear.png")
			}
			else if(response.current.condition.text == "Patchy rain nearby" || "Moderate or heavy rain shower"){
				weatherIcon.src = "images/drizzle.png";
			}
			else if(response.current.condition.text == "Overcast" || "Partly cloudy"){
				weatherIcon.src = "images/clouds.png";
			}
			else if(response.current.condition.text == "Light rain shower"){
				weatherIcon.src = "images/drizzle.png";
			}
			else if(response.current.condition.text == "Humid"){
				weatherIcon.src = "images/humidity.png";
			}
			else if(response.current.condition.text == "mist"){
				weatherIcon.src = "images/mist.png";
			}
			else if(response.current.condition.text == "snow"){
				weatherIcon.src = "images/snow.png";
			}
			else if(response.current.condition.text == "wind"){
				weatherIcon.src = "images/wind.png";
			}
			
			
		})
}
// getWeather(city);

submit.addEventListener("click",()=>{
	getWeather(city.value)
})

getWeather("Delhi");

// if()


document.querySelector(".dropdown").addEventListener("click", () => {
	let a = document.querySelector(".dropdownmenu")
	if (a.style.visibility === "hidden") {
		a.style.visibility = "visible";
	}
	else {
		a.style.visibility = "hidden"
	}
})

document.querySelector(".hamburger").addEventListener("click",()=>{
	document.querySelector(".container").style.top="18px"
})

document.querySelector(".close").addEventListener("click",()=>{
	document.querySelector(".container").style.top="-310px"
})




// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '787d4efe02msh83ad60d553ace76p129f6cjsn89b4a5604550',
// 		'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
