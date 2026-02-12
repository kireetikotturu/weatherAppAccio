import Header from './components/Header'
import Search from './components/Search'
import WeatherCard from './components/WeatherCard'
import Footer from './components/Footer'
import { useState } from 'react'

const App = () => {
  const [weatherDetails, setWeatherDetails] = useState(null)
  return (
    <div>
      <Header />
      <Search setWeatherDetails={setWeatherDetails}/>
      {weatherDetails && <WeatherCard weatherDetails={weatherDetails}/>}
      <Footer/>

    </div>
  )
}

export default App