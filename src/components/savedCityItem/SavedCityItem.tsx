import { FC, useState, useEffect, useRef } from 'react'

import { useHistory } from 'react-router-dom'

import axios from 'axios'

import SavedCityOptions from '../savedCityOptions/SavedCityOptions'

import { QuickSearchItemType as City } from '../../components/search/Search'

import { SavedCityItemWrapper, SavedCityLoadingOverlay, SavedCityErrorOverlay, SavedCityItemContent, MinMaxTempCnt } from './SavedCityItemElements'

import { BsThreeDots } from 'react-icons/bs'

import { ClipLoader } from 'react-spinners'

type SavedCityItemProps = {
    city: City,
    setOpened: (open: boolean) => void;
}

export type CityProperties = {
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

    const history = useHistory()

    const [cityProperties, setCityProperties] = useState<CityProperties[]>([])
    const [cityPropertiesLoading, setCityPropertiesLoading] = useState<boolean>(false)
    const [cityPropertiesError, setCityPropertiesError] = useState<boolean>(false)

    const [cityItemColor, setCityItemColor] = useState<string>('day')
    const [optionsOpened, setOptionsOpened] = useState<boolean>(false)

    const CityOptionsEl = useRef(null)
    const optionsButtonEl = useRef(null)

    useEffect(() => {
        if (cityProperties[0]) {
            const handleItemColor = (cityProperties: CityProperties[]) => {

                const d = new Date()
                const localTime = d.getTime()
                const localOffset = d.getTimezoneOffset() * 60000
                const utc = localTime + localOffset
                const offset = utc + (1000 * + cityProperties[0].timezone)
                const currentHour = new Date(offset).getHours()

                const sunrise = new Date((cityProperties[0].sunrise + cityProperties[0].timezone) * 1000).getHours() - 2
                const sunset = new Date((cityProperties[0].sunset + cityProperties[0].timezone) * 1000).getHours() - 2

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
        const getCityProperties = async () => {
            setCityPropertiesLoading(true)
            setTimeout(async () => {
                try {
                    const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${id}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
                    const data = await result.data
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

    const handleGoToCityPage = (e: any, optionsButtonEl: any, CityOptionsEl: any) => {
        if (optionsButtonEl.current && optionsButtonEl.current.contains(e.target)) {
            return null
        }
        else if (CityOptionsEl.current && CityOptionsEl.current.contains(e.target)) {
            return null
        }
        else {
            history.push(`/weather-item/${id}`)
        }
    }

    return (
        <SavedCityItemWrapper
            color={cityItemColor}
            onClick={(e) => handleGoToCityPage(e, optionsButtonEl, CityOptionsEl)}
        >
            <SavedCityLoadingOverlay isActive={cityPropertiesLoading}>
                <ClipLoader color="lightblue" size={105} />
            </SavedCityLoadingOverlay>
            <SavedCityErrorOverlay isActive={cityPropertiesError}>
                <h4>Sorry, failed getting the weather information. Try refreshing</h4>
            </SavedCityErrorOverlay>
            {
                cityProperties.length > 0 &&
                <SavedCityItemContent color={cityItemColor}>
                    <div className="options-btn-cnt">
                        <button
                            className="options-btn"
                            ref={optionsButtonEl}
                            onClick={() => setOptionsOpened(prevState => !prevState)}
                        >
                            <BsThreeDots />
                        </button>
                        {optionsOpened && <SavedCityOptions cityId={id} setOptionsOpened={setOptionsOpened} optionsButtonEl={optionsButtonEl} CityOptionsEl={CityOptionsEl} />}
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
