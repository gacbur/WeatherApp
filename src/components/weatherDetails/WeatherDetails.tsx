import { useEffect, useState, FC } from 'react'

import axios from 'axios'

import { WeatherDetailsWrapper } from './WeatherDetailsElements'

import SevenDaysCarousel from '../sevenDaysCarousel/SevenDaysCarousel'
import FourtyEightHoursCarousel from '../fourtyEightHoursCarousel/FourtyEightHoursCarousel'

import { FourtyEightHours, SevenDays } from './WeatherDetailsTypes'

type WeatherDetailsProps = {
    lon: number
    lat: number,
}

const WeatherDetails: FC<WeatherDetailsProps> = ({ lon, lat }) => {

    const [fourtyEightHours, setFourtyEightHours] = useState<FourtyEightHours[]>([])
    const [sevenDays, setSevenDays] = useState<SevenDays[]>([])


    useEffect(() => {
        const getWeatherDetails = async () => {
            const result = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}04&exclude=minutely&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
            const data = await result.data
            setFourtyEightHours(
                data.hourly.map((item: any) => {
                    return {
                        weatherId: item.weather[0].id,
                        weatherMain: item.weather[0].main,
                        weatherDesc: item.weather[0].description,
                        weatherIcon: item.weather[0].icon,
                        dt: item.dt,
                        dtCurrent: data.current.dt,
                        temp: item.temp,
                        humidity: item.humidity,
                        pressure: item.pressure,
                        timezone: data.timezone_offset,
                        timezone_name: data.timezone
                    }
                })
            )
            setSevenDays(
                data.daily.map((item: any) => {
                    return {
                        weatherId: item.weather[0].id,
                        weatherMain: item.weather[0].main,
                        weatherDesc: item.weather[0].description,
                        weatherIcon: item.weather[0].icon,
                        dt: item.dt,
                        temp: item.temp.day,
                        humidity: item.humidity,
                        pressure: item.pressure,
                        sunriseTime: item.sunrise,
                        sunsetTime: item.sunset,
                        mornTemp: item.temp.morn,
                        dayTemp: item.temp.day,
                        eveTemp: item.temp.eve,
                        nightTemp: item.temp.night,
                        timezone: data.timezone_offset
                    }
                })
            )
        }
        getWeatherDetails()
    }, [])


    return (
        <WeatherDetailsWrapper>
            <FourtyEightHoursCarousel fourtyEightHours={fourtyEightHours} />
            <SevenDaysCarousel sevenDays={sevenDays} />
        </WeatherDetailsWrapper >
    )
}

export default WeatherDetails
