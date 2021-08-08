import { FC } from 'react'

import { FourtyEightHoursItemWrapper } from './FourtyEightHoursItemElements'

import { FourtyEightHours } from '../weatherDetails/WeatherDetailsTypes'

type FourtyEightHoursItemProps = {
    weatherItem: FourtyEightHours,
    sliderIndex: number,
    hoursInSlider: number[],
    id: number
}

const FourtyEightHoursItem: FC<FourtyEightHoursItemProps> = ({ weatherItem, sliderIndex, hoursInSlider, id }) => {

    const { weatherIcon, temp, dt, timezone_name } = weatherItem


    const formatTimestamp = () => {

        const date = new Date(dt * 1000).toLocaleString("en-GB", { timeZone: `${timezone_name}`, hour: '2-digit' })
        const hours = date
        return hours;
    }

    const getDateAndMonth = (timestamp: number) => {
        const date = new Date(timestamp * 1000)
        let thisDate;


        let day = date.getDate();
        let month: number | string = date.getMonth();
        switch (month) {
            case 0:
                month = "January"
                break;
            case 1:
                month = "February"
                break;
            case 2:
                month = "March"
                break;
            case 3:
                month = "April"
                break;
            case 4:
                month = "May"
                break;
            case 5:
                month = "June"
                break;
            case 6:
                month = "July"
                break;
            case 7:
                month = "August"
                break;
            case 8:
                month = "September"
                break;
            case 9:
                month = "October"
                break;
            case 10:
                month = "November"
                break;
            case 11:
                month = "December"
                break;
            default:
                break;
        }
        thisDate = `${day} ${month}`


        return thisDate
    }

    return (
        <>
            {weatherItem &&
                <FourtyEightHoursItemWrapper
                    style={{ width: `calc(100%/${hoursInSlider[sliderIndex]}` }}
                >
                    <p className="hours-weather__element__time">{formatTimestamp() + ":00"}</p>
                    <p className="hours-weather__element__date">{getDateAndMonth(dt)}</p>
                    <img className="weather-icon" src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`} alt="" />
                    <h4 className="hours-weather__element__temperature">{temp.toFixed(0) + '°C'}</h4>
                </FourtyEightHoursItemWrapper>}
        </>
    )
}

export default FourtyEightHoursItem
