import { useEffect, useState, FC } from 'react'

import axios from 'axios'

import { WeatherDetailsWrapper, ButtonsWrapper, DetailsCnt, Space } from './WeatherDetailsElements'

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
            const result = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}04&exclude=current,minutely&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
            const data = await result.data
            setFourtyEightHours([
                data.hourly.map((item: any) => {
                    return {
                        weatherId: item.weather[0].id,
                        weatherMain: item.weather[0].main,
                        weatherDesc: item.weather[0].description,
                        weatherIcon: item.weather[0].icon,
                        temp: item.temp,
                        humidity: item.humidity,
                        pressure: item.pressure
                    }
                })
            ])
            setSevenDays([
                data.daily.map((item: any) => {
                    return {
                        weatherId: item.weather[0].id,
                        weatherMain: item.weather[0].main,
                        weatherDesc: item.weather[0].description,
                        weatherIcon: item.weather[0].icon,
                        temp: item.temp,
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
            ])
            console.log(data)
        }
        getWeatherDetails()
    }, [])

    useEffect(() => {
        console.log(fourtyEightHours)
        console.log(sevenDays)
    }, [sevenDays])

    return (
        <WeatherDetailsWrapper>
            <h4>Forecasts:</h4>
            <ButtonsWrapper>
                <button
                    name="fourtyEightHours"
                    onClick={(e) => handleChangePickedDetails(e)}
                >
                    48 hours
                </button>
                <button
                    name="sevenDays"
                    onClick={(e) => handleChangePickedDetails(e)}

                >
                    7 days
                </button>
            </ButtonsWrapper>
            <Space />
            {fourtyEightHours.length > 0 && sevenDays.length > 0 ? <DetailsCnt>
                {/* {
                    pickedDetails === "fourtyEightHours" &&
                    <>
                        {
                            fourtyEightHours.map(item => {
                                return {

                                }
                            })
                        }
                    </>
                } */}
                {/* {
                    pickedDetails === "sevenDays" && {

                    }
                } */}
            </DetailsCnt> : null}
        </WeatherDetailsWrapper>
    )
}

export default WeatherDetails
