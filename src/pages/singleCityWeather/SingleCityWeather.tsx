import { FC, useEffect, useState } from 'react'

import axios from 'axios'

import { RouteComponentProps, withRouter } from 'react-router';

import WeatherDetails from '../../components/weatherDetails/WeatherDetails';

import { SingleCityWeatherWrapper, SingleCityWeatherContent, SingleCityWeatherLoading, SingleCityWeatherError, MainWeatherInfo, MinMaxTempCnt } from './SingleCityWeatherElements'

import { ClipLoader } from 'react-spinners'

import { CityProperties } from '../../components/savedCityItem/SavedCityItem'

type SingleCityWeatherParams = {
    id: string
}

type SingleCityWeatherProps = RouteComponentProps<SingleCityWeatherParams>

export type CityWeatherMainProperties = {
    id: number,
    name: string,
    country: string,
    lon: number,
    lat: number,
    temp: number,
    temp_min: number,
    temp_max: number,
    dt: number,
    sunrise: number,
    sunset: number,
    timezone: number,
    weatherName: string,
    weatherDesc: string,
    weatherIcon: string
    windSpeed: number
    windDeg: number,
    windGust: number,

}

const SingleCityWeather: FC<SingleCityWeatherProps> = ({ match }) => {

    const { id } = match.params

    const [mainInfo, setMainInfo] = useState<CityWeatherMainProperties[]>([])
    const [mainInfoLoading, setMainInfoLoading] = useState<boolean>(false)
    const [mainInfoError, setMainInfoError] = useState<boolean>(false)

    const [cityItemColor, setCityItemColor] = useState<string>('day')

    useEffect(() => {
        setMainInfoLoading(true)
        const getMainInfo = async () => {
            setTimeout(async () => {
                try {
                    const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${id}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
                    const data = await result.data
                    console.log(data)
                    setMainInfo([{
                        id: data.id,
                        name: data.name,
                        country: data.sys.country,
                        lon: data.coord.lon,
                        lat: data.coord.lat,
                        temp: data.main.temp,
                        temp_min: data.main.temp_min,
                        temp_max: data.main.temp_max,
                        dt: data.dt,
                        sunrise: data.sys.sunrise,
                        sunset: data.sys.sunset,
                        timezone: data.timezone,
                        weatherName: data.weather[0].main,
                        weatherDesc: data.weather[0].description,
                        weatherIcon: data.weather[0].icon,
                        windSpeed: data.wind.speed,
                        windDeg: data.wind.deg,
                        windGust: data.wind.gust,
                    }])
                    setMainInfoLoading(false)
                    setMainInfoError(false)
                }
                catch (e) {
                    setMainInfoLoading(false)
                    setMainInfoError(true)
                }
            }, 700)
        }
        getMainInfo()
    }, [id])

    useEffect(() => {
        if (mainInfo[0]) {
            const handleItemColor = (mainInfo: CityProperties[]) => {
                const currentHour = new Date(mainInfo[0].dt * 1000 + (mainInfo[0].timezone * 1000)).getHours() - 1

                const sunrise = new Date((mainInfo[0].sunrise + mainInfo[0].timezone) * 1000).getHours()
                const sunset = new Date((mainInfo[0].sunset + mainInfo[0].timezone) * 1000).getHours()

                if (sunrise <= currentHour && currentHour < sunset) {
                    setCityItemColor('day')
                } else {
                    setCityItemColor('night')
                }
            }
            handleItemColor(mainInfo)
        }
    }, [mainInfo])

    return (
        <SingleCityWeatherWrapper >
            <SingleCityWeatherContent color={cityItemColor}>
                {mainInfo.length > 0 &&
                    <MainWeatherInfo>
                        <h2 className="city-name">{mainInfo[0].name}, {mainInfo[0].country}</h2>
                        <img className="weather-icon" src={`http://openweathermap.org/img/wn/${mainInfo[0].weatherIcon}@2x.png`} alt='' />
                        <h4 className="weather-desc">{mainInfo[0].weatherName + ", " + mainInfo[0].weatherDesc}</h4>
                        <h2 className="temp-main">{mainInfo[0].temp.toFixed(0) + "°"}</h2>
                        <MinMaxTempCnt>
                            <div className="temp-wrapper">
                                <h6 className="temp-type">max</h6>
                                <h5 className="temp">{mainInfo[0].temp_max.toFixed(0) + "°"}</h5>

                            </div>
                            <div className="temp-wrapper">
                                <h6 className="temp-type">min</h6>
                                <h5 className="temp">{mainInfo[0].temp_min.toFixed(0) + "°"}</h5>
                            </div>
                        </MinMaxTempCnt>
                    </MainWeatherInfo>
                }
                {mainInfo.length > 0 &&
                    <WeatherDetails lon={mainInfo[0].lon} lat={mainInfo[0].lat}>

                    </WeatherDetails>
                }
                <SingleCityWeatherLoading isActive={mainInfoLoading}>
                    <ClipLoader color="lightblue" size={105} />
                </SingleCityWeatherLoading>
                <SingleCityWeatherError isActive={mainInfoError}>
                    <h4>Sorry, failed getting the weather information. Try refreshing</h4>
                </SingleCityWeatherError>
            </SingleCityWeatherContent>
        </SingleCityWeatherWrapper>
    )
}

export default withRouter(SingleCityWeather)