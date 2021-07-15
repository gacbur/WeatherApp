import { useEffect, useState } from "react";

import axios from 'axios'

export const useGetCityByLocalization = (getCity: boolean, setGetCity: ((item: boolean) => void)) => {

    const [cityCoords, setCityCoords] = useState<any>({
        latitude: 0,
        longitude: 0,
    })
    const [city, setCity] = useState<any>([])
    const [cityLoading, setCityLoading] = useState(false)
    const [cityError, setCityError] = useState(false)

    useEffect(() => {
        if (getCity) {
            const getCoords = () => {
                navigator.geolocation.getCurrentPosition(function (position) {
                    const { latitude, longitude } = position.coords
                    console.log(latitude)
                    setCityCoords({
                        latitude,
                        longitude
                    })
                });
            }
            getCoords()
        }
    }, [getCity])

    useEffect(() => {
        console.log(city)
    }, [city])

    useEffect(() => {
        if (cityCoords.latitude !== 0) {
            const getCity = (cityCoords: any) => {
                console.log('xd')
                setCityLoading(true)
                setCityError(false)
                setTimeout(() => {
                    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${cityCoords.latitude}&lon=${cityCoords.longitude}&appid=${process.env.REACT_APP_API_KEY}`)
                        .then(response => response.data)
                        .then(data => {
                            setCity([{
                                id: data.id,
                                name: data.name,
                                country: data.sys.country,
                                temp: data.main.temp,
                                temp_min: data.main.temp_min,
                                temp_max: data.main.temp_max,
                                sunrise: data.sys.sunrise,
                                sunset: data.sys.sunset,
                                weatherName: data.weather[0].main,
                                weatherDesc: data.weather[0].description,
                                weatherIcon: data.weather[0].icon
                            }])
                            setCityLoading(false)
                        })
                        .catch((e) => {
                            console.log(e)
                            setCityError(true)
                        })
                }, 1500)
            }
            getCity(cityCoords)
            setGetCity(false)
        } else {
            setCityError(true)
        }
    }, [cityCoords])

    return [city, cityLoading, cityError] as const
}