import { FC, useState, useEffect, useRef } from 'react'

import axios from 'axios'

import SavedCityOptions from '../savedCityOptions/SavedCityOptions'

import { QuickSearchItemType as City } from '../../components/search/Search'

import { SavedCityItemWrapper, SavedCityLoadingOverlay, SavedCityItemContent, MinMaxTempCnt } from './SavedCityItemElements'

import { BsThreeDots } from 'react-icons/bs'

import { ClipLoader } from 'react-spinners'

type SavedCityItemProps = {
    city: City,
    setOpened: (open: boolean) => void;
}

type CityProperties = {
    id: number,
    name: string,
    country: string,
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
}

const SavedCityItem: FC<SavedCityItemProps> = ({ city, setOpened }) => {

    const { id } = city

    const [cityProperties, setCityProperties] = useState<CityProperties[]>([])
    const [cityPropertiesLoading, setCityPropertiesLoading] = useState<boolean>(false)
    const [cityPropertiesError, setCityPropertiesError] = useState<boolean>(false)

    const [cityItemColor, setCityItemColor] = useState<string>('day')
    const [optionsOpened, setOptionsOpened] = useState<boolean>(false)

    const optionsButtonRef = useRef(null)

    useEffect(() => {
        if (cityProperties[0]) {
            const handleItemColor = (cityProperties: CityProperties[]) => {

                const currentHour = new Date(cityProperties[0].dt * 1000 + (cityProperties[0].timezone * 1000)).getHours() - 1

                const sunrise = new Date((cityProperties[0].sunrise + cityProperties[0].timezone) * 1000).getHours()
                const sunset = new Date((cityProperties[0].sunset + cityProperties[0].timezone) * 1000).getHours()

                if (sunrise <= currentHour && currentHour < sunset) {
                    setCityItemColor('day')
                } else {
                    setCityItemColor('night')
                }
            }
            handleItemColor(cityProperties)
        }
    }, [cityProperties])

    useEffect(() => {
        console.log(cityItemColor)
    }, [cityItemColor])


    useEffect(() => {

        const getCityProperties = async () => {
            setCityPropertiesLoading(true)
            setTimeout(async () => {

                try {
                    const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${id}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
                    const data = await result.data
                    console.log(data)
                    setCityProperties([{
                        id: data.id,
                        name: data.name,
                        country: data.sys.country,
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
                    }])
                    setCityPropertiesLoading(false)
                    setCityPropertiesError(false)
                }
                catch (e) {
                    setCityPropertiesLoading(false)
                    setCityPropertiesError(true)
                }
            }, 700)
        }
        getCityProperties()
    }, [id])

    return (
        <SavedCityItemWrapper color={cityItemColor}>
            <SavedCityLoadingOverlay isActive={cityPropertiesLoading}>
                <ClipLoader color="lightblue" size={105} />
            </SavedCityLoadingOverlay>
            {
                cityProperties.length > 0 &&
                <SavedCityItemContent color={cityItemColor}>
                    <div className="options-btn-cnt">
                        <button
                            ref={optionsButtonRef}
                            className="options-btn"
                            onClick={() => setOptionsOpened(prevState => !prevState)}
                        >
                            <BsThreeDots />
                        </button>
                        {optionsOpened && <SavedCityOptions cityId={id} setOptionsOpened={setOptionsOpened} optionsButtonRef={optionsButtonRef} />}
                    </div>
                    <h2 className="city-name">{cityProperties[0].name}, {cityProperties[0].country}</h2>
                    <h4 className="weather-desc">{cityProperties[0].weatherDesc}</h4>
                    <img className="weather-icon" src={`http://openweathermap.org/img/wn/${cityProperties[0].weatherIcon}@2x.png`} alt='' />
                    <h2 className="temp-main">{cityProperties[0].temp.toFixed(0) + "°"}</h2>
                    <MinMaxTempCnt>
                        <div className="temp-wrapper">
                            <h6 className="temp-type">max</h6>
                            <h5 className="temp">{cityProperties[0].temp_max.toFixed(0) + "°"}</h5>

                        </div>
                        <div className="temp-wrapper">
                            <h6 className="temp-type">min</h6>
                            <h5 className="temp">{cityProperties[0].temp_min.toFixed(0) + "°"}</h5>
                        </div>
                    </MinMaxTempCnt>

                </SavedCityItemContent>
            }
        </SavedCityItemWrapper>
    )
}

export default SavedCityItem
