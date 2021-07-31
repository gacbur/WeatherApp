import { FC } from 'react'

import { FourtyEightHoursItemWrapper } from './FourtyEightHoursItemElements'

import { FourtyEightHours } from '../weatherDetails/WeatherDetailsTypes'

type FourtyEightHoursItemProps = {
    weatherItem: FourtyEightHours,
}

const FourtyEightHoursItem: FC<FourtyEightHoursItemProps> = ({ weatherItem }) => {

    const { weatherDesc, weatherIcon, temp, humidity, pressure, dt } = weatherItem

    const formatTimestamp = (timestamp: number) => {
        const date = new Date(timestamp * 1000)
        const hours = "0" + date.getHours()
        const minutes = "0" + date.getMinutes()
        const formattedTime = hours.substr(-2) + ':' + minutes.substr(-2)
        return formattedTime
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
            {weatherItem && <FourtyEightHoursItemWrapper>
                <span className="time-date-cnt">
                    <h5 className="time">
                        {formatTimestamp(dt).slice(0, 2) + ":00"}
                    </h5>
                    <h5 className="date">
                        {getDateAndMonth(dt)}
                    </h5>
                </span>
                <img className="weather-icon" src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`} alt="" />
                <h4 className="temp">{temp.toFixed(0) + '°C'}</h4>
                <h4 className="desc">{weatherDesc}</h4>
                <div className="humidity-cnt">
                    <h6 className="humidity-title">Humidity (%):</h6>
                    <h5 className="humidity-number">{humidity}</h5>
                </div>
                <div className="pressure-cnt">
                    <h6 className="pressure-title">Pressure (hPa):</h6>
                    <h5 className="presure-number">{pressure}</h5>
                </div>

            </FourtyEightHoursItemWrapper>}
        </>
    )
}

export default FourtyEightHoursItem
