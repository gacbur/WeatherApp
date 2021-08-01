import { useEffect, useState, FC } from 'react'

import axios from 'axios'

import { WeatherDetailsWrapper, ButtonsWrapper, DetailsCnt, Space } from './WeatherDetailsElements'

import FourtyEightHoursItem from '../fourtyEightHoursItem/FourtyEightHoursItem'
import SevenDaysItem from '../sevenDaysItem/SevenDaysItem'


import { FourtyEightHours, SevenDays } from './WeatherDetailsTypes'

type WeatherDetailsProps = {
    lon: number
    lat: number,
}

const WeatherDetails: FC<WeatherDetailsProps> = ({ lon, lat }) => {

    const [fourtyEightHours, setFourtyEightHours] = useState<FourtyEightHours[]>([])
    const [sevenDays, setSevenDays] = useState<SevenDays[]>([])

    const [pickedDetails, setPickedDetails] = useState<string>('fourtyEightHours')

    const handleChangePickedDetails = (e: any) => {
        setPickedDetails(e.target.name)
    }

    useEffect(() => {
        const getWeatherDetails = async () => {
            const result = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}04&exclude=minutely&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
            const data = await result.data

            console.log(data)

            setFourtyEightHours(
                data.hourly.map((item: any) => {
                    return {
                        weatherId: item.weather[0].id,
                        weatherMain: item.weather[0].main,
                        weatherDesc: item.weather[0].description,
                        weatherIcon: item.weather[0].icon,
                        dt: item.dt,
                        temp: item.temp,
                        humidity: item.humidity,
                        pressure: item.pressure
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
                        nightTemp: item.temp.night
                    }
                })
            )
        }
        getWeatherDetails()
    }, [])


    return (
        <WeatherDetailsWrapper>
            <h4>Forecasts:</h4>
            <ButtonsWrapper>
                <button
                    name="fourtyEightHours"
                    className={pickedDetails !== 'fourtyEightHours' ? 'active' : ''}
                    onClick={(e) => handleChangePickedDetails(e)}
                >
                    48 hours
                </button>
                <button
                    name="sevenDays"
                    className={pickedDetails !== 'sevenDays' ? 'active' : ''}
                    onClick={(e) => handleChangePickedDetails(e)}

                >
                    7 days
                </button>
            </ButtonsWrapper>
            {fourtyEightHours.length > 0 && sevenDays.length > 0 ? <DetailsCnt>
                {
                    pickedDetails === "fourtyEightHours" &&
                    <>
                        {
                            fourtyEightHours.map((weatherItem, index) => {
                                return <FourtyEightHoursItem weatherItem={weatherItem} key={index} />
                            })
                        }
                    </>
                }
                {
                    pickedDetails === "sevenDays" &&
                    <>
                        {
                            sevenDays.map((weatherItem, index) => {
                                return <SevenDaysItem weatherItem={weatherItem} key={index} />
                            })
                        }
                    </>
                }
            </DetailsCnt>
                :
                null
            }
        </WeatherDetailsWrapper>
    )
}

export default WeatherDetails
