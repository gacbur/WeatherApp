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
    const [locationError, setLocationError] = useState(false)
    const [locationErrorMessage, setLocationErrorMessage] = useState('')

    const showPosition = (position: any) => {
        const { latitude, longitude } = position.coords
        setCityCoords({
            latitude,
            longitude
        })
    }

    const showError = (error: any) => {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                setLocationErrorMessage("Access to Location is denied")
                setLocationError(true)
                break;
            case error.POSITION_UNAVAILABLE:
                setLocationErrorMessage("Location information is unavailable")
                setLocationError(true)
                break;
            case error.TIMEOUT:
                setLocationErrorMessage("Location couldn't be found, try refreshing")
                setLocationError(true)
                break;
            case error.UNKNOWN_ERROR:
                setLocationErrorMessage("An unknown error occurred, try refreshing")
                setLocationError(true)
                break;
        }
    }

    useEffect(() => {
        if (getCity !== false) {
            const getCoords = () => {
                if (navigator.geolocation) {
                    //@ts-ignore
                    navigator.geolocation.getCurrentPosition(showPosition, showError)
                } else {
                    setLocationErrorMessage('Geolocation is not supported by this browser.')
                }
            }
            getCoords();
        }
    }, [getCity])

    useEffect(() => {
        if (cityCoords.latitude !== 0) {
            const getCity = (cityCoords: any) => {
                setCityLoading(true)
                setCityError(false)
                setTimeout(() => {
                    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${cityCoords.latitude}&lon=${cityCoords.longitude}&appid=${process.env.REACT_APP_API_KEY}`)
                        .then(response => response.data)
                        .then(data => {
                            setCity([{
                                id: data.id,
                                name: data.name,
                            }])
                            setCityLoading(false)
                            setCityError(false)
                        })
                        .catch((e) => {
                            console.log(e)
                            setCityError(true)
                            setCityLoading(false)
                        })
                }, 1500)
            }
            getCity(cityCoords)
            setGetCity(false)
        }
    }, [cityCoords])

    return [city, cityLoading, cityError, locationError, locationErrorMessage] as const
}
