import React from "react";
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { supabase } from './supabaseClient';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';
import SignUpForm from './SignUpForm';



// function WeatherApp() {
//   const [weatherData, setWeatherData] = useState(null);

//   useEffect(() => {
//     const API_KEY = "your_api_key_here";
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=New+York&appid=${API_KEY}`;

//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => setWeatherData(data))
//       .catch((error) => console.log(error));
//   }, []);

//   return (
//     <div>
//       {weatherData ? (
//         <div>
//           <h2>{weatherData.name}</h2>
//           <p>{Math.round((weatherData.main.temp - 273.15) * 9/5 + 32)}°F</p>
//         </div>
//       ) : (
//         <p>Loading weather data...</p>
//       )}
//     </div>
//   );
// }

function App() {
  return (
    <Router>
      
     
        <Routes>
          <Route exact path="/" element={<LoginForm/>} />
          <Route path="/signupform" element={<SignUpForm/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
     
    
    </Router>
  );
}
export default App;
